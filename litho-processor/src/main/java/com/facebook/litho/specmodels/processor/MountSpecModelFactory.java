/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.facebook.litho.specmodels.processor;

import com.facebook.litho.annotations.FromBind;
import com.facebook.litho.annotations.FromBoundsDefined;
import com.facebook.litho.annotations.FromMeasure;
import com.facebook.litho.annotations.FromMeasureBaseline;
import com.facebook.litho.annotations.FromPrepare;
import com.facebook.litho.annotations.MountSpec;
import com.facebook.litho.annotations.MountingType;
import com.facebook.litho.annotations.OnCreateMountContent;
import com.facebook.litho.annotations.OnCreateTreeProp;
import com.facebook.litho.annotations.ShouldUpdate;
import com.facebook.litho.specmodels.internal.ImmutableList;
import com.facebook.litho.specmodels.internal.RunMode;
import com.facebook.litho.specmodels.model.ClassNames;
import com.facebook.litho.specmodels.model.DelegateMethodDescriptions;
import com.facebook.litho.specmodels.model.DependencyInjectionHelper;
import com.facebook.litho.specmodels.model.MountSpecModel;
import com.squareup.javapoet.TypeName;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.annotation.Nullable;
import javax.annotation.processing.Messager;
import javax.annotation.processing.RoundEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeKind;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.util.Elements;

/** Factory for creating {@link MountSpecModel}s. */
public class MountSpecModelFactory implements SpecModelFactory {
  private static final List<Class<? extends Annotation>> INTER_STAGE_INPUT_ANNOTATIONS =
      new ArrayList<>();
  private static final List<Class<? extends Annotation>> DELEGATE_METHOD_ANNOTATIONS =
      new ArrayList<>();

  static {
    INTER_STAGE_INPUT_ANNOTATIONS.add(FromPrepare.class);
    INTER_STAGE_INPUT_ANNOTATIONS.add(FromMeasureBaseline.class);
    INTER_STAGE_INPUT_ANNOTATIONS.add(FromMeasure.class);
    INTER_STAGE_INPUT_ANNOTATIONS.add(FromBoundsDefined.class);
    INTER_STAGE_INPUT_ANNOTATIONS.add(FromBind.class);
    DELEGATE_METHOD_ANNOTATIONS.addAll(
        DelegateMethodDescriptions.MOUNT_SPEC_DELEGATE_METHODS_MAP.keySet());
    DELEGATE_METHOD_ANNOTATIONS.add(OnCreateTreeProp.class);
    DELEGATE_METHOD_ANNOTATIONS.add(ShouldUpdate.class);
  }

  @Override
  public Set<Element> extract(RoundEnvironment roundEnvironment) {
    return (Set<Element>) roundEnvironment.getElementsAnnotatedWith(MountSpec.class);
  }

  /**
   * Create a {@link MountSpecModel} from the given {@link TypeElement} and an optional {@link
   * DependencyInjectionHelper}.
   */
  @Override
  public MountSpecModel create(
      Elements elements,
      TypeElement element,
      Messager messager,
      RunMode runMode,
      @Nullable DependencyInjectionHelper dependencyInjectionHelper,
      @Nullable InterStageStore interStageStore) {
    return new MountSpecModel(
        element.getQualifiedName().toString(),
        element.getAnnotation(MountSpec.class).value(),
        DelegateMethodExtractor.getDelegateMethods(
            element,
            DELEGATE_METHOD_ANNOTATIONS,
            INTER_STAGE_INPUT_ANNOTATIONS,
            ImmutableList.<Class<? extends Annotation>>of(ShouldUpdate.class),
            messager),
        EventMethodExtractor.getOnEventMethods(
            elements, element, INTER_STAGE_INPUT_ANNOTATIONS, messager, runMode),
        TriggerMethodExtractor.getOnTriggerMethods(
            elements, element, INTER_STAGE_INPUT_ANNOTATIONS, messager),
        UpdateStateMethodExtractor.getOnUpdateStateMethods(
            element, INTER_STAGE_INPUT_ANNOTATIONS, messager),
        interStageStore == null
            ? ImmutableList.of()
            : CachedPropNameExtractor.getCachedPropNames(
                interStageStore, element.getQualifiedName()),
        ImmutableList.copyOf(TypeVariablesExtractor.getTypeVariables(element)),
        ImmutableList.copyOf(PropDefaultsExtractor.getPropDefaults(element)),
        EventDeclarationsExtractor.getEventDeclarations(
            elements, element, MountSpec.class, runMode),
        JavadocExtractor.getClassJavadoc(elements, element),
        AnnotationExtractor.extractValidAnnotations(element),
        JavadocExtractor.getPropJavadocs(elements, element),
        element.getAnnotation(MountSpec.class).isPublic(),
        dependencyInjectionHelper,
        element.getAnnotation(MountSpec.class).isPureRender(),
        element.getAnnotation(MountSpec.class).canMountIncrementally(),
        element.getAnnotation(MountSpec.class).shouldUseDisplayList(),
        element.getAnnotation(MountSpec.class).poolSize(),
        element.getAnnotation(MountSpec.class).canPreallocate(),
        getMountType(elements, element),
        SpecElementTypeDeterminator.determine(element),
        element);
  }

  private static TypeName getMountType(Elements elements, TypeElement element) {
    TypeElement viewType = elements.getTypeElement(ClassNames.VIEW_NAME);
    TypeElement drawableType = elements.getTypeElement(ClassNames.DRAWABLE_NAME);

    for (Element enclosedElement : element.getEnclosedElements()) {
      if (enclosedElement.getKind() != ElementKind.METHOD) {
        continue;
      }

      OnCreateMountContent annotation = enclosedElement.getAnnotation(OnCreateMountContent.class);
      if (annotation != null) {
        if (annotation.mountingType() == MountingType.VIEW) {
          return ClassNames.COMPONENT_LIFECYCLE_MOUNT_TYPE_VIEW;
        }
        if (annotation.mountingType() == MountingType.DRAWABLE) {
          return ClassNames.COMPONENT_LIFECYCLE_MOUNT_TYPE_DRAWABLE;
        }
        TypeMirror returnType = ((ExecutableElement) enclosedElement).getReturnType();
        while (returnType.getKind() != TypeKind.NONE && returnType.getKind() != TypeKind.VOID) {
          final TypeElement returnElement = (TypeElement) ((DeclaredType) returnType).asElement();

          if (returnElement.equals(viewType)) {
            return ClassNames.COMPONENT_LIFECYCLE_MOUNT_TYPE_VIEW;
          } else if (returnElement.equals(drawableType)) {
            return ClassNames.COMPONENT_LIFECYCLE_MOUNT_TYPE_DRAWABLE;
          }
          try {
            returnType = returnElement.getSuperclass();
          } catch (RuntimeException e) {
            throw new ComponentsProcessingException(
                "Failed to get mount type for "
                    + element
                    + ".  Try specifying `@OnCreateMountContent(mountingType = MountingType.VIEW)` (or DRAWABLE).");
          }
        }
      }
    }

    return ClassNames.COMPONENT_LIFECYCLE_MOUNT_TYPE_NONE;
  }
}
