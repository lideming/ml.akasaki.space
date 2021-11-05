"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[3745],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48846:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return f},default:function(){return _}});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&c(t,n,e[n]);return t};const u={},m="\u773c\u719f\u7684\u4ee3\u7801\u5757",g={unversionedId:"appendix-1/[4]similar-codeblocks",id:"appendix-1/[4]similar-codeblocks",isDocsHomePage:!1,title:"\u773c\u719f\u7684\u4ee3\u7801\u5757",description:"\u8fd9\u4e9b\u4ee3\u7801\u5757\u7ecf\u5e38\u88ab\u4f7f\u7528\u3002\u5efa\u8bae\u719f\u6089\u5b83\u4eec\uff0c\u5e76\u7ecf\u5e38\u770b\u770b\u5b83\u4eec\u3002",source:"@site/docs/appendix-1/[4]similar-codeblocks.md",sourceDirName:"appendix-1",slug:"/appendix-1/[4]similar-codeblocks",permalink:"/appendix-1/[4]similar-codeblocks",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u635f\u5931\u51fd\u6570\u4eec",permalink:"/appendix-1/[3]loss-functions"},next:{title:"\u642c\u7816\u65f6\u5e94\u8be5\u638c\u63e1\u7684matplotlib",permalink:"/appendix-1/[5]introducing-matplotlib"}},f=[{value:"1.\u6570\u636e\u96c6\u76f8\u5173",id:"1\u6570\u636e\u96c6\u76f8\u5173",children:[{value:"1.1 \u4f7f\u7528tensorflow\u81ea\u5e26\u7684\u5de5\u5177\u52a0\u8f7d\u5e38\u89c1\u6570\u636e\u96c6",id:"11-\u4f7f\u7528tensorflow\u81ea\u5e26\u7684\u5de5\u5177\u52a0\u8f7d\u5e38\u89c1\u6570\u636e\u96c6",children:[{value:"1.1.1 \u8f7d\u5165\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e",id:"111-\u8f7d\u5165\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e",children:[],level:4},{value:"1.1.2 \u6784\u5efa\u6570\u636e\u96c6",id:"112-\u6784\u5efa\u6570\u636e\u96c6",children:[],level:4},{value:"1.1.3 \u6807\u51c6\u5316\u548c\u524d\u5904\u7406",id:"113-\u6807\u51c6\u5316\u548c\u524d\u5904\u7406",children:[],level:4},{value:"1.1.4 \u6307\u5b9abatch\u5927\u5c0f\u4ee5\u53ca\u5c06\u6570\u636e\u96c6\u6253\u4e71",id:"114-\u6307\u5b9abatch\u5927\u5c0f\u4ee5\u53ca\u5c06\u6570\u636e\u96c6\u6253\u4e71",children:[],level:4},{value:"1.1.5 \u603b\u7ed3",id:"115-\u603b\u7ed3",children:[],level:4}],level:3},{value:"1.2 \u67e5\u770b\u90e8\u5206\u6570\u636e\u96c6\u4e2d\u56fe\u50cf",id:"12-\u67e5\u770b\u90e8\u5206\u6570\u636e\u96c6\u4e2d\u56fe\u50cf",children:[],level:3}],level:2},{value:"2.\u8ba1\u7b97\u673a\u89c6\u89c9\u76f8\u5173",id:"2\u8ba1\u7b97\u673a\u89c6\u89c9\u76f8\u5173",children:[],level:2}],k={toc:f};function _(t){var e,r=t,{components:c}=r,u=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(e=d(d({},k),u),i(e,l({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"\u773c\u719f\u7684\u4ee3\u7801\u5757"}),"\u773c\u719f\u7684\u4ee3\u7801\u5757"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u4ee3\u7801\u5757\u7ecf\u5e38\u88ab\u4f7f\u7528\u3002\u5efa\u8bae\u719f\u6089\u5b83\u4eec\uff0c\u5e76\u7ecf\u5e38\u770b\u770b\u5b83\u4eec\u3002"),(0,a.kt)("h2",d({},{id:"1\u6570\u636e\u96c6\u76f8\u5173"}),"1.\u6570\u636e\u96c6\u76f8\u5173"),(0,a.kt)("h3",d({},{id:"11-\u4f7f\u7528tensorflow\u81ea\u5e26\u7684\u5de5\u5177\u52a0\u8f7d\u5e38\u89c1\u6570\u636e\u96c6"}),"1.1 \u4f7f\u7528tensorflow\u81ea\u5e26\u7684\u5de5\u5177\u52a0\u8f7d\u5e38\u89c1\u6570\u636e\u96c6"),(0,a.kt)("p",null,"tensorflow\u5305\u542b\u4e86",(0,a.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MNIST_database"}),"mnist"),"\u3001fashion-mnist\u3001cifar-10\u3001cifar-100\u4ee5\u53caboston_housing\u7b49\u6570\u636e\u96c6\u7684\u4e0b\u8f7d\u3001\u8bfb\u53d6\u529f\u80fd\u3002\u8bfb\u53d6\u8fd9\u4e9b\u6570\u636e\uff0c\u4f60\u9700\u8981import\u76f8\u5173\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"from tensorflow.keras import datasets\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tensorflow.keras.dataset"),"\u5305\u542b\u7684\u6570\u636e\u96c6\u8bfb\u53d6\u65b9\u6cd5\u8fd4\u56de\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u3002"),(0,a.kt)("h4",d({},{id:"111-\u8f7d\u5165\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e"}),"1.1.1 \u8f7d\u5165\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a\u8f7d\u5165mnist\u624b\u5199\u8bc6\u522b\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"(training_x, training_y), (testing_x, testing_y) = datasets.mnist.load_data()\n")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a\u8f7d\u5165fashion-mnist\u670d\u88c5\u6570\u636e\u96c6\u4e2d\u7684\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"(training_x, training_y), (testing_x, testing_y) = datasets.fashion_mnist.load_data()\n")),(0,a.kt)("p",null,"\u4f60\u5e94\u8be5\u5927\u81f4\u638c\u63e1\u4e86\u76f8\u5e94\u65b9\u6cd5\uff0c\u5b83\u6709\u4e00\u4e2a\u901a\u7528\u7684\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"(training_x, training_y), (testing_x, testing_y) = datasets.\u6570\u636e\u96c6\u540d\u79f0.load_data()\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u4f60\u4f1a\u5f97\u5230\u56db\u4e2a\u6570\u636e\u90e8\u5206\uff0c\u4e5f\u5c31\u662f\u8bad\u7ec3\u96c6\u7684\u56fe\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"training_x"),"\u3001\u8bad\u7ec3\u56fe\u50cf\u5bf9\u5e94\u7684\u6807\u7b7e",(0,a.kt)("inlineCode",{parentName:"p"},"training_y"),"\u3001\u6d4b\u8bd5\u96c6\u7684\u56fe\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"testing_x"),"\u4ee5\u53ca\u6d4b\u8bd5\u96c6\u7684\u56fe\u50cf\u5bf9\u5e94\u7684\u6807\u7b7e",(0,a.kt)("inlineCode",{parentName:"p"},"testing_y"),"\u3002"),(0,a.kt)("p",null,"\u6b64\u65f6\u4f60\u53ef\u4ee5\u663e\u793a\u548c\u68c0\u67e5\u4e00\u90e8\u5206\u56fe\u7247\u3002\u8be6\u89c1\u672c\u9875\u7684",(0,a.kt)("strong",{parentName:"p"},"1.2 \u67e5\u770b\u90e8\u5206\u6570\u636e\u96c6\u4e2d\u56fe\u50cf"),"\u4e2d\u76f8\u5173\u5185\u5bb9\u3002"),(0,a.kt)("h4",d({},{id:"112-\u6784\u5efa\u6570\u636e\u96c6"}),"1.1.2 \u6784\u5efa\u6570\u636e\u96c6"),(0,a.kt)("p",null,"\u6b64\u65f6\u5e94\u8be5\u8ba9\u8fd9\u4e9b\u6570\u636e\u6210\u4e3a\u4e24\u4e2a\u5c0f\u6570\u636e\u96c6\uff0c\u7b2c\u4e00\u4e2a\u662f\u8bad\u7ec3\u6570\u636e\u96c6\uff0c\u7b2c\u4e8c\u4e2a\u662f\u6d4b\u8bd5\u6570\u636e\u96c6\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"tensorflow.data.Dataset.from_tensor_slices()"),"\u65b9\u6cd5\u5b8c\u6210\u8fd9\u4e2a\u8fc7\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"training_dataset = tf.data.Dataset.from_tensor_slices((training_x, training_y))\ntesting_dataset = tf.data.Dataset.from_tensor_slices((testing_x, testing_y))\n")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u8fd9\u6837\u505a\u3002\u5177\u4f53\u53d6\u51b3\u4e8e\u4f60\u5e0c\u671b\u600e\u4e48\u8fed\u4ee3\u4f60\u7684\u6570\u636e\u96c6\u3002\u4e0a\u8ff0\u65b9\u6cd5\u4e5f\u4e0d\u4ec5\u9650\u4e8e\u4ecetensorflow\u5de5\u5177\u5305\u91cc\u5bfc\u5165\u7684\u6570\u636e\u96c6\uff0c\u5728\u672c\u5730\u7684\u6570\u636e\u96c6\u4e5f\u53ef\u4ee5\u88ab\u8fd9\u6837\u6784\u5efa\u4e3a\u8fd0\u884c\u65f6\u6570\u636e\u96c6\u3002"),(0,a.kt)("h4",d({},{id:"113-\u6807\u51c6\u5316\u548c\u524d\u5904\u7406"}),"1.1.3 \u6807\u51c6\u5316\u548c\u524d\u5904\u7406"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u4ec0\u4e48\u662f\u6807\u51c6\u5316\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",d({parentName:"p"},{href:"../appendix/similar-vocabularies.md"}),"\u9644\u5f55-\u5e38\u89c1\u540d\u8bcd"),"\u4e2d\u6709\u5173\u6807\u51c6\u5316\u3001\u53bb\u91cf\u7eb2\u7684\u8bcd\u6761\u3002``"),(0,a.kt)("p",null,"\u5728\u8bad\u7ec3\u56fe\u50cf\u6570\u636e\u65f6\uff0c\u7279\u5f81\u56fe\u4e00\u822c\u662ffloat32\u7684\uff0c\u5e76\u4e14\u8981\u6807\u51c6\u5316\u3002\u800c\u5bf9\u5e94\u7684\u6807\u7b7e\u4e00\u822c\u662f\u6574\u6570\uff08\u7d22\u5f15\uff09\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u4e00\u822c\u5bf9x\u548cy\u505a\u4ee5\u4e0b\u524d\u5904\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"training_x = (training_x.astype('float32') / 255.)\ntesting_x = (testing_x.astype('float32') / 255.)\n")),(0,a.kt)("h4",d({},{id:"114-\u6307\u5b9abatch\u5927\u5c0f\u4ee5\u53ca\u5c06\u6570\u636e\u96c6\u6253\u4e71"}),"1.1.4 \u6307\u5b9abatch\u5927\u5c0f\u4ee5\u53ca\u5c06\u6570\u636e\u96c6\u6253\u4e71"),(0,a.kt)("p",null,"\u5728\u4f60\u7ecf\u5e38\u770b\u5230\u5404\u79cdSGD\uff08\u53c2\u9605",(0,a.kt)("a",d({parentName:"p"},{href:"../appendix/similar-vocabularies.md"}),"\u9644\u5f55-\u5e38\u89c1\u540d\u8bcd"),"\u4e2d\u5173\u4e8e\u968f\u673a\u68af\u5ea6\u4e0b\u964d\u7684\u8bcd\u6761\uff09\u65b9\u6cd5\u4e2d\uff0c\u9700\u8981\u6279\u91cf\u53d6\u7528\u6570\u636e\u96c6\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u7ecf\u5e38\u6307\u5b9a\u7684batch\u3002tensorflow\u4e5f\u63d0\u4f9b\u4e86\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"Dataset"),"\u5bf9\u8c61batch size\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"training_dataset = training_dataset.batch(128)\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e4b\u540e\uff0c\u5f80\u5f80\u6211\u4eec\u5c06\u6570\u636e\u96c6\u6253\u4e71\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"training_dataset = training_dataset.shuffle(100)\n")),(0,a.kt)("p",null,"testing_x\u548ctesting_y\u662f\u5426\u6709\u5fc5\u8981\u6253\u4e71\u8bf7\u81ea\u884c\u6839\u636e\u9700\u6c42\u51b3\u5b9a\u3002"),(0,a.kt)("h4",d({},{id:"115-\u603b\u7ed3"}),"1.1.5 \u603b\u7ed3"),(0,a.kt)("p",null,"\u628a\u4e0a\u9762\u7684\u6574\u4e2a\u8fc7\u7a0b\u5199\u5728\u4e00\u8d77\uff0c\u5c31\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\nfrom tensorflow.keras import datasets, layers, initializers\n\n(training_x, training_y), (testing_x, testing_y) = datasets.fashion_mnist.load_data()\ntraining_x = (training_x.astype('float32') / 255.)\ntesting_x = (testing_x.astype('float32') / 255.)\nbatch_size = 128\n\ntraining_dataset = tf.data.Dataset.from_tensor_slices((training_x, training_y))\ntraining_dataset = training_dataset.batch(batch_size)\ntesting_dataset = tf.data.Dataset.from_tensor_slices((testing_x, testing_y))\ntesting_dataset = testing_dataset.batch(batch_size)\n")),(0,a.kt)("p",null,"\u4e8e\u662f\u4f60\u7684\u5230\u4e86\u4e00\u4efd\u53ef\u4ee5\u76f4\u63a5\u6295\u5165\u8bad\u7ec3\u548c\u6d4b\u8bd5\u7684\u6570\u636e\u96c6\u3002"),(0,a.kt)("h3",d({},{id:"12-\u67e5\u770b\u90e8\u5206\u6570\u636e\u96c6\u4e2d\u56fe\u50cf"}),"1.2 \u67e5\u770b\u90e8\u5206\u6570\u636e\u96c6\u4e2d\u56fe\u50cf"),(0,a.kt)("p",null,"\u5f53\u4f60\u5bfc\u5165\u4e86\u4e00\u4e9b\u56fe\u7247\u4f5c\u4e3a\u6570\u636e\u96c6\u65f6\uff0c\u53ef\u4ee5\u663e\u793a\u4e00\u90e8\u5206\u56fe\u7247\uff0c\u68c0\u67e5\u5bfc\u5165\u7684\u662f\u5426\u6b63\u786e\u3002\u8fd9\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u662f\u5f88\u597d\u73a9\u3002\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u8fd9\u6837\u7684\u51fd\u6570\u65b9\u4fbf\u7ecf\u5e38\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"import matplotlib.pyplot as plt\nimport math\ndef check_image_in_dataset_via_plot(dataset, how_many: float = 36., gray_scale=False):\n    plt_width = math.ceil(how_many ** .5)\n    plt.figure(figsize=(plt_width, plt_width))\n    for i in range(round(how_many)):\n        plt.subplot(plt_width, plt_width, i + 1)\n        plt.xticks([])\n        plt.yticks([])\n        plt.grid(False)\n        if not gray_scale:\n            plt.imshow(dataset[i])\n        else:\n            plt.imshow(dataset[i], cmap=plt.cm.binary)\n        # marking index under the picture\n        # plt.xlabel(class_names[labels[i][0]])\n    plt.show()\n")),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"dataset"),"\u662f\u4e00\u4e2alist\uff0c\u5176\u4e2d\u5305\u542b\u82e5\u5e72\u56fe\u7247\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"how_many"),"\u51b3\u5b9a\u4f60\u8981\u663e\u793a\u51e0\u5f20\u56fe\u7247\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"gray_scale"),"\u51b3\u5b9a\u662f\u5426\u663e\u793a\u4e3a\u7070\u5ea6\u56fe\uff08\u53ef\u4ee5\u6307\u5b9a\u7070\u5ea6\u662f\u56e0\u4e3a\u6709\u7684\u6570\u636e\u96c6\u786e\u5b9e\u662f\u7070\u5ea6\u56fe\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"fashion-mnist"),"\uff09\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f7f\u7528\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5bfc\u5165\u4e86\u4e00\u4efd",(0,a.kt)("inlineCode",{parentName:"p"},"fashion-mnist"),"\u6570\u636e\u96c6\u4e2d\u7684\u56fe\u7247\uff0c\u663e\u793a\u5176\u4e2d\u768436\u7070\u5ea6\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-python"}),"check_image_in_dataset_via_plot(imsges, how_many=36, gray_scale=True)\n")),(0,a.kt)("p",null,"\u5176\u4e2dimages\u662f\u56fe\u50cf\u7684list\u3002\u4f60\u4f1a\u770b\u5230\u8fd9\u6837\u7684\u663e\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210413100216656",src:n(72423).Z})),(0,a.kt)("h2",d({},{id:"2\u8ba1\u7b97\u673a\u89c6\u89c9\u76f8\u5173"}),"2.\u8ba1\u7b97\u673a\u89c6\u89c9\u76f8\u5173"))}_.isMDXComponent=!0},72423:function(t,e,n){e.Z=n.p+"assets/images/image-20210413100216656-6086e30813a332b12e62113832e88007.png"}}]);