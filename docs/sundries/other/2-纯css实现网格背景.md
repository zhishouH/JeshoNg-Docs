# 纯 css 实现网格背景

## 线性渐变

通过`linear-gradient()`函数实现网格，既需要横向的线条，也需要纵向的线条。
![image-20240131182111821](/public/sundries/纯css网格背景-完整.png)

**完整代码**
::: code-group

```html [grid.html]
<div class="grid"></div>
```

```css [grid.css] {4,5}
.grid {
	width: 1080px;
	height: 400px;
	background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
		linear-gradient(to bottom, #ccc 1px, transparent 1px);
	background-size: 10px 10px; /* 通过background-size控制网格间隙大小 */
	background-position: center;
	margin: 100px auto;
}
```

:::

## 边缘虚化

将网格边缘进行虚化，这时需要借助`mask-image`属性用作元素蒙版层的图像，参考参见[文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image)，这里通过径向渐变的方式实现：
![image-20240131182111821](/public/sundries/纯css网格背景-虚化.png)

**完整代码**
::: code-group

```html [grid.html]
<div class="grid"></div>
```

```css [grid.css] {4-15}
.grid {
	width: 1080px;
	height: 400px;
	background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
		linear-gradient(to bottom, #ccc 1px, transparent 1px);
	-webkit-mask-image: radial-gradient(
		ellipse 50% 50% at 50% 50%,
		#000 70%,
		transparent 100%
	);
	mask-image: radial-gradient(
		ellipse 50% 50% at 50% 50%,
		#000 70%,
		transparent 100%
	);
	background-size: 10px 10px; /* 通过background-size控制网格间隙大小 */
	background-position: center;
	margin: 100px auto;
}
```

:::

## 四周线性渐变

四周线性渐变的遮罩效果
![image-20240131182111821](/public/sundries/纯css网格背景-四周渐变.png)

**完整代码**
::: code-group

```html [grid.html]
<div class="grid"></div>
```

```css [grid.css] {4-19}
.grid {
	width: 500px;
	height: 200px;
	background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
		linear-gradient(to bottom, #ccc 1px, transparent 1px);
	-webkit-mask-image: linear-gradient(
			to bottom,
			transparent,
			#fff 50px calc(100% - 50px),
			transparent
		), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
	mask-image: linear-gradient(
			to bottom,
			transparent,
			#fff 50px calc(100% - 50px),
			transparent
		), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
	mask-composite: intersect;
	-webkit-mask-composite: source-in, xor;
	background-size: 10px 10px;
	background-position: center;
	margin: 100px auto;
}
```

:::

## 网状点阵背景

基于相同的原理，实现网状点阵背景，需要用到`radial-gradient`函数，创建圆形填充背景色。
![image-20240131182111821](/public/sundries/纯css网状点阵背景.png)

**完整代码**
::: code-group

```html [grid.html]
<div class="grid"></div>
```

```css [grid.css] {4-8}
.grid {
	width: 500px;
	height: 200px;
	background-image: radial-gradient(circle, rgb(203 213 225) 2px, #fff 2px);
	background-size: 20px 20px;
	background-position: center center;
	margin: 100px auto;
}
```

:::

## 工具

<GridBackgroundGenerator/>

