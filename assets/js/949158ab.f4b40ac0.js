"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[8438],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||c;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},61439:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return N},default:function(){return g}});var r=t(3905),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&l(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&l(e,t,n[t]);return e};const s={},m="\u7f16\u7801\u5668-\u89e3\u7801\u5668",f={unversionedId:"ch3p2/[3]encoder-decoder",id:"ch3p2/[3]encoder-decoder",isDocsHomePage:!1,title:"\u7f16\u7801\u5668-\u89e3\u7801\u5668",description:"\u7f16\u7801\u5668-\u89e3\u7801\u5668\uff08Encoder-Decoder\uff09\u662f\u6df1\u5ea6\u5b66\u4e60\u4e2d\u975e\u5e38\u5e38\u89c1\u7684\u4e00\u4e2a\u6a21\u578b\u6846\u67b6\uff0c\u6bd4\u5982\u65e0\u76d1\u7763\u7b97\u6cd5\u7684auto-encoding\u5c31\u662f\u7528\u7f16\u7801-\u89e3\u7801\u7684\u7ed3\u6784\u8bbe\u8ba1\u5e76\u8bad\u7ec3\u7684\uff1b\u6bd4\u5982\u8fd9\u4e24\u5e74\u6bd4\u8f83\u70ed\u7684image caption\u7684\u5e94\u7528\uff0c\u5c31\u662fCNN-RNN\u7684\u7f16\u7801-\u89e3\u7801\u6846\u67b6\uff1b\u518d\u6bd4\u5982\u795e\u7ecf\u7f51\u7edc\u673a\u5668\u7ffb\u8bd1NMT\u6a21\u578b\uff0c\u5f80\u5f80\u5c31\u662fLSTM-LSTM\u7684\u7f16\u7801-\u89e3\u7801\u6846\u67b6\u3002\u56e0\u6b64\uff0c\u51c6\u786e\u7684\u8bf4\uff0cEncoder-Decoder\u5e76\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u6a21\u578b\uff0c\u800c\u662f\u4e00\u7c7b\u6846\u67b6\u3002Encoder\u548cDecoder\u90e8\u5206\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u6587\u5b57\uff0c\u8bed\u97f3\uff0c\u56fe\u50cf\uff0c\u89c6\u9891\u6570\u636e\uff0c\u6a21\u578b\u53ef\u4ee5\u91c7\u7528CNN\uff0cRNN\uff0cBiRNN\u3001LSTM\u3001GRU\u7b49\u7b49\u3002\u6240\u4ee5\u57fa\u4e8eEncoder-Decoder\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u8ba1\u51fa\u5404\u79cd\u5404\u6837\u7684\u5e94\u7528\u7b97\u6cd5\u3002",source:"@site/docs/ch3p2/[3]encoder-decoder.md",sourceDirName:"ch3p2",slug:"/ch3p2/[3]encoder-decoder",permalink:"/ch3p2/[3]encoder-decoder",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u56fe\u50cf\u589e\u5e7f",permalink:"/ch3p2/[2]image-augmentation"},next:{title:"\u6ce8\u610f\u529b\u673a\u5236",permalink:"/ch3p2/[4]attention"}},N=[],b={toc:N};function g(e){var n,o=e,{components:l}=o,s=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(o,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),s),c(n,a({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"\u7f16\u7801\u5668-\u89e3\u7801\u5668"}),"\u7f16\u7801\u5668-\u89e3\u7801\u5668"),(0,r.kt)("p",null,"\u7f16\u7801\u5668-\u89e3\u7801\u5668\uff08Encoder-Decoder\uff09\u662f\u6df1\u5ea6\u5b66\u4e60\u4e2d\u975e\u5e38\u5e38\u89c1\u7684\u4e00\u4e2a\u6a21\u578b\u6846\u67b6\uff0c\u6bd4\u5982\u65e0\u76d1\u7763\u7b97\u6cd5\u7684auto-encoding\u5c31\u662f\u7528\u7f16\u7801-\u89e3\u7801\u7684\u7ed3\u6784\u8bbe\u8ba1\u5e76\u8bad\u7ec3\u7684\uff1b\u6bd4\u5982\u8fd9\u4e24\u5e74\u6bd4\u8f83\u70ed\u7684image caption\u7684\u5e94\u7528\uff0c\u5c31\u662fCNN-RNN\u7684\u7f16\u7801-\u89e3\u7801\u6846\u67b6\uff1b\u518d\u6bd4\u5982\u795e\u7ecf\u7f51\u7edc\u673a\u5668\u7ffb\u8bd1NMT\u6a21\u578b\uff0c\u5f80\u5f80\u5c31\u662fLSTM-LSTM\u7684\u7f16\u7801-\u89e3\u7801\u6846\u67b6\u3002\u56e0\u6b64\uff0c\u51c6\u786e\u7684\u8bf4\uff0cEncoder-Decoder\u5e76\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u6a21\u578b\uff0c\u800c\u662f\u4e00\u7c7b\u6846\u67b6\u3002Encoder\u548cDecoder\u90e8\u5206\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u6587\u5b57\uff0c\u8bed\u97f3\uff0c\u56fe\u50cf\uff0c\u89c6\u9891\u6570\u636e\uff0c\u6a21\u578b\u53ef\u4ee5\u91c7\u7528CNN\uff0cRNN\uff0cBiRNN\u3001LSTM\u3001GRU\u7b49\u7b49\u3002\u6240\u4ee5\u57fa\u4e8eEncoder-Decoder\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u8ba1\u51fa\u5404\u79cd\u5404\u6837\u7684\u5e94\u7528\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,"Encoder-Decoder\u6846\u67b6\u6709\u4e00\u4e2a\u6700\u663e\u8457\u7684\u7279\u5f81\u5c31\u662f\u5b83\u662f\u4e00\u4e2aEnd-to-End\u5b66\u4e60\u7684\u7b97\u6cd5\uff1b\u672c\u6587\u5c06\u4ee5\u6587\u672c-\u6587\u672c\u7684\u4f8b\u5b50\u4f5c\u4e3a\u4ecb\u7ecd\uff0c\u8fd9\u6837\u7684\u6a21\u578b\u5f80\u5f80\u7528\u5728\u673a\u5668\u7ffb\u8bd1\u4e2d\uff0c\u6bd4\u5982\u5c06\u6cd5\u8bed\u7ffb\u8bd1\u6210\u82f1\u8bed\u3002\u8fd9\u6837\u7684\u6a21\u578b\u4e5f\u88ab\u53eb\u505a Sequence to Sequence learning\u3002\u6240\u8c13\u7f16\u7801\uff0c\u5c31\u662f\u5c06\u8f93\u5165\u5e8f\u5217\u8f6c\u5316\u6210\u4e00\u4e2a\u56fa\u5b9a\u957f\u5ea6\u7684\u5411\u91cf\uff1b\u89e3\u7801\uff0c\u5c31\u662f\u5c06\u4e4b\u524d\u751f\u6210\u7684\u56fa\u5b9a\u5411\u91cf\u518d\u8f6c\u5316\u6210\u8f93\u51fa\u5e8f\u5217\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u590d\u4e60\u4e0bSequence2Sequence\u4efb\u52a1\u5230\u5e95\u662f\u4ec0\u4e48\uff0c\u6240\u8c13\u7684Sequence2Sequence\u4efb\u52a1\u4e3b\u8981\u662f\u6cdb\u6307\u4e00\u4e9bSequence\u5230Sequence\u7684\u6620\u5c04\u95ee\u9898\uff0cSequence\u5728\u8fd9\u91cc\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e8f\u5217\uff0c\u5f53\u6211\u4eec\u5728\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e8f\u5217\u540e\uff0c\u5e0c\u671b\u5f97\u5230\u4e0e\u4e4b\u5bf9\u5e94\u7684\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e8f\u5217\uff08\u5982 \u7ffb\u8bd1\u540e\u7684\u3001\u5982\u8bed\u4e49\u4e0a\u5bf9\u5e94\u7684\uff09\u65f6\uff0c\u8fd9\u4e2a\u4efb\u52a1\u5c31\u53ef\u4ee5\u79f0\u4e3aSequence2Sequence\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528\u4eba\u7684\u601d\u7ef4\u6765\u770b\uff0c\u5c31\u662f\u6211\u4eec\u5148\u770b\u5230\u6e90Sequence\uff0c\u5c06\u5176\u8bfb\u4e00\u904d\uff0c\u7136\u540e\u5728\u6211\u4eec\u5927\u8111\u5f53\u4e2d\u5c31\u8bb0\u4f4f\u4e86\u8fd9\u4e2a\u6e90Sequence\uff0c\u5e76\u4e14\u5b58\u5728\u5927\u8111\u7684\u67d0\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\uff0c\u5f62\u6210\u6211\u4eec\u81ea\u5df1\u7684\u8bb0\u5fc6\uff08\u5bf9\u5e94Context\uff09\uff0c\u7136\u540e\u6211\u4eec\u518d\u7ecf\u8fc7\u601d\u8003\uff0c\u5c06\u8fd9\u4e2a\u5927\u8111\u91cc\u7684\u4e1c\u897f\u8f6c\u53d8\u6210\u8f93\u51fa\uff0c\u7136\u540e\u5199\u4e0b\u6765\u3002\u5728\u73b0\u5728\u7684\u6df1\u5ea6\u5b66\u4e60\u9886\u57df\u5f53\u4e2d\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u5c06\u8f93\u5165\u7684\u6e90Sequence\u7f16\u7801\u5230\u4e00\u4e2a\u4e2d\u95f4\u7684context\u5f53\u4e2d\uff0c\u8fd9\u4e2acontext\u662f\u4e00\u4e2a\u7279\u5b9a\u957f\u5ea6\u7684\u7f16\u7801\uff08\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u5411\u91cf\uff09\uff0c\u7136\u540e\u518d\u901a\u8fc7\u8fd9\u4e2acontext\u8fd8\u539f\u6210\u4e00\u4e2a\u8f93\u51fa\u7684\u76ee\u6807Sequence\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u56fe\u662f\u5178\u578b\u7684\u6587\u672c\u5904\u7406\u4e2d\u7ecf\u5e38\u51fa\u73b0\u7684Encoder-Decoder\u7ed3\u6784\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(39418).Z})),(0,r.kt)("p",null,"\u6587\u672c\u5904\u7406\u9886\u57df\u7684Encoder-Decoder\u6846\u67b6\u53ef\u4ee5\u8fd9\u4e48\u76f4\u89c2\u5730\u53bb\u7406\u89e3\uff1a\u53ef\u4ee5\u628a\u628a\u4e00\u4e2a\u53e5\u5b50\uff08\u6216\u7bc7\u7ae0\uff09\u751f\u6210\u53e6\u5916\u4e00\u4e2a\u53e5\u5b50\uff08\u6216\u7bc7\u7ae0\uff09\u7684\u901a\u7528\u5904\u7406\u6a21\u578b\u3002\u548c\u4e0a\u56fe\u6240\u793a\u7684\u4e00\u6837\uff0cEncoder\u63a5\u6536\u5e8f\u5217\u8f93\u5165\uff08Source\uff09\u5e76\u7f16\u7801\u4e3a\u8bed\u4e49\u7f16\u7801",(0,r.kt)("span",d({parentName:"p"},{className:"math math-inline"}),(0,r.kt)("span",d({parentName:"span"},{className:"katex"}),(0,r.kt)("span",d({parentName:"span"},{className:"katex-mathml"}),(0,r.kt)("math",d({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("annotation",d({parentName:"semantics"},{encoding:"application/x-tex"}),"c")))),(0,r.kt)("span",d({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,r.kt)("span",d({parentName:"span"},{className:"base"}),(0,r.kt)("span",d({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,r.kt)("span",d({parentName:"span"},{className:"mord mathnormal"}),"c"))))),"\uff0c\u5728\u8fd9\u4e4b\u540eDecoder\u63a5\u6536\u8bed\u4e49\u7f16\u7801\u5c06\u5176\u89e3\u7801\u4e3a\u76ee\u6807\u5e8f\u5217\uff08Target\uff09\u3002\u5982\u679cSource\u662f\u4e2d\u6587\u53e5\u5b50\uff0cTarget\u662f\u82f1\u6587\u53e5\u5b50\uff0c\u90a3\u4e48\u8fd9\u5c31\u662f\u89e3\u51b3\u673a\u5668\u7ffb\u8bd1\u95ee\u9898\u7684Encoder-Decoder\u6846\u67b6\uff1b\u5982\u679cSource\u662f\u4e00\u7bc7\u6587\u7ae0\uff0cTarget\u662f\u6982\u62ec\u6027\u7684\u51e0\u53e5\u63cf\u8ff0\u8bed\u53e5\uff0c\u90a3\u4e48\u8fd9\u662f\u6587\u672c\u6458\u8981\u7684Encoder-Decoder\u6846\u67b6\uff1b\u5982\u679cSource\u662f\u4e00\u53e5\u95ee\u53e5\uff0cTarget\u662f\u4e00\u53e5\u56de\u7b54\uff0c\u90a3\u4e48\u8fd9\u662f\u95ee\u7b54\u7cfb\u7edf\u6216\u8005\u5bf9\u8bdd\u673a\u5668\u4eba\u7684Encoder-Decoder\u6846\u67b6\uff1b\u5982\u679cSource\u662f\u4e00\u526f\u56fe\u7247\uff0cTarget\u662f\u80fd\u591f\u63cf\u8ff0\u56fe\u7247\u8bed\u4e49\u5185\u5bb9\u7684\u4e00\u53e5\u63cf\u8ff0\u8bed\uff0c\u90a3\u4e48\u8fd9\u662f\u56fe\u7247\u63cf\u8ff0\u7684Encoder-Decoder\u6846\u67b6\u3002"),(0,r.kt)("p",null,"\u53ef\u89c1\uff0cEncoder-Decoder\u7ed3\u6784\u7684\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\u3002\u5728\u4e0d\u540c\u7684\u9886\u57df\u4e2d\uff0c\u4e00\u822c\u800c\u8a00\uff0c\u6587\u672c\u5904\u7406\u548c\u8bed\u97f3\u8bc6\u522b\u7684Encoder\u90e8\u5206\u901a\u5e38\u91c7\u7528RNN\u6a21\u578b\uff0c\u56fe\u50cf\u5904\u7406\u7684Encoder\u4e00\u822c\u91c7\u7528CNN\u6a21\u578b\u3002"),(0,r.kt)("p",null,"Encoder-Decoder\u4e0d\u662f\u4e00\u79cd\u6a21\u578b\uff0c\u800c\u662f\u4e00\u79cd\u6846\u67b6\uff0c\u4e00\u79cd\u5904\u7406\u95ee\u9898\u7684\u601d\u8def\uff0c\u6700\u65e9\u5e94\u7528\u4e8e\u673a\u5668\u7ffb\u8bd1\u9886\u57df\uff0c\u8f93\u5165\u4e00\u4e2a\u5e8f\u5217\uff0c\u8f93\u51fa\u53e6\u5916\u4e00\u4e2a\u5e8f\u5217\u3002\u673a\u5668\u7ffb\u8bd1\u95ee\u9898\u5c31\u662f\u5c06\u4e00\u79cd\u8bed\u8a00\u5e8f\u5217\u8f6c\u6362\u6210\u53e6\u5916\u4e00\u79cd\u8bed\u8a00\u5e8f\u5217\uff0c\u5c06\u8be5\u6280\u672f\u6269\u5c55\u5230\u5176\u4ed6\u9886\u57df\uff0c\u6bd4\u5982\u8f93\u5165\u5e8f\u5217\u53ef\u4ee5\u662f\u6587\u5b57\uff0c\u8bed\u97f3\uff0c\u56fe\u50cf\uff0c\u89c6\u9891\uff0c\u8f93\u51fa\u5e8f\u5217\u53ef\u4ee5\u662f\u6587\u5b57\uff0c\u56fe\u50cf\uff0c\u53ef\u4ee5\u89e3\u51b3\u5f88\u591a\u522b\u7684\u7c7b\u578b\u7684\u95ee\u9898\u3002\u8fd9\u4e00\u5927\u7c7b\u95ee\u9898\u5c31\u662f\u4e0a\u56fe\u4e2d\u7684sequence-to-sequence\u95ee\u9898\u3002\u8fd9\u91cc\u4ee5\u8f93\u5165\u4e3a\u6587\u672c\uff0c\u8f93\u51fa\u4e5f\u4e3a\u6587\u672c\u4f5c\u4e3a\u4f8b\u5b50\u8fdb\u884c\u4ecb\u7ecd\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"whateverpicture",src:t(3260).Z})),(0,r.kt)("p",null,"encoder\u90e8\u5206\u662f\u5c06\u8f93\u5165\u5e8f\u5217\u8868\u793a\u6210\u4e00\u4e2a\u5e26\u6709\u8bed\u4e49\u7684\u5411\u91cf\uff0c\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u8868\u793a\u6280\u672f\u662fRecurrent Neural Network\uff0cRNN\u662f\u4e00\u4e2a\u57fa\u672c\u6a21\u578b\uff0c\u5728\u8bad\u7ec3\u7684\u65f6\u5019\u4f1a\u9047\u5230\u68af\u5ea6\u7206\u70b8\uff08gradient explode\uff09\u6216\u8005\u68af\u5ea6\u6d88\u5931\uff08gradient vanishing\uff09\u7684\u95ee\u9898\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8bad\u7ec3\uff0c\u6240\u4ee5\u5728\u5b9e\u9645\u4e2d\u7ecf\u5e38\u4f7f\u7528\u7684\u662f\u7ecf\u8fc7\u6539\u826f\u7684LSTM RNN\u6216\u8005GRU RNN\u5bf9\u8f93\u5165\u5e8f\u5217\u8fdb\u884c\u8868\u793a\uff0c\u66f4\u52a0\u590d\u6742\u4e00\u70b9\u53ef\u4ee5\u7528BiRNN\u3001BiRNN with LSTM\u3001BiRNN with GRU\u3001\u591a\u5c42RNN\u7b49\u6a21\u578b\u6765\u8868\u793a\uff0c\u8f93\u5165\u5e8f\u5217\u6700\u7ec8\u8868\u793a\u4e3a\u6700\u540e\u4e00\u4e2aword\u7684hidden state vector\u3002"),(0,r.kt)("p",null,"decoder\u90e8\u5206\u662f\u4ee5encoder\u751f\u6210\u7684hidden state vector\u4f5c\u4e3a\u8f93\u5165\u201c\u89e3\u7801\u201d\u51fa\u76ee\u6807\u6587\u672c\u5e8f\u5217\uff0c\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u8bed\u8a00\u6a21\u578b\uff0c\u6700\u5e38\u89c1\u7684\u662f\u7528Recurrent Neural Network Language Model (RNNLM)\uff0c\u53ea\u8981\u6d89\u53ca\u5230RNN\u5c31\u4f1a\u6709\u8bad\u7ec3\u7684\u95ee\u9898\uff0c\u4e5f\u5c31\u9700\u8981\u7528LSTM\u3001GRU\u548c\u4e00\u4e9b\u9ad8\u7ea7\u7684model\u6765\u4ee3\u66ff\u3002\u76ee\u6807\u5e8f\u5217\u7684\u751f\u6210\u548cLM\u505a\u53e5\u5b50\u751f\u6210\u7684\u8fc7\u7a0b\u7c7b\u4f3c\uff0c\u53ea\u662f\u8bf4\u8ba1\u7b97\u6761\u4ef6\u6982\u7387\u65f6\u9700\u8981\u8003\u8651encoder\u5411\u91cf\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u6bcf\u4e00\u79cd\u6a21\u578b\u51e0\u4e4e\u90fd\u53ef\u4ee5\u51fa\u4e00\u7bc7paper\uff0c\u5c24\u5176\u662f\u5728\u8fd9\u4e2a\u6280\u672f\u521a\u521a\u5f00\u59cb\u5e94\u7528\u5728\u5404\u4e2a\u9886\u57df\u4e2d\u7684\u65f6\u5019\uff0c\u5927\u5bb6\u901a\u8fc7\u5c1d\u8bd5\u4e0d\u540c\u7684\u6a21\u578b\u7ec4\u5408\uff0c\u5f97\u5230state-of-the-art\u7ed3\u679c\u3002"))}g.isMDXComponent=!0},3260:function(e,n,t){n.Z=t.p+"assets/images/6ac0005d53b03bfb349-118c0c492dbbe1b867fc1db8dcd64a97.png"},39418:function(e,n,t){n.Z=t.p+"assets/images/87906543576823654398-e580fa9b3338a159eb8ee9434bf40cb5.png"}}]);