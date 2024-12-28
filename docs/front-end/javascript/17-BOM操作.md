# BOM 操作

## 一、认识 BOM

**浏览器对象模型（Browser Object Model）**，简称`BOM`，由浏览器提供的用于处理文档之外的所有内容的其他对象，比如 navigator、 location、history 等对象。

JavaScript 有一个非常重要的运行环境就是浏览器，而且浏览器本身又作为一个应用程序需要对其本身进行操作；所以通常浏览器会有对应的对象模型 (BOM，Browser Object Model)；我们可以将 BOM 看成是连接 JavaScript 脚本与浏览器窗口的桥梁。

**BOM 主要包括以下的对象模型：**

- window: 包括全局属性、方法，控制浏览器窗口相关的属性、方法
- location: 浏览器连接到的对象的位置(URL)
- history: 操作浏览器的历史
- navigator: 用户代理(浏览器)的状态和标识
- screen: 屏幕窗口信息

## 二、全局对象 window

**window 对象在浏览器中可以有两个视角来看待：**

- **视角一**:

全局对象。我们知道 ECMAScript 其实是有一个全局对象的，这个全局对象在 Node 中是 global；在浏览器中就是 window 对象。

- **视角二:**

浏览器窗口对象； 作为浏览器窗口时，提供了对浏览器操作的相关的 API。

当然，这两个视角存在大量重叠的地方，所以不需要刻意去区分它们；事实上对于浏览器和 Node 中全局对象名称不一样的情况，目前已经指定了对应的标准，称之为 globalThis，并且大多数现代浏览器都支持它。

- 放在 window 对象上的所有属性都可以被访问。
- 使用 var 定义的变量会被添加到 window 对象中。
- window 默认给我们提供了全局的函数和类: setTimeout、Math、Date、 Object 等。

```javascript
console.log(window)
console.log(globalThis)
console.log(window === globalThis)
```

![image-20240204154236895](./assets/image-20240204154236895.png)

### 常见属性

- outerHeight： 整个浏览器窗口的高度
- innerHeight： 浏览器窗口的视口高度
- outerWidth: 整个浏览器窗口的宽度
- innerWidth: 浏览器窗口的视口宽度
- screenX： 返回浏览器左边界到操作系统桌面左边界的水平距离。
- screenY： 返回浏览器上边界到操作系统桌面上边界的垂直距离。
- scrollX： 返回文档/页面水平方向滚动的像素值。
- scrollY： 返回文档/页面垂直方向滚动的像素值。

### 常见方法

- open(url,target)： 打开一个新的窗口
- close()： 关闭一个窗口，只能是 open 打开的窗口才能被 close 关闭

### 常见事件

- onfoucs： 聚焦
- onblur： 失焦
- onload： 文档加载
- onhashchange： 哈希值发生变化时触发

```javascript
window.onfocus = function () {
	console.log('onfoucs')
}

window.onblur = function () {
	console.log('onblur')
}

window.onload = function () {
	console.log('onload')
}

window.onhashchange = function () {
	console.log('onhashchange')
}
```

事实 window 对象上肩负的重担是非常大的:

- 包含大量的属性，localStorage 、console、 location、history、screenX、scrollX 等等 (大概 60+个属性)
- 包含大量的方法 alert、close、scrollTo、open 等等(大概 40+个方法) ;
- 包含大量的事件，focus、blur、load、hashchange 等等(大概 30+个事件);
- 包含从 EventTarget 继承的方法，addEventListener、removeEventListener、dispatchEvent 方法

MDN 文档: [**https://developer.mozilla.org/zh-CN/docs/Web/API/Window**](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

## 三、location 对象

location 对象用于表示 window 上当前链接到的 URL 信息。

### 常见属性

- href: 当前 window 对应的超链接 URL,整个 URL
- protocol: 当前的协议
- host: 主机地址
- hostname: 主机地址(不带端口)
- port: 端口
- pathname: 路径
- search: 查询字符串
- hash: 哈希值

### 常见方法

- assign: 赋值一个新的 URL，并且跳转到该 URL 中
- replace: 打开一个新的 URL，并且跳转到该 URL 中(不同的是不会在浏览记录中留下之前的记录)
- reload: 重新加载页面，可以传入一个 Boolean 类型:

```html
<button>跳转</button>
<script>
	var btnEl = document.querySelector('button')

	btnEl.onclick = function () {
		// location.assign("01-window对象.html")

		// location.replace("01-window对象.html")

		location.reload()
	}
</script>
```

URLSearchParams 定义了一些实用的方法来处理 URL 的查询字符串，可以将一个字符串转化成 URLSearchParams 类型，也可以将一个 URLSearchParams 类型转成字符串。中文会使用 encodeURIComponent 和 decodeURIComponent 进行编码和解码。

**URLSearchParams 常见的方法有如下：**

- get: 获取搜索参数的值
- set: 设置一个搜索参数和值
- append: 追加一个搜索参数和值
- has: 判断是否有某个搜索参数

```javascript
var urlSearchStr = '?name=mocha&age=18&height=1.88'
var searchParams = new URLSearchParams(urlSearchStr)

// 获取
console.log(searchParams.get('name'))
console.log(searchParams.get('age'))
console.log(searchParams.get('height'))

// 追加
searchParams.append('address', '广州')
console.log(searchParams.get('address'))

// 判断是否存在
console.log(searchParams.has('name'))

// 转为字符串
console.log(searchParams.toString())

// 遍历所有
for (var [key, value] of searchParams) {
	console.log(key, value)
}
```

## 四、history 对象

history 对象允许访问浏览器曾经的会话历史记录。

### 常见属性

- length： 会话中的记录条数
- state: 当前保留的状态值

### 常见方法

- back(): 返回上一页，等价于 history.go(-1)
- forward(): 前进下一页，等价于 history.go(1)
- go(): 加载历史中的某一页
- pushState(): 打开一个指定的地址
- replaceState()： 打开一个新的地址，并且使用 replace

```html
<button>修改history</button>
<button class="back">返回上一级</button>

<script>
	console.log(history.length)
	console.log(history.state)

	var btnEl = document.querySelector('button')
	var backBtnEl = document.querySelector('.back')

	btnEl.onclick = function () {
		// history.pushState({ name: "mocha", age: 18 }, "", "/mocha")
		history.replaceState({ name: 'mocha', age: 18 }, '', '/mocha')
	}

	backBtnEl.onclick = function () {
		// history.back()
		// history.forward()
		history.go(-1)
	}
</script>
```

### 五、navigator，screen

**navigator** 对象表示用户代理的状态和标识等信息。

```javascript
// 浏览器用户代理字符串
console.log(navigator.userAgent)

// 浏览器厂商名称
console.log(navigator.vendor)

// 用户平台
console.log(navigator.platform)
```

screen 对象主要记录的是浏览器窗口外面的客户端显示器的信息，比如屏幕的逻辑像素

- screen.width
- screen.height

## 六、JSON

JSON 是一种可以在服务器和客户端之间传输的数据格式。

JSON 全称是 JavaScript Object Notatiion (JavaScript 对象符号)。

JSON 是由 Douglas Crockford 构想和设计的一种轻量级资料交换格式，算是 JavaScript 的一个子集。

但是虽然 JSON 被提出来的时候主要应用 JavaScript 中，但是现在已经独立于编程语言，可以在各个语言中使用。很多语言都实现了将 JSON 转成对应模型的方式。

**其他传输格式：**

- XML:

在早期的网络传输中主要是使用 XML 来进行数据交换，但是这种格式在解析、传输等各方面都弱于 JSON，所以目前都已经很少在使用。

- Protobuf:

另外一个在网络传输中目前已经越来越多使用的格式是 protobuf，但是直到 2021 年的 3.x 版本才支持 JavaScript，所以目前在前端很少使用。

**JSON 的使用场景：**

- 网络数据的传输 JSON 数据
- 项目的配置文件
- 非关系型数据库（NoSQL）,将 json 作为存储格式

**支持三种类型的值：**

- 简单值： 数字、字符串(不支持单引号)、布尔类型、null 类型
- 对象值： 由 key,value 组成，key 是字符串类型，并且必须使用双引号，值可以是简单值、对象值、数组值
- 数组值： 简单值、对象值、数组值

JSON 序列化，将 JavaScript 中复杂的数据类型转化成 JSON 格式的字符串

- stringify: 将 JavaScript 类型转为对应的 JSON 字符串
- parse： 解析 json 字符串，转为 JavaScript 类型

```javascript
var obj = {
	name: 'mocha',
	age: 18,
	firend: {
		name: 'kobe',
	},
}

// 将obj对象进行序列化 第二个参数：replacer ,第三个参数space格式化数据方便阅读
var objJSONString = JSON.stringify(
	obj,
	function (key, value) {
		if (key === 'name') {
			return 'latte'
		}
		return value
	},
	4
)
console.log(objJSONString)

// 存储到localStorage
localStorage.setItem('info', objJSONString)

// 取出info
var item = localStorage.getItem('info')

// 反序列化
var newObj = JSON.parse(item, function (key, value) {
	if (key === 'age') {
		return value + 2
	}
	return value
})
console.log(newObj)
```

