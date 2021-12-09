"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7411],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){return function(n){var t=d(n.components);return o.createElement(e,r({},n,{components:t}))}},d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?o.createElement(h,s(s({ref:n},l),{},{components:t})):o.createElement(h,s({ref:n},l))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<r;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},81407:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>m,default:()=>u});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),p=["components"],s={id:"props",title:"Props"},i=void 0,l={unversionedId:"props",id:"props",isDocsHomePage:!1,title:"Props",description:"Litho uses a unidirectional data flow with immutable inputs. Following the name established by React, the inputs that a Component takes are known as props.",source:"@site/../docs/props.md",sourceDirName:".",slug:"/props",permalink:"/docs/props",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/props.md",tags:[],version:"current",frontMatter:{id:"props",title:"Props"}},m=[{value:"Defining and using Props",id:"defining-and-using-props",children:[],level:2},{value:"Setting Props",id:"setting-props",children:[],level:2},{value:"Prop defaults",id:"prop-defaults",children:[],level:2},{value:"Resource Types",id:"resource-types",children:[],level:2},{value:"Variable Arguments",id:"variable-arguments",children:[],level:2},{value:"Immutability",id:"immutability",children:[],level:2},{value:"Common Props",id:"common-props",children:[],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Litho uses a unidirectional data flow with immutable inputs. Following the name established by ",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"React"),", the inputs that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Component")," takes are known as ",(0,r.mdx)("em",{parentName:"p"},"props"),"."),(0,r.mdx)("h2",{id:"defining-and-using-props"},"Defining and using Props"),(0,r.mdx)("p",null,"The props for a given ",(0,r.mdx)("inlineCode",{parentName:"p"},"Component")," are the union of all arguments annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," in your spec methods. You can access the value of the props in all the methods that declare it as an ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," parameter."),(0,r.mdx)("p",null,"The same prop can be defined and accessed in multiple lifecycle methods. The annotation processor will ensure you're using consistent prop types and consistent annotation parameters across all the spec methods."),(0,r.mdx)("p",null,"Take the following ",(0,r.mdx)("inlineCode",{parentName:"p"},"Component")," spec, for example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@MountSpec\nclass MyComponentSpec {\n\n  @OnPrepare\n  static void onPrepare(\n      ComponentContext c,\n      @Prop(optional = true) @Nullable String prop1) {\n    ...\n  }\n\n  @OnMount\n  static void onMount(\n      ComponentContext c,\n      SomeDrawable convertDrawable,\n      @Prop(optional = true) @Nullable String prop1,\n      @Prop int prop2) {\n    if (prop1 != null) {\n      ...\n    }\n  }\n}\n")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"MyComponentSpec")," defines two props: a ",(0,r.mdx)("em",{parentName:"p"},"String")," prop called ",(0,r.mdx)("inlineCode",{parentName:"p"},"prop1")," and an ",(0,r.mdx)("em",{parentName:"p"},"int")," prop named ",(0,r.mdx)("inlineCode",{parentName:"p"},"prop2"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"prop1")," is optional and it needs to be marked as such in all the methods that define it, otherwise the annotation processor will throw an exception."),(0,r.mdx)("p",null,"When the lifecycle methods get called, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," parameters will hold the value passed down from the Component's parent when the Component was created (or their default values)."),(0,r.mdx)("p",null,"Props are defined and used the same way in ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutSpecs")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountSpecs"),"."),(0,r.mdx)("h2",{id:"setting-props"},"Setting Props"),(0,r.mdx)("p",null,"For each unique prop defined on the spec, the annotation processor creates a builder pattern method on the Component Builder that has the same name as the prop and that takes as only parameter the value to set for that prop."),(0,r.mdx)("p",null,"You pass down values for these props by calling the appropriate methods on the generated Component Builder:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'MyComponent.create(c)\n    .prop1("My prop 1")\n    .prop2(256)\n    .build();\n')),(0,r.mdx)("h2",{id:"prop-defaults"},"Prop defaults"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/PropDefault.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"PropDefault"))," can be used for setting\nthe default value of an optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"Prop")," in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutSpec")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountSpec"),". The annotated field must\nbe a constant (i.e. ",(0,r.mdx)("inlineCode",{parentName:"p"},"static final"),") with the same name and type as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Prop"),". We'll often want to\ndefine explicit default values for our optional props instead of simply using Java's defaults."),(0,r.mdx)("p",null,"Let's see an how we can declare and use ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropDefault"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\nclass SomeSpec {\n\n  @PropDefault static final String name = "John Doe";  // default value for name\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop(optional = true) String name) {\n    return Text.create(c)\n        .text(name)\n        .textSizeSp(16)\n        .marginDip(YogaEdge.BOTTOM, 4)\n        .build();\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"PropDefault")," also support values from Resources via setting a ",(0,r.mdx)("inlineCode",{parentName:"p"},"resType")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"resId"),". Let's define\na ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropDefault")," with a resource value:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@PropDefault(resType = ResType.DIMEN_SIZE, resId = R.dimen.default_spacing) static float prop3;\n")),(0,r.mdx)("h2",{id:"resource-types"},"Resource Types"),(0,r.mdx)("p",null,"When creating layouts, it's very common to use values from Android's resource system such as dimensions, colors, strings, etc. Litho provides convenient ways to set prop values from Android resources using annotations."),(0,r.mdx)("p",null,"Let's consider a simple example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop CharSequence someString,\n      @Prop int someSize,\n      @Prop int someColor) {\n    ...\n  }\n}\n")),(0,r.mdx)("p",null,"In the example above, ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyComponent")," has props that are expected to take a color integer (",(0,r.mdx)("inlineCode",{parentName:"p"},"someColor"),"), a pixel dimension (",(0,r.mdx)("inlineCode",{parentName:"p"},"someSize"),"), and a string (",(0,r.mdx)("inlineCode",{parentName:"p"},"someString"),") as value. Very often, you'll want to set the value of these props using resource values:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Resources res = c.getResources();\n\nMyComponent.create(c)\n    .someString(res.getString(R.string.my_string))\n    .someSize(res.getDimensionPixelSize(R.dimen.my_dimen))\n    .someColor(res.getColor(R.color.my_color))\n")),(0,r.mdx)("p",null,"The framework allows you to annotate props with resource types so that your component builder has convenience methods to use resource values directly."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop(resType = ResType.STRING) CharSequence someString,\n      @Prop(resType = ResType.DIMEN_SIZE) int someSize,\n      @Prop(resType = ResType.COLOR) int someColor) {\n    ...\n  }\n}\n")),(0,r.mdx)("p",null,"With the changes above, ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyComponent"),"'s builder will contain ",(0,r.mdx)("em",{parentName:"p"},"Res"),", ",(0,r.mdx)("em",{parentName:"p"},"Attr"),", ",(0,r.mdx)("em",{parentName:"p"},"Dip"),", and ",(0,r.mdx)("em",{parentName:"p"},"Px")," methods for the annotated props according to their resource types. So you'll be able to do the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MyComponent.create(c)\n    .someStringRes(R.string.my_string)\n    .someSizePx(10)\n    .someSizeDip(10)\n    .someColorAttr(android.R.attr.textColorTertiary)\n")),(0,r.mdx)("p",null,"Other supported resource types are ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.STRING_ARRAY"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.INT"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.INT_ARRAY"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.BOOL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.COLOR"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.DIMEN_OFFSET"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.FLOAT"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.DRAWABLE"),"."),(0,r.mdx)("h2",{id:"variable-arguments"},"Variable Arguments"),(0,r.mdx)("p",null,"Sometimes, you want to support having a list of items. This can unfortunately\nbe a bit painful since it requires the developer to make a list, add all the\nitems to it, and pass list to the component builder's method. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"varArg"),"\nparameter aims to makes this a little easier."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class MyComponentSpec {\n\n   @OnCreateLayout\n   static Component onCreateLayout(\n       ComponentContext c,\n       @Prop(varArg = "name") List<String> names) {\n     ...\n   }\n}\n')),(0,r.mdx)("p",null,"This can then be used as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'MyComponent.create(c)\n    .name("One")\n    .name("Two")\n    .name("Three")\n')),(0,r.mdx)("p",null,"This also works for props with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"resType"),". For instance, given a Component like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class MyComponent2Spec {\n\n   @OnCreateLayout\n   static Component onCreateLayout(\n       ComponentContext c,\n       @Prop(varArg = "size", resType = ResType.DIMEN_TEXT) List<Float> sizes) {\n     ...\n   }\n}\n')),(0,r.mdx)("p",null,"You can add multiple sizes through calls to the builder:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MyComponent2.create(c)\n    .sizePx(1f)\n    .sizeRes(resId)\n    .sizeAttr(attrResId)\n    .sizeDip(1f)\n    .sizeSp(1f)\n")),(0,r.mdx)("h2",{id:"immutability"},"Immutability"),(0,r.mdx)("p",null,"The props of a Component are read-only. The Component's parent passes down values for the props when it creates the Component and they cannot change throughout the lifecycle of the Component. If the props values must be updated, the parent has to create a new Component and pass down new values for the props.\nThe props objects should be made immutable. Due to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/asynchronous-layout"},"background layout"),", props may be accessed on multiple threads. Props immutability ensures that no thread safety issues can happen during the component's lifecycle."),(0,r.mdx)("h2",{id:"common-props"},"Common Props"),(0,r.mdx)("p",null,"Common props are props that are available on all Components, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"margin"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"padding"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"flex")," etc. A full list of CommonProps can be found in the code ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/litho-core/src/main/java/com/facebook/litho/Component.java"},"here"),"."),(0,r.mdx)("p",null,"You may want to access a Common Prop inside your Component (e.g. to see if a click handler was set on it), in which case you should use set ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," param ",(0,r.mdx)("inlineCode",{parentName:"p"},"isCommonProp"),", and name your prop using the same name as the Common Prop. If you wish to override the behavior of the Common Prop, then you should also set the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," param ",(0,r.mdx)("inlineCode",{parentName:"p"},"overrideCommonPropBehavior")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),"."))}u.isMDXComponent=!0}}]);