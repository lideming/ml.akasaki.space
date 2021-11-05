"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[31],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,l(l({ref:t},f),{},{components:n})):r.createElement(g,l({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return k},default:function(){return h}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&f(e,n,t[n]);return e};const u={},m="Footnote test",g={unversionedId:"chtest/footnote",id:"chtest/footnote",isDocsHomePage:!1,title:"Footnote test",description:"This is some text with footnote.",source:"@site/docs/chtest/footnote.md",sourceDirName:"chtest",slug:"/chtest/footnote",permalink:"/chtest/footnote",tags:[],version:"current",frontMatter:{}},k=[],y={toc:k};function h(e){var t,n=e,{components:o}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),f),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"footnote-test"}),"Footnote test"),(0,r.kt)("p",null,"This is some text with footnote",(0,r.kt)("sup",c({parentName:"p"},{id:"fnref-1"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This is another text with another footnote",(0,r.kt)("sup",c({parentName:"p"},{id:"fnref-2"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),"."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"Test long footnote",(0,r.kt)("sup",c({parentName:"p"},{id:"fnref-3"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3")),"."),(0,r.kt)("p",null,"Test long footnote name",(0,r.kt)("sup",c({parentName:"p"},{id:"fnref-some-footnote"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-some-footnote",className:"footnote-ref"}),"some-footnote"))),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("p",null,"This page is very long."),(0,r.kt)("div",c({},{className:"footnotes"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",c({parentName:"ol"},{id:"fn-1"}),(0,r.kt)("p",{parentName:"li"},"This is the footnote.",(0,r.kt)("a",c({parentName:"p"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9"))),(0,r.kt)("li",c({parentName:"ol"},{id:"fn-2"}),(0,r.kt)("p",{parentName:"li"},"This is the footnote.",(0,r.kt)("a",c({parentName:"p"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9"))),(0,r.kt)("li",c({parentName:"ol"},{id:"fn-3"}),(0,r.kt)("p",{parentName:"li"},"Long footnote"),(0,r.kt)("p",{parentName:"li"},"with\nmultiple\nlines.",(0,r.kt)("a",c({parentName:"p"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9"))),(0,r.kt)("li",c({parentName:"ol"},{id:"fn-some-footnote"}),(0,r.kt)("p",{parentName:"li"},"Footnote name"),(0,r.kt)("p",{parentName:"li"},"can be long.",(0,r.kt)("a",c({parentName:"p"},{href:"#fnref-some-footnote",className:"footnote-backref"}),"\u21a9"))))))}h.isMDXComponent=!0}}]);