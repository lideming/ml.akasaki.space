"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[9053],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return _}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),_=a,d=u["".concat(l,".").concat(_)]||u[_]||f[_]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return _},metadata:function(){return d},toc:function(){return g},default:function(){return y}});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={sidebar_position:2},_="LeNet\u4ee3\u7801\u5b9e\u73b0",d={unversionedId:"ch2p2/[2]LeNet-code",id:"ch2p2/[2]LeNet-code",isDocsHomePage:!1,title:"LeNet\u4ee3\u7801\u5b9e\u73b0",description:"\u8fd9\u91cc\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bb2\u89e3\u7684\u5185\u5bb9\u8bf7\u53c2\u8003LeNet\uff1a\u521d\u8bd5\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u3002",source:"@site/docs/ch2p2/[2]LeNet-code.md",sourceDirName:"ch2p2",slug:"/ch2p2/[2]LeNet-code",permalink:"/ch2p2/[2]LeNet-code",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"LeNet\uff1a\u521d\u8bd5\u5377\u79ef\u795e\u7ecf\u7f51\u7edc",permalink:"/ch2p2/[1]LeNet"},next:{title:"\u65b0\u73a9\u5177\uff1aKeras API",permalink:"/ch2p2/[3]write-code-with-keras"}},g=[{value:"\u6bd4\u8f83\u201c\u6807\u51c6\u201d\u4e14\u5e38\u89c1\u7684\u5199\u6cd5\uff0896\u884c\uff09",id:"\u6bd4\u8f83\u6807\u51c6\u4e14\u5e38\u89c1\u7684\u5199\u6cd596\u884c",children:[],level:2},{value:"\u63d0\u9ad8Keras API\u4f7f\u7528\u7387\u4ee5\u8282\u7701\u4ee3\u7801\u91cf\u7684\u7248\u672c\uff08\u5e26\u6ce8\u91ca32\u884c\uff09",id:"\u63d0\u9ad8keras-api\u4f7f\u7528\u7387\u4ee5\u8282\u7701\u4ee3\u7801\u91cf\u7684\u7248\u672c\u5e26\u6ce8\u91ca32\u884c",children:[],level:2}],m={toc:g};function y(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},m),p),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",f({},{id:"lenet\u4ee3\u7801\u5b9e\u73b0"}),"LeNet\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bb2\u89e3\u7684\u5185\u5bb9\u8bf7\u53c2\u8003",(0,r.kt)("a",f({parentName:"p"},{href:"./LeNet.md"}),"LeNet\uff1a\u521d\u8bd5\u5377\u79ef\u795e\u7ecf\u7f51\u7edc"),"\u3002"),(0,r.kt)("h2",f({},{id:"\u6bd4\u8f83\u6807\u51c6\u4e14\u5e38\u89c1\u7684\u5199\u6cd596\u884c"}),"\u6bd4\u8f83\u201c\u6807\u51c6\u201d\u4e14\u5e38\u89c1\u7684\u5199\u6cd5\uff0896\u884c\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\nfrom tensorflow.keras import datasets, layers, initializers\n\n# \u52a0\u8f7d\u6570\u636e\u96c6\n(training_x, training_y), (testing_x, testing_y) = datasets.mnist.load_data()\ntraining_x = (training_x.astype('float32') / 255.)\ntesting_x = (testing_x.astype('float32') / 255.)\ntraining_x = tf.reshape(training_x, (training_x.shape[0], training_x.shape[1], training_x.shape[2], 1))\ntesting_x = tf.reshape(testing_x, (testing_x.shape[0], testing_x.shape[1], testing_x.shape[2], 1))\nbatch_size = 100\n\n# \u6784\u9020\u8bad\u7ec3\u7528\u6570\u636e\u96c6\ntraining_dataset = tf.data.Dataset.from_tensor_slices((training_x, training_y))\ntraining_dataset = training_dataset.batch(batch_size)\ntesting_dataset = tf.data.Dataset.from_tensor_slices((testing_x, testing_y))\ntesting_dataset = testing_dataset.batch(batch_size)\n\nclass LeNetModel(tf.keras.Model):\n    def __init__(self):\n        super(LeNetModel, self).__init__()\n        # 1.\u7b2c\u4e00\u4e2a\u5377\u79ef\u5c42\n        self.conv1 = layers.Conv2D(filters=32, kernel_size=(5, 5), padding='SAME', activation=tf.nn.sigmoid, use_bias=True, bias_initializer=initializers.Zeros)\n        # 2.\u6700\u5927\u6c60\u5316\n        self.maxpool1 = layers.MaxPool2D(pool_size=(2, 2), strides=(2, 2), padding='SAME')\n        # 3.\u7b2c\u4e8c\u4e2a\u5377\u79ef\u5c42\n        self.conv2 = layers.Conv2D(filters=64, kernel_size=(5, 5), padding='SAME', activation=tf.nn.sigmoid, use_bias=True, bias_initializer=initializers.Zeros)\n        # 4.\u6700\u5927\u6c60\u5316\n        self.maxpool2 = self.maxpool1 = layers.MaxPool2D(pool_size=(2, 2), strides=(2, 2), padding='SAME')\n        # 5.\u6253\u5e73\u4ee5\u4fbf\u8fdb\u5165\u5168\u8fde\u63a5\n        self.flatten = layers.Flatten()\n        # 6.\u7b2c\u4e00\u4e2a\u5168\u8fde\u63a5\u5c42\n        self.fc1 = layers.Dense(units=512, activation=tf.nn.sigmoid, use_bias=True, bias_initializer=initializers.Zeros)\n        # 7.\u7b2c\u4e00\u4e2a\u5168\u8fde\u63a5\u5c42\n        self.fc2 = layers.Dense(units=10, activation=tf.nn.sigmoid, use_bias=True, bias_initializer=initializers.Zeros)\n\n    # \u5b9a\u4e49\u524d\u5411\u4f20\u64ad\u7684\u65b9\u6cd5\n    def call(self, inputs, training=None, mask=None):\n        result = self.conv1(inputs)\n        result = self.maxpool1(result)\n        result = self.conv2(result)\n        result = self.maxpool2(result)\n        result = self.flatten(result)\n        result = self.fc1(result)\n        result = self.fc2(result)\n        return result\n# \u521b\u5efa\u4e00\u4e2a\u6a21\u578b\u5b9e\u4f8b\nmodel = LeNetModel()\n\n# \u5b9a\u4e49\u635f\u5931\u51fd\u6570\nloss_fun = tf.losses.SparseCategoricalCrossentropy(name='loss_fun')\ntrain_loss = tf.metrics.Mean(name='train_loss')\ntrain_acc = tf.metrics.SparseCategoricalAccuracy(name='train_acc')\ntest_loss = tf.metrics.Mean(name='train_loss')\ntest_acc = tf.metrics.SparseCategoricalAccuracy(name='train_acc')\n\n# \u5b9a\u4e49\u4f18\u5316\u5668\noptimizer = tf.optimizers.Adam()\n\n# \u8bad\u7ec3\u65b9\u6cd5\n@tf.function\ndef training_step(images, labels):\n    with tf.GradientTape() as tape:\n        pred = model(images)\n        loss = loss_fun(labels, pred)\n        gradients = tape.gradient(loss, model.trainable_variables)\n        # \u4f7f\u7528\u4f18\u5316\u5668\u8fdb\u884c\u53cd\u5411\u4f20\u64ad\n        optimizer.apply_gradients(zip(gradients, model.trainable_variables))\n        # \u8ba1\u7b97\u8bad\u7ec3\u635f\u5931\u548c\u51c6\u786e\u7387\n        train_loss(loss)\n        train_acc(labels, pred)\n\n# \u9a8c\u8bc1\u65b9\u6cd5\n@tf.function\ndef verify_on_test(images, labels):\n    pred = model(images)\n    # \u8ba1\u7b97\u635f\u5931\u548c\u51c6\u786e\u7387\n    loss = loss_fun(labels, pred)\n    test_loss(loss)\n    test_acc(labels, pred)\n\n\nepochs = 40\nfor ep in range(epochs):\n    for images, labels in training_dataset:\n        # \u8bad\u7ec3\n        training_step(images, labels)\n    for images, labels in testing_dataset:\n        # \u9a8c\u8bc1\n        verify_on_test(images, labels)\n    # \u6253\u5370\u6bcf\u4e00\u4e2aEpoch\u7684\u7ed3\u679c\n    template = 'Epoch{}, loss:{}, Acc:{}%, test_loss:{}, test_acc:{}%'\n    print(template.format(ep + 1,\n                          train_loss.result(),\n                          train_acc.result() * 100.,\n                          test_loss.result(),\n                          test_acc.result() * 100.))\n")),(0,r.kt)("h2",f({},{id:"\u63d0\u9ad8keras-api\u4f7f\u7528\u7387\u4ee5\u8282\u7701\u4ee3\u7801\u91cf\u7684\u7248\u672c\u5e26\u6ce8\u91ca32\u884c"}),"\u63d0\u9ad8Keras API\u4f7f\u7528\u7387\u4ee5\u8282\u7701\u4ee3\u7801\u91cf\u7684\u7248\u672c\uff08\u5e26\u6ce8\u91ca32\u884c\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\nfrom tensorflow.keras import datasets\n\n# \u52a0\u8f7d\u6570\u636e\u96c6\n(training_x, training_y), (testing_x, testing_y) = datasets.mnist.load_data()\ntraining_x = (training_x.astype('float32') / 255.)\ntesting_x = (testing_x.astype('float32') / 255.)\ntraining_x = tf.reshape(training_x, (training_x.shape[0], training_x.shape[1], training_x.shape[2], 1))\ntesting_x = tf.reshape(testing_x, (testing_x.shape[0], testing_x.shape[1], testing_x.shape[2], 1))\n\nmodel = tf.keras.models.Sequential([\n    # 1.\u7b2c\u4e00\u4e2a\u5377\u79ef\u5c42\n    tf.keras.layers.Conv2D(filters=32, kernel_size=5, activation='sigmoid', input_shape=(28, 28, 1)),\n    # 2.\u6700\u5927\u6c60\u5316\n    tf.keras.layers.MaxPool2D(pool_size=2, strides=2),\n    # 3.\u7b2c\u4e8c\u4e2a\u5377\u79ef\u5c42\n    tf.keras.layers.Conv2D(filters=64, kernel_size=5, activation='sigmoid'),\n    # 4.\u6700\u5927\u6c60\u5316\n    tf.keras.layers.MaxPool2D(pool_size=2, strides=2),\n    # 5.\u6253\u5e73\u4ee5\u4fbf\u8fdb\u5165\u5168\u8fde\u63a5\n    tf.keras.layers.Flatten(),\n    # 6.\u7b2c\u4e00\u4e2a\u5168\u8fde\u63a5\u5c42\n    tf.keras.layers.Dense(512, activation='sigmoid'),\n    # 7.\u7b2c\u4e00\u4e2a\u5168\u8fde\u63a5\u5c42\n    tf.keras.layers.Dense(10, activation='sigmoid')\n])\n# \u7f16\u8bd1\u6a21\u578b\nmodel.compile(optimizer='Adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n# \u8bad\u7ec3\u6a21\u578b\nmodel.fit(training_x, training_y, epochs=5, validation_split=0.1)\n\u6d4b\u8bd5\u6a21\u578b\nmodel.evaluate(testing_x, testing_y, verbose=2)\n")),(0,r.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u51e0\u7bc7\u6587\u7ae0\u4e2d\uff0c\u4e3a\u4e86\u7b80\u6d01\u6027\uff0c\u6211\u5c06\u5c3d\u91cf\u4f7f\u7528Keras API\u5b8c\u6210\u6240\u6709\u529f\u80fd\u3002"))}y.isMDXComponent=!0}}]);