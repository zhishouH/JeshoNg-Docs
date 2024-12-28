# HTML 常见元素

## 1、完整的 HTML 结构

- 文档声明
- html 元素
  1. head 元素
  2. body 元素

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>HelloWorld</title>
	</head>
	<body></body>
</html>
```

## 2、文档声明

HTML 最上方的一段文本我们称之为文档类型声明，用于声明文档类型。

`<!DOCTYPE html>`

1. HTML 文档声明，告诉浏览器当前页面是 HTML5 页面；
2. 让浏览器用 HTML5 的标准去解析识别内容；
3. 必须放在 HTML 文档的最前面，不能省略，省略了会出现兼容性问题；

HTML5 的文档声明比 HTML 4.01、XHTML 1.0 简洁非常多

![image-20240201113207558](/front-end/html/image-20240201113207558.png)

## 3、html 元素

`html`元素表示一个 HTML 文档的根（顶级元素），所以它也被称为根元素。

所有其他元素必须是此元素的后代。

```HTML
<html lang="en">
</html>
```

​

W3C 标准建议为 html 元素增加一个 lang 属性，作用是：

- 帮助语音合成工具确定要使用的发音;
- 帮助翻译工具确定要使用的翻译规则;

常用的规则：

- lang=“en” 表示这个 HTML 文档的语言是英文；
- lang=“zh-CN” 表示这个 HTML 文档的语言是中文；

## 4、head 元素

`head`元素 规定文档相关的配置信息（也称之为元数据），包括文档的标题，引用的文档样式和脚本等。

- 网页的标题：title 元素
- 网页的编码：meta 元素
  - 可以用于设置网页的字符编码，让浏览器更精准地显示每一个文字，不设置或者设置错误会导致乱码；
  - 一般都使用 utf-8 编码，涵盖了世界上几乎所有的文字；

```html
<head>
	<meta charset="utf-8" />
	<title>网页的标题</title>
</head>
```

## 5、body 元素

`body`元素里面的内容将是在浏览器窗口中看到的东西，也就是网页的具体内容和结构。

```html
<body>
	<input type="text" />
	<ul>
		<li>苹果</li>
		<li>香蕉</li>
		<li>橘子</li>
	</ul>
</body>
```

## 6、常见元素

### 6-1、h 元素

`h1~h6` 标题 (Heading) 元素呈现了六个不同的级别的标题：

- Heading 是头部的意思，通常会用来做标题；
- h1 级别最高，h6 级别最低；

```html
<h1>h1标题标签</h1>
<h2>h2标题标签</h2>
<h3>h3标题标签</h3>
<h4>h4标题标签</h4>
<h5>h5标题标签</h5>
<h6>h6标题标签</h6>
```

![image-20240201114657859](/front-end/html/image-20240201114657859.png)

### 6-2、p 元素

`p`元素（或者说 HTML 段落元素）表示文本的一个段落：

- p 元素是 paragraph 单词的缩写，是段落、分段的意思；
- p 元素多个段落之间会有一定的间距；

```html
<p>段落1</p>
<p>段落2</p>
```

![image-20240201114814360](/front-end/html/image-20240201114814360.png)

### 6-3、img 元素

`img`元素将一份图像嵌入文档：

- img 是 image 单词的所以，是图像的意思；
- 事实上 img 是一个可替换元素（ replaced element ）；

**img 有两个常见的属性：**

- src 属性：source 单词的缩写，表示源；是必须的，它包含了嵌入的图片的文件路径。
- alt 属性：不是强制性的，有两个作用：
  - 作用一：当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；
  - 作用二：屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义；

### 6-4、a 元素

`a`元素（或称锚（anchor）元素），定义超链接，用于打开新的 URL。

**a 元素有两个常见的属性：**

- **href：** Hypertext Reference 的简称
  - 指定要打开的 URL 地址；
  - 也可以是一个本地地址；
- **target：** 该属性指定在何处显示链接的资源。
  - \_self：默认值，在当前窗口打开 URL；
  - \_blank：在一个新的窗口中打开 URL；

**跳转到网页中的具体位置：**

- 在要跳到的元素上定义一个 id 属性；
- 定义 a 元素，并且 a 元素的 href 指向对应的 id；

```html
<a href="#part1">part1</a>
<a href="#part2">part2</a>
<a href="#part3">part3</a>

<div id="part1">part内容1</div>
<div id="part2">part内容2</div>
<div id="part3">part内容3</div>
```

**其他 URL 地址：**

```html
<a href="mailto:zhishouhuang@gamil.com">发送邮件到zhishouhuang@gamil.com邮箱</a>
```

### 6-5、iframe 元素

`iframe`元素可以实现在一个 HTML 文档中嵌入其他 HTML 文档。

**frameborder 属性：** 用于规定是否显示边框：

- 1：显示
- 0：不显示

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe

### 6-6、div 元素

`div`元素，division，分开、分配的意思。

### 6-7、span 元素

`span`元素，跨域、涵盖的意思。

### 6-8、strong 元素

`strong`元素内容加粗、强调。

### 6-9、i 元素

`i`元素，内容倾斜。

### 6-10、code 元素

`code`元素用于显示代码，偶尔会使用用来显示等宽字体。

### 6-11、br 元素

`br`元素，换行元素

更多元素详解，查看 MDN 文档：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

## 7、全局属性

**常见的全局属性：**

- **id：** 定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 CSS）时标识元素。
- **class：** 一个以空格分隔的元素的类名（classes）列表，它允许 CSS 和 Javascript 通过类选择器或者 DOM 方法来选择和访问特定的元素；
- **style：** 给元素添加内联样式；
- **title：** 包含表示与其所属元素相关信息的文本。 这些信息通常可以作为提示呈现给用户，但不是必须的。

更多：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes

