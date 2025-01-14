# 数据操作

```python
import tensorflow as tf
print(tf.__version__)
```

    2.0.0

在深度学习中，我们通常会频繁地对数据进行操作。作为动手学深度学习的基础，本节将介绍如何对内存中的数据进行操作。

在TensorFlow中，`tensor`是一个类，也是存储和变换数据的主要工具。如果你之前用过NumPy，你会发现`tensor`和NumPy的多维数组非常类似。然而，`tensor`提供GPU计算和自动求梯度等更多功能，这些使`tensor`更加适合深度学习。

## 创建 tensor

我们先介绍`tensor`的最基本功能，我们用arange函数创建一个行向量。

```python
x = tf.constant(range(12))

print(x.shape)
```

    (12,)

```python
x
```


    <tf.Tensor: id=0, shape=(12,), dtype=int32, numpy=array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])>

这时返回了一个`tensor`实例，其中包含了从0开始的12个连续整数。

我们可以通过`shape`属性来获取`tensor`实例的形状。

```python
x.shape
```


    TensorShape([12])

我们也能够通过`len`得到`tensor`实例中元素（element）的总数。


```python
len(x)
```


    12

下面使用`reshape`函数把行向量`x`的形状改为(3, 4)，也就是一个3行4列的矩阵，并记作`X`。除了形状改变之外，`X`中的元素保持不变。


```python
X = tf.reshape(x,(3,4))
X
```


    <tf.Tensor: id=2, shape=(3, 4), dtype=int32, numpy=
    array([[ 0,  1,  2,  3],
           [ 4,  5,  6,  7],
           [ 8,  9, 10, 11]])>

注意X属性中的形状发生了变化。上面`x.reshape((3, 4))`也可写成`x.reshape((-1, 4))`或`x.reshape((3, -1))`。由于`x`的元素个数是已知的，这里的-1是能够通过元素个数和其他维度的大小推断出来的。

接下来，我们创建一个各元素为0，形状为(2, 3, 4)的张量。实际上，之前创建的向量和矩阵都是特殊的张量。


```python
tf.zeros((2,3,4))
```

```
<tf.Tensor: id=5, shape=(2, 3, 4), dtype=float32, numpy=
array([[[0., 0., 0., 0.],
        [0., 0., 0., 0.],
        [0., 0., 0., 0.]],
    
       [[0., 0., 0., 0.],
        [0., 0., 0., 0.],
        [0., 0., 0., 0.]]], dtype=float32)>
```


类似地，我们可以创建各元素为1的张量。


```python
tf.ones((3,4))
```

```
<tf.Tensor: id=8, shape=(3, 4), dtype=float32, numpy=
array([[1., 1., 1., 1.],
       [1., 1., 1., 1.],
       [1., 1., 1., 1.]], dtype=float32)>
```



我们也可以通过Python的列表（list）指定需要创建的`tensor`中每个元素的值。


```python
Y = tf.constant([[2,1,4,3],[1,2,3,4],[4,3,2,1]])
Y
```

```
<tf.Tensor: id=9, shape=(3, 4), dtype=int32, numpy=
array([[2, 1, 4, 3],
       [1, 2, 3, 4],
       [4, 3, 2, 1]])>
```



有些情况下，我们需要随机生成`tensor`中每个元素的值。下面我们创建一个形状为(3, 4)的`tensor`。它的每个元素都随机采样于均值为0、标准差为1的正态分布。


```python
tf.random.normal(shape=[3,4], mean=0, stddev=1)
```

```
<tf.Tensor: id=15, shape=(3, 4), dtype=float32, numpy=
array([[-0.06770465, -2.518872  ,  0.5077952 ,  0.6465717 ],
       [ 0.2775639 ,  0.15904428, -0.38203633,  0.30524674],
       [-0.16228472, -0.7232593 ,  0.11517206, -0.49598092]],
      dtype=float32)>
```



## 运算

`tensor`支持大量的运算符（operator）。例如，我们可以对之前创建的两个形状为(3, 4)的`tensor`做按元素加法。所得结果形状不变。


```python
X + Y
```

```
<tf.Tensor: id=16, shape=(3, 4), dtype=int32, numpy=
array([[ 2,  2,  6,  6],
       [ 5,  7,  9, 11],
       [12, 12, 12, 12]])>
```



按元素乘法：


```python
X * Y
```

```
<tf.Tensor: id=17, shape=(3, 4), dtype=int32, numpy=
array([[ 0,  1,  8,  9],
       [ 4, 10, 18, 28],
       [32, 27, 20, 11]])>
```



按元素除法：


```python
X / Y
```

```
<tf.Tensor: id=20, shape=(3, 4), dtype=float64, numpy=
array([[ 0.  ,  1.  ,  0.5 ,  1.  ],
       [ 4.  ,  2.5 ,  2.  ,  1.75],
       [ 2.  ,  3.  ,  5.  , 11.  ]])>
```



按元素做指数运算：


```python
Y = tf.cast(Y, tf.float32)
tf.exp(Y)
```

```
<tf.Tensor: id=22, shape=(3, 4), dtype=float32, numpy=
array([[ 7.389056 ,  2.7182817, 54.598152 , 20.085537 ],
       [ 2.7182817,  7.389056 , 20.085537 , 54.598152 ],
       [54.598152 , 20.085537 ,  7.389056 ,  2.7182817]], dtype=float32)>
```



除了按元素计算外，我们还可以使用`matmul`函数做矩阵乘法。下面将`X`与`Y`的转置做矩阵乘法。由于`X`是3行4列的矩阵，`Y`转置为4行3列的矩阵，因此两个矩阵相乘得到3行3列的矩阵。


```python
Y = tf.cast(Y, tf.int32)
tf.matmul(X, tf.transpose(Y))
```

```
<tf.Tensor: id=26, shape=(3, 3), dtype=int32, numpy=
array([[ 18,  20,  10],
       [ 58,  60,  50],
       [ 98, 100,  90]])>
```



我们也可以将多个`tensor`连结（concatenate）。下面分别在行上（维度0，即形状中的最左边元素）和列上（维度1，即形状中左起第二个元素）连结两个矩阵。可以看到，输出的第一个`tensor`在维度0的长度（ 6 ）为两个输入矩阵在维度0的长度之和（ 3+3 ），而输出的第二个`tensor`在维度1的长度（ 8 ）为两个输入矩阵在维度1的长度之和（ 4+4 ）。


```python
tf.concat([X,Y],axis = 0), tf.concat([X,Y],axis = 1)
```

```
(<tf.Tensor: id=28, shape=(6, 4), dtype=int32, numpy=
 array([[ 0,  1,  2,  3],
        [ 4,  5,  6,  7],
        [ 8,  9, 10, 11],
        [ 2,  1,  4,  3],
        [ 1,  2,  3,  4],
        [ 4,  3,  2,  1]])>,
 <tf.Tensor: id=30, shape=(3, 8), dtype=int32, numpy=
 array([[ 0,  1,  2,  3,  2,  1,  4,  3],
        [ 4,  5,  6,  7,  1,  2,  3,  4],
        [ 8,  9, 10, 11,  4,  3,  2,  1]])>)
```



使用条件判断式可以得到元素为0或1的新的`tensor`。以X == Y为例，如果X和Y在相同位置的条件判断为真（值相等），那么新的`tensor`在相同位置的值为1；反之为0。


```python
tf.equal(X,Y)
```

```
<tf.Tensor: id=31, shape=(3, 4), dtype=bool, numpy=
array([[False,  True, False,  True],
       [False, False, False, False],
       [False, False, False, False]])>
```



对`tensor`中的所有元素求和得到只有一个元素的`tensor`。


```python
tf.reduce_sum(X)
```

```
<tf.Tensor: id=33, shape=(), dtype=int32, numpy=66>
```


```python
X = tf.cast(X, tf.float32)
tf.norm(X)
```

```
<tf.Tensor: id=39, shape=(), dtype=float32, numpy=22.494444>
```



## 广播机制

前面我们看到如何对两个形状相同的`tensor`做按元素运算。当对两个形状不同的`tensor`按元素运算时，可能会触发广播（broadcasting）机制：先适当复制元素使这两个`tensor`形状相同后再按元素运算。

定义两个`tensor`：


```python
A = tf.reshape(tf.constant(range(3)), (3,1))
B = tf.reshape(tf.constant(range(2)), (1,2))
A, B
```

```
(<tf.Tensor: id=42, shape=(3, 1), dtype=int32, numpy=
 array([[0],
        [1],
        [2]])>,
 <tf.Tensor: id=45, shape=(1, 2), dtype=int32, numpy=array([[0, 1]])>)
```



由于`A`和`B`分别是3行1列和1行2列的矩阵，如果要计算`A + B`，那么A中第一列的3个元素被广播（复制）到了第二列，而B中第一行的2个元素被广播（复制）到了第二行和第三行。如此，就可以对2个3行2列的矩阵按元素相加。


```python
A + B
```

```
<tf.Tensor: id=46, shape=(3, 2), dtype=int32, numpy=
array([[0, 1],
       [1, 2],
       [2, 3]])>
```



## 索引

在`tensor`中，索引（index）代表了元素的位置。`tensor`的索引从0开始逐一递增。例如，一个3行2列的矩阵的行索引分别为0、1和2，列索引分别为0和1。

在下面的例子中，我们指定了`tensor`的行索引截取范围[1:3]。依据左闭右开指定范围的惯例，它截取了矩阵`X`中行索引为1和2的两行。


```python
X[1:3]
```

```
<tf.Tensor: id=50, shape=(2, 4), dtype=float32, numpy=
array([[ 4.,  5.,  6.,  7.],
       [ 8.,  9., 10., 11.]], dtype=float32)>
```



我们可以指定`tensor`中需要访问的单个元素的位置，如矩阵中行和列的索引，并为该元素重新赋值。


```python
X = tf.Variable(X)
X[1,2].assign(9)
```

```
<tf.Variable 'UnreadVariable' shape=(3, 4) dtype=float32, numpy=
array([[ 0.,  1.,  2.,  3.],
       [ 4.,  5.,  9.,  7.],
       [ 8.,  9., 10., 11.]], dtype=float32)>
```



当然，我们也可以截取一部分元素，并为它们重新赋值。在下面的例子中，我们为行索引为1的每一列元素重新赋值。


```python
X = tf.Variable(X)
X
```

```
<tf.Variable 'Variable:0' shape=(3, 4) dtype=float32, numpy=
array([[ 0.,  1.,  2.,  3.],
       [ 4.,  5.,  9.,  7.],
       [ 8.,  9., 10., 11.]], dtype=float32)>
```




```python
X[1:2,:].assign(tf.ones(X[1:2,:].shape, dtype = tf.float32)*12)
```

```
<tf.Variable 'UnreadVariable' shape=(3, 4) dtype=float32, numpy=
array([[ 0.,  1.,  2.,  3.],
       [12., 12., 12., 12.],
       [ 8.,  9., 10., 11.]], dtype=float32)>
```



## 运算的内存开销

在前面的例子里我们对每个操作新开内存来存储运算结果。举个例子，即使像`Y = X + Y`这样的运算，我们也会新开内存，然后将`Y`指向新内存。为了演示这一点，我们可以使用Python自带的`id`函数：如果两个实例的ID一致，那么它们所对应的内存地址相同；反之则不同。


```python
X = tf.Variable(X)
Y = tf.cast(Y, dtype=tf.float32)

before = id(Y)
Y = Y + X
id(Y) == before
```

```
False
```


如果想指定结果到特定内存，我们可以使用前面介绍的索引来进行替换操作。在下面的例子中，我们先通过`zeros_like`创建和`Y`形状相同且元素为0的`tensor`，记为`Z`。接下来，我们把`X + Y`的结果通过`[:]`写进`Z`对应的内存中。


```python
Z = tf.Variable(tf.zeros_like(Y))
before = id(Z)
Z[:].assign(X + Y)
id(Z) == before
```




    True



实际上，上例中我们还是为`X + Y`开了临时内存来存储计算结果，再复制到`Z`对应的内存。如果想避免这个临时内存开销，我们可以使用`assign_{运算符全名}`函数。


```python
Z = tf.add(X, Y)
id(Z) == before
```




    False



如果`X`的值在之后的程序中不会复用，我们也可以用 `X[:] = X + Y` 或者 `X += Y` 来减少运算的内存开销。


```python
before = id(X)
X.assign_add(Y)
id(X) == before
```




    True



## tensor 和 NumPy 相互变换

我们可以通过array函数和asnumpy函数令数据在NDArray和NumPy格式之间相互变换。下面将NumPy实例变换成tensor实例。


```python
import numpy as np

P = np.ones((2,3))
D = tf.constant(P)
D
```




    <tf.Tensor: id=115, shape=(2, 3), dtype=float64, numpy=
    array([[1., 1., 1.],
           [1., 1., 1.]])>



再将NDArray实例变换成NumPy实例。


```python
np.array(D)
```




    array([[1., 1., 1.],
           [1., 1., 1.]])