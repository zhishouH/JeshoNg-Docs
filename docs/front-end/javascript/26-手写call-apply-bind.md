# 手写 call-apply-bind

## 一、实现 call

**函数 call 调用方式：**

```javascript
function foo(name, age) {
	console.log(this, name, age)
}

foo.call({ name: 'mocha' }, 20) // {name: 'mocha'} 'mocha' 20
```

**手写 call：**

```javascript
function foo(name, age) {
	console.log(this, name, age)
}

Function.prototype.moCall = function (thisArg, ...otherArgs) {
	// this -> 指向当前调用的函数对象
	// thisArg -> 传入的第一个参数，是要绑定的this

	// 确保thisArg是对象类型
	thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)

	Object.defineProperty(thisArg, 'fn', {
		configurable: true,
		value: this,
	})

	thisArg.fn(...otherArgs)

	delete thisArg.fn
}

foo.moCall({ name: 'mocha' }, 20) // {name: 'mocha', fn: ƒ} 'mocha' 20
```

## 二、实现 apply

**函数 apply 调用方式：**

```javascript
function foo(name, age) {
	console.log(this, name, age)
}

foo.apply({ name: 'mocha' }, [20]) // {name: 'mocha'} 'mocha' 20
```

**手写 apply：**

```javascript
function foo(age) {
	console.log(this, this.name, age)
}

Function.prototype.moApply = function (thisArg, otherArgs) {
	// this -> 指向当前调用的函数对象
	// thisArg -> 传入的第一个参数，是要绑定的this

	// 确保thisArg是对象类型
	thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)

	Object.defineProperty(thisArg, 'fn', {
		configurable: true,
		value: this,
	})

	thisArg.fn(...otherArgs)

	delete thisArg.fn
}

foo.moApply({ name: 'mocha' }, [20]) // // {name: 'mocha', fn: ƒ} 'mocha' 20
```

## 三、实现 bind

**函数 bind 调用方式：**

```javascript
function foo(age) {
	console.log(this, this.name, age)
}

var newfoo = foo.bind({ name: 'mocha' }, 20)

newfoo() //  {name: 'mocha'} 'mocha' 20
```

**手写 bind:**

```javascript
function foo(age, height) {
	console.log(this, this.name, age, height)
}

Function.prototype.moBind = function (thisArg, ...otherArgs) {
	thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)

	Object.defineProperty(thisArg, 'fn', {
		configurable: true,
		enumerable: false,
		writable: false,
		value: this,
	})

	return (...newArgs) => {
		thisArg.fn(...otherArgs, ...newArgs)
	}
}

var newFoo = foo.moBind({ name: 'mocha' }, 'gmi')

newFoo(1.88) // {name: 'mocha', fn: ƒ} 'mocha' 'gmi' 1.88
```

