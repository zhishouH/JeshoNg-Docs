# DOM 操作一

## 一、什么是 DOM

文档对象模型 **Document Object Model**，简称 `DOM`，将页面所有的内容表示为可以修改的对象。

浏览器会对 html，css 进行渲染，同时又要考虑可能会通过 JavaScript 来对其操作，于是浏览器将 html 的每一个元素都抽象成了一个个对象；

所有对象都可以通过 JavaScript 来对其进行访问，就可以通过 JavaScript 来操作页面，所以将这个抽象过程称之为文档对象模型。

**整个文档被抽象到 document 对象中：**

- `document.documentElement` 对应的是 html 元素
- `document.body` 对应的是 body 元素
- `document.head` 对应的是 head 元素

**一行代码可以让整个页面变成红色：**

```javascript
document.body.style.background = 'red’
```

## 二、认识 DOM tree

一个页面不只是有 html，head，body 元素，也包括很多的子元素；

在 html 结构中，最终会形成一个树结构；

在抽象成 DOM 对象的时候，他们也会形成一个结构，`DOM Tree`。

![image-20240204140120108](/front-end/javascript/image-20240204140120108.png)

## 三、节点、元素导航

### 节点导航

获取到一个节点之后，可以根据这个节点去获取其他节点

**节点之间存在如下关系：**

1. 父节点：**`parentNode`**
2. 前兄弟节点：**`previousSibling`**
3. 后兄弟节点：**`nextSibling`**
4. 子节点：**`childNodes`**
5. 第一个子节点：**`firstChild`**
6. 最后一个子节点：**`lastChild`**

```html
<body>
	<!-- 这是注释 -->
	<script>
		// 1、获取节点
		var bodyEl = document.body

		// 2、获取所有的子节点
		var allChildNodes = bodyEl.childNodes
		console.log(allChildNodes)

		// 3、获取body的第一个子节点
		var bodyFirstChild = bodyEl.firstChild
		console.log(bodyFirstChild)

		// 4、获取body中的注释
		var bodyElCommentChild = bodyFirstChild.nextSibling
		console.log(bodyElCommentChild)

		// 5、获取父节点
		var bodyParent = bodyEl.parentNode
		console.log(bodyParent)
	</script>
</body>
```

### 元素导航

获取到一个元素之后，可以根据这个元素去获取其他元素

**元素之间存在如下关系：**

1. 父元素：**`parentElement`**
2. 前兄弟元素：**`previousElementSibling`**
3. 后兄弟元素：**`nextElementSibling`**
4. 子元素：**`children`**
5. 第一个子元素：**`firstElementChild`**
6. 最后一个子元素：**`lastElementChild`**

```html
<body>
	<div class="box">box</div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
	<script>
		// 1、获取元素
		var bodyEl = document.body

		// 2、获取所有的子元素（element）
		var childElement = bodyEl.children
		console.log(childElement)

		// 3、获取box元素
		var boxEl1 = bodyEl.firstElementChild
		var boxEl2 = bodyEl.children[0]
		console.log(boxEl1, boxEl2)

		// 4、获取ul元素
		var ulEl = boxEl1.nextElementSibling
		console.log(ulEl)

		// 5、获取li元素
		var liEls = ulEl.children
		console.log(liEls)
	</script>
</body>
```

## 四、表格、表单导航

### 表格导航

**table 支持的属性：**

1. `rows`: tr 元素的集合
2. `caption/tHead/tFoot`： 引用元素`<caption> / <thead> / <tfoot>`、
3. `tBodies`: tbody 元素的集合

**thead、tfoot、tbody 元素支持的属性：**

1. `rows`： 表格内部 tr 元素的集合

**tr 支持的属性：**

1. `cells`： 在给定 tr 中的 td 和 th 单元格的集合
2. `sectionRowIndex`： 给定的 tr 在封闭的 thead、tfoot、tbody 中的位置
3. `rowIndex`： 在整个表格中 tr 的编号，包括表格所有行

**td 和 th 支持的属性：**

1. `cellIndex`： 在封闭的 tr 中单元格的编号

```html
<body>
	<table>
		<thead>
			<tr>
				<th>姓名</th>
				<th>年龄</th>
				<th>身高</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Mocha</td>
				<td>18</td>
				<td>1.88</td>
			</tr>
			<tr>
				<td>Latte</td>
				<td>28</td>
				<td>2.88</td>
			</tr>
		</tbody>
	</table>
	<script>
		var tableEl = document.body.firstElementChild
		console.log(tableEl.tHead, tableEl.tBodies)
		console.log(tableEl.rows[2].cells[0].innerText)
	</script>
</body>
```

**案例练习**

```html
<!DOCTYPE html>
<html lang="en">
	​
	<head>
		<meta charset="UTF-8" />
		<meta
			http-equiv="X-UA-Compatible"
			content="IE=edge"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>table导航案例练习</title>
		<style>
			table {
				border-collapse: collapse;
			}
			​ td {
				border: 1px solid #000;
				padding: 8px 12px;
			}
		</style>
	</head>
	​
	<body>
		<table>
			<tr>
				<td>1-1</td>
				<td>2-1</td>
				<td>3-1</td>
				<td>4-1</td>
			</tr>
			<tr>
				<td>1-2</td>
				<td>2-2</td>
				<td>3-2</td>
				<td>4-2</td>
			</tr>
			<tr>
				<td>1-3</td>
				<td>2-3</td>
				<td>3-3</td>
				<td>4-3</td>
			</tr>
			<tr>
				<td>1-4</td>
				<td>2-4</td>
				<td>3-4</td>
				<td>4-4</td>
			</tr>
		</table>
		​
		<script>
			    var tableEl = document.body.firstElementChild
			​
			    for (var i = 0; i < tableEl.rows.length; i++) {
			      var rowEl = tableEl.rows[i]
			      var cellEl = rowEl.cells[i]
			      cellEl.style.background = "red"
			      cellEl.style.color = "white"
			    }
		</script>
	</body>
	​
</html>
```

![image-20240204140605703](/front-end/javascript/image-20240204140605703.png)

### 表单导航

form 元素可以通过 document 来获取，`document.forms`

form 元素中的内容可以通过 elements 来获取：`form.elements`

可以设置 name 来获取

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			http-equiv="X-UA-Compatible"
			content="IE=edge"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>form导航</title>
	</head>

	<body>
		<form action="">
			<input
				type="text"
				name="account"
			/>
			<input
				type="password"
				name="password"
			/>
			<input
				type="checkbox"
				name="hobbies"
				checked
			/>
			<select name="fruits">
				<option value="apple">苹果</option>
				<option value="orange">橘子</option>
			</select>
		</form>

		<script>
			// 获取form
			var formEl = document.body.firstElementChild

			// 获取form子元素
			var inputEl = formEl.elements.account
			setTimeout(function () {
				console.log(inputEl.value)
			}, 2000)
		</script>
	</body>
</html>
```

## 五、获取元素的方法

- `getElementById`： 根据 id 获取
- `getElementsByClassName`： 根据类名获取
- `getElementsByTagName`： 根据标签名获取
- `getElementsByName`： 根据 name 属性获取
- `querySelector`： 查询选择器获取单个
- `querySelectorAll`： 查询选择器获取所有

```html
<div id="home">home</div>
<div class="box">
	<h2>我是标题</h2>
	<div class="container">
		<p>我是段落哈哈哈哈<span class="keyword">Mocha</span></p>
		<input
			type="text"
			name="account"
		/>
	</div>
	<div class="container">
		<p>我是段落哈哈哈哈<span class="keyword">Mocha</span></p>
		<input
			type="text"
			name="account"
		/>
	</div>
</div>
<div id="article">article</div>

<script>
	var homeEl = document.getElementById('home')
	console.log(homeEl)

	var boxEl = document.getElementsByClassName('box')
	console.log(boxEl)

	var h2El = document.getElementsByTagName('h2')
	console.log(h2El)

	var accountEl = document.getElementsByName('account')
	console.log(accountEl)

	var articleEl = document.querySelector('#article')
	console.log(articleEl)

	var containersEl = document.querySelectorAll('.container')
	console.log(containersEl)
</script>
```

## 六、Node 的节点属性

`nodeType` 属性提供获取节点类型的方法，它有一个数值型值。

**常见的节点类型有：**

- `Node.ELEMENT_NODE` 1 表示一个元素节点例如 p div
- `Node.TEXT_NODE` 3 表示 Element 或者 Attr 中实际的文字
- `Node.COMMENT_NODE` 8 表示一个 Comment 节点
- `Node.DOCUMENT_NODE` 9 表示一个 Document 节点
- `Node.DOCUMENT-TYPE_NODE` 10 表示描述文档类型的 DoucmentType 节点例如 html>就是用于 html5

```html
<body>
	<!-- 我是注释 -->
	我是文本
	<div class="box">
		<h2>我是标题</h2>
		<p>哈哈哈</p>
	</div>
</body>

<script>
	// 1、获取三个节点
	var bodyChildNodes = document.body.childNodes
	var commentNode = bodyChildNodes[1]
	var textNode = bodyChildNodes[2]
	var divNode = bodyChildNodes[3]

	console.log(commentNode, textNode, divNode)

	// 2、节点类型
	console.log(commentNode.nodeType, textNode.nodeType, divNode.nodeType)

	// 3、data针对非元素的节点获取数据

	// 4、innerHTML：对应的html元素也会获取
	console.log(divNode.innerHTML)

	// 5、textContent：只会获取文本内容
	console.log(divNode.textContent)

	// 6、设置文本中包含元素内容，那么innerHTML浏览器会解析标签，textContent只会当成文本的一部分
	divNode.innerHTML = '<h2>呵呵呵</h2>'
	divNode.textContent = '<h2>呵呵呵</h2>'
</script>
```

**七、元素的全局属性**

**hidden**

```html
<body>
	<div class="box">box</div>
	<script>
		var boxEl = document.querySelector('.box')
		boxEl.onclick = function () {
			boxEl.hidden = !boxEl.hidden
		}
	</script>
</body>
```

