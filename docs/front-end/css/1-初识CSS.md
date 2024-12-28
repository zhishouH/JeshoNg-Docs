# 初识 CSS

## 1、层叠样式表

`CSS`表示层叠样式表（Cascading Style Sheet，简称：CSS，又称为又称串样式列表、级联样式表、串接样式表、阶层式样式表）是为网页添加样式的代码。

MDN 解释：CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言；

维基百科解释：是一种计算机语言，但是不算是一种编程语言；

## 2、CSS 的历史

**早期的网页都是通过`HTML`来编写的，但是我们希望 HTML 页面可以更加丰富:**

- 这个时候就增加了很多具备特殊样式的元素：比如`i`、`strong`、`del`等等；
- 后来也有不同的浏览器实现各自的样式语言，但是没有统一的规划；
- 1994 年，哈肯·维姆·莱和伯特·波斯合作设计 CSS，在 1996 年的时候发布了 CSS1；
- 直到 1997 年初，W3C 组织才专门成立了 CSS 的工作组，1998 年 5 月发布了 CSS2；
- 在 2006~2009 非常流行 “DIV+CSS”布局的方式来替代所有的 html 标签；
- 从 CSS3 开始，所有的 CSS 分成了不同的模块（modules），每一个“modules”都有于 CSS2 中额外增加的功能，以及向后兼容；
- 直到 2011 年 6 月 7 日，CSS3 Color Module 终于发布为 W3C Recommendation；

**总结：CSS 的出现是为了美化 HTML 的，并且让结构（HTML）与样式（CSS）分离；**

- **美化方式一：** 为 HTML 添加各种各样的样式，比如颜色、字体、大小、下划线等等；
- **美化方式二：** 对 HTML 进行布局，按照某种结构显示（CSS 进行布局 – 浮动、flex、grid）

## 3、语法规则

声明（Declaration）一个单独的 CSS 规则，如 `color: red; `用来指定添加的 CSS 样式：

- **属性名（Property name）：** 要添加的 css 规则的名称；
- **属性值（Property value）：** 要添加的 css 规则的值；

## 4、编写位置

- 内联样式（inline style）
- 内部样式表（internal style sheet）、文档样式表（document style sheet）、内嵌样式表（embed style sheet）
- 外部样式表（external style sheet）

### 4-1、内联样式（inline style）

将 CSS 放于 HTML 元素的`style`属性之中：

- CSS 样式之间用分号`; `隔开，建议每条 CSS 样式后面都加上分号;

```html
<div style="color: red; font-size: 20px">我是div元素</div>
<p style="color: white; background: blue">我是p元素</p>
```

### 4-2、内部样式表（internal style sheet）

将 CSS 放于 HTML 文件元素里的`<style></style>`元素之中：

```html
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<style>
		.title {
			font-weight: 700;
			font-size: 24px;
			margin: 20px 0;
		}
	</style>
</head>
```

### 4-3、外部样式表（external style sheet）

将 css 编写一个独立的文件中，并且通过 link 元素引入；

**使用外部样式表主要分成两个步骤：**

1.  第一步：将 css 样式在一个独立的 css 文件中编写（后缀名为.css）；
2.  第二步：通过元素引入进来；

**index.css:**

```css
.title {
	font-weight: 700;
	font-size: 24px;
	margin: 20px 0;
}
```

**index.html:**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<link
			rel="stylesheet"
			href="./index.css"
		/>
	</head>
</html>
```

### 4-4、@import

以在`style`元素或者 CSS 文件中使用`@import`导入其他的 CSS 文件

```css
@import url('./index.css');
```

## 5、CSS 注释

`/* 注释内容 */`

```css
.title {
	/* 设置字体字重为700 */
	font-weight: 700;
	/* 设置字体大小为24px */
	font-size: 24px;
	/* 设置上下外边距为20px */
	margin: 20px 0;
}
```

## 6、CSS 属性

### 6-1、background-color

`background-color`决定背景色

### 6-2、color

`color`属性用来设置文本内容的前景色；

包括文字、装饰线、边框、外轮廓等的颜色；

