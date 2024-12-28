# web 服务器开发

## 一、认识 Stream

连续字节的一种表象形式和抽象概念

流是可读的，也是可写的

### 可读流

```javascript
const fs = require('fs')

// 1、一次性读取
// 缺点一：没有办法精准控制从哪里读取，读取什么位置
// 缺点二：读取到某个位置，暂停读取，恢复读取
// 缺点三：文件大的时候，多次读取，没办法切割读取
fs.readFile('./aaa.txt', (err, data) => {
	console.log(data)
})

// 2、通过流来读取文件
// 2.1、创建一个可读流
// start: 从什么位置开始读取
// end：什么位置结束
// highWaterMark：每次读取几个字节，默认64kb
const readStream = fs.createReadStream('./aaa.txt', {
	start: 5,
	end: 20,
	highWaterMark: 3,
})

readStream.on('data', data => {
	console.log(data.toString())
})

readStream.on('open', () => {
	console.log('文件被打开')
})

readStream.on('end', () => {
	console.log('已经读取结束')
})

readStream.on('close', () => {
	console.log('文件读取结束并且被关闭')
})
```

### 可写流

```javascript
const fs = require('fs')

// 1、一次性写入内容
// fs.writeFile(
// 	'./bbb.txt',
// 	'hello world',
// 	{
// 		encoding: 'utf-8',
// 		flag: 'a+',
// 	},
// 	err => {
// 		console.log('写入文件结果', err)
// 	}
// )

const writeStream = fs.createWriteStream('./ccc.txt', {
	flags: 'a+',
})

writeStream.write('gmi')
writeStream.write('bbb', err => {
	console.log('写入完成', err)
})

writeStream.close()

writeStream.on('finish', () => {
	console.log('写入完成')
})

writeStream.on('close', () => {
	console.log('文件关闭')
})
```

### 文件的拷贝流操作

```javascript
const fs = require('fs')

// 方式一、一次性读取和写入文件
fs.readFile('./foo.js', (err, data) => {
	fs.writeFile('./foo_copy01.js', data, err => {
		console.log('文件写入完成', err)
	})
})

// 方式二、创建可读流和可写流
const readStream = fs.createReadStream('./foo.js')
const writeStream = fs.createWriteStream('./foo_copy02.js')

readStream.on('data', data => {
	writeStream.write(data)
})

readStream.on('end', () => {
	writeStream.close()
})

// 方式三、在可读流和可写流之间建立管道
const readStream = fs.createReadStream('./foo.js')
const writeStream = fs.createWriteStream('./foo_copy03.js')

readStream.pipe(writeStream)
```

## 二、http

```javascript
const http = require('http')

// 创建一个http对应的服务器
const server = http.createServer((request, response) => {
	// request对象中包含本次客户端请求的所有信息
	// 请求的url, method, headers 请求携带的数据 ...
	// response对象用于给客户端返回结果
	response.end('hello world!')
})

// 开启服务器，并告知需要监听的端口
// 监听端口时，监听1024以上，65535一下的端口
// 1025~65535
server.listen(8000, () => {
	console.log('服务器开成功')
})
```

**Server** 通过 listen 方法来开启服务器，并且在某一个主机和端口上监听网络请求

- 也就是通过`ip:port`的方式发送到我们监听的 web 服务器上时
- 就可以对其进行相关的处理

**listen**函数有三个参数

- 端口 port：可以不传，系统会默认分配端口
- 主机 host：可以传入 localhost，ip 地址 127.0.0.1，或者 ip 地址 0.0.0.0，默认是 0.0.0.0
  - localhost: 本质上是一个域名，会被解析成 127.0.0.1
  - 127.0.0.1：回环地址，表达的意思是主机自己发出的包，直接被自己接受
    - 正常的数据库包经过 应用层——传输层——网络层——数据链路层——物理层
    - 而回环地址是在网络层就被获取到了，不会经过数据链路层和物理层
    - 比如监听 127.0.0.1 时，在同一网段下的主机，通过 ip 地址不能访问
  - 0.0.0.0：
    - 监听 ipv4 上所有地址，再根据端口找到不同的应用程序
    - 比如监听 0.0.0.0，在同一网段下的主机，通过 ip 地址是可以访问的
- 回调函数：服务器启动成功时候的回调函数

![image-20240303235547875](/back-end/node/image-20240303235547875.png)

