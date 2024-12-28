# 函数的 this 指向

## 一、this 的绑定规则

### 默认绑定

```javascript
// 1 独立函数被调用-this指向window
function foo() {
	console.log(this)
}
foo()

// 2 函数定义在对象中，但是被独立调用-this指向window
var obj = {
	bar: function () {
		console.log(this)
	},
}
var baz = obj.bar
baz()

// 3 高阶函数,函数作为实参被调用-this指向window
var obj2 = {
	bar: function () {
		console.log(this)
	},
}
function test(fn) {
	fn()
}
test(obj2.bar)
```

### 隐式绑定

```javascript
function foo() {
	console.log(this)
}

var obj = {
	bar: foo,
}

// 通过对象调用函数-this指向该对象
obj.bar()
```

### 显式绑定

```javascript
function foo(name, age, height) {
	console.log(this, name, age, height)
}

// 1 apply调用：第一个参数绑定this，第二个参数传入额外的实参(以数组的形式)
foo.apply('apply', ['mocha', 18, 1.88])

// 2 call调用：第一个参数绑定this，其余传入参数列表作为实参
foo.call('call', 'latte', 19, 1.99)

// 3 bind绑定
var obj = { name: 'obj' }
// 调用函数时候，总是绑定到对象上，但函数不写入对象中
var bar = foo.bind(obj, 'mocha', 18, 1.88)
bar()
```

### new 绑定

```javascript
// new绑定-创建一个新的空对象，this指向这个对象
function foo() {
	console.log(this)
}

new foo()
```

### 注意

1. 函数在调用的时候，JavaScript 会默认给 this 绑定一个值
2. this 的绑定和定义的位置（编写的位置）没有关系
3. this 的绑定和调用方式以及调用的位置有关系
4. this 是在运行时被绑定的

## 二、this 的绑定优先级

1. 默认绑定优先级最低
2. 显式绑定高于隐式绑定
3. new 绑定高于隐式绑定
4. new 绑定高于 bing，new 不能和 call，apply 同时使用

```javascript
function foo() {
	console.log(this)
}

// 1、显式绑定高于隐式绑定
var obj = { bar: foo }
obj.bar.apply('apply') // this指向apply
obj.bar.call('call') // this指向call

var bar = foo.bind('bind')
var obj2 = { baz: bar }
obj2.baz() // this指向bind

// 2、new绑定高于隐式绑定
var obj3 = {
	foo: function () {
		console.log(this)
	},
}
new obj3.foo() // this指向新的空对象

// 3、new 绑定高于bind
var bindFn = foo.bind('bind')
new bindFn() // this指向新的空对象
```

## 三、绑定之外的情况

### 情况一

在显式绑定中，传入 null/undefined，这个显式绑定会被忽略，使用默认规则，但在严格模式下将为原始值

```javascript
function foo() {
	console.log(this)
}

foo.apply(null) // this指向window，严格模式下为null
foo.apply(undefined) // this指向window，严格模式下为undefined
```

### 情况二

间接函数引用，使用默认规则

```javascript
var obj = {
	foo: function () {
		console.log(this)
	},
}

var obj2 = {}((obj2.foo = obj.foo))() // this指向window
```

## 四、箭头函数的使用

### 特性

- 箭头函数不会绑定 this，也不会有 arguments 属性
- 箭头函数不能作为构造函数

### 编写优化

- 只有一个参数的时候可以省略（）
- 函数体只有一行代码时可以省略{}，但会将这行代码作为返回值
- 如果默认返回一个对象的时候，必须加上（）

```javascript
var names = ['mocha', 'latte', 'coffee', 'tea-milk']
names.forEach(item => console.log(item))

var arrFn = () => ({ name: 'mocha', age: 18 })

var nums = [1, 2, 3, 4, 5]
var totalNums = nums
	.filter(item => item % 2 === 0)
	.map(item => item ** 2)
	.reduce((preValue, item) => preValue + item)
```

**箭头函数中的 this 用法：**

```javascript
function request(url, callbackFn) {
	var result = ['aaa', 'bbb', 'ccc']
	callbackFn(result)
}

var obj = {
	names: [],
	network: function () {
		// es5之前使用变量保存this
		// _this = this
		request('/names', res => {
			this.names = [].concat(res)
		})
	},
}

obj.network()
console.log(obj.names)
```

## 五、this 练习题分析

### 练习题一

```javascript
var name = 'window'

var person = {
	name: 'person',
	sayName: function () {
		console.log(this.name)
	},
}

function sayName() {
	var test = person.sayName
	test() // window 默认绑定(独立函数调用)
	person.sayName() // person 隐式绑定
	person.sayName() // person 隐式绑定
	;(b = person.sayName)() // window 间接函数调用(独立函数调用)
}

sayName()
```

### 练习题二

```javascript
var name = 'window'

var person1 = {
	name: 'person1',
	foo1: function () {
		console.log(this.name)
	},
	foo2: () => console.log(this.name),
	foo3: function () {
		return function () {
			console.log(this.name)
		}
	},
	foo4: function () {
		return () => {
			console.log(this.name)
		}
	},
}

var person2 = { name: 'person2' }

person1.foo1() // window (独立函数调用)
person2.foo1.call(person2) // person2 (显示绑定)

person1.foo2() // window (箭头函数不绑定this,上层作用域是全局)
person1.foo2.call(person2) // window (箭头函数不适用this的绑定规则)

person1.foo3()() // window (独立函数调用)
person1.foo3.call(person2)() // window (独立函数调用)
person1.foo3().call(person2) // person2 (最终调用返回函数时，使用的是显示绑定)

person1.foo4()() // person1 (箭头函数不绑定this，上层作用域是person1)
person1.foo4.call(person2) // person2 (上层作用域被显示地绑定为person2)
person1.foo4().call(person2) // peerson1 (上层找到了person1)
```

### 练习题三

```javascript
var name = 'window'

function Person(name) {
	this.name = name
	this.foo1 = function () {
		console.log(this.name)
	}
	this.foo2 = () => console.log(this.name)
	this.foo3 = function () {
		return function () {
			console.log(this.name)
		}
	}
	this.foo4 = function () {
		return () => {
			console.log(this.name)
		}
	}
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1 (隐式绑定)
person1.foo1.call(person2) // person2 (显示绑定)

person1.foo2() // person1 上层作用域是person1
person1.foo2.call(person2) // person1 call不绑定箭头函数中的this

person1.foo3()() // window (独立函数调用)
person1.foo3.call(person2)() // window (独立函数调用)
person1.foo3().call(person2) // person2 (显示绑定)

person1.foo4()() // person1
person1.foo4.call(person2)() // person2
person1.foo4().call(person2) // person1
```

### 练习题四

```javascript
var name = 'window'

function Person(name) {
	this.name = name
	this.obj = {
		name: 'obj',
		foo1: function () {
			return function () {
				console.log(this.name)
			}
		},
		foo2: function () {
			return () => {
				console.log(this.name)
			}
		},
	}
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window (独立函数调用)
person1.obj.foo1.call(person2)() // window (独立函数调用)
person1.obj.foo1().call(person2) // person2 (显示绑定)

person1.obj.foo2()() // obj
person1.obj.foo2.call(person2)() // person2
person1.obj.foo2().call(person2) // obj
```

