# DOM 操作练习

## 一、动态创建列表

```html
<h1>动态创建列表</h1>
<ul class="list"></ul>

<script>
	var listEl = document.querySelector('.list')

	var isFlag = true
	while (isFlag) {
		var message = prompt('请输入信息：')
		if (!message) {
			isFlag = false
		} else {
			var liEl = document.createElement('li')
			liEl.textContent = message
			listEl.append(liEl)
		}
	}
</script>
```

## 二、动态时间

```html
<h1 class="time"></h1>

<script>
	/* 封装补零工具函数 */
	function padLeft(content, count, padStr) {
		count = count || 2
		padStr = padStr || '0'
		content = String(content)
		return content.padStart(count, padStr)
	}

	/* 获取dom元素 */
	var timeEl = document.querySelector('.time')

	/* 实时更新 */
	setInterval(function () {
		var date = new Date()

		var year = date.getFullYear()
		var month = padLeft(date.getMonth())
		var day = padLeft(date.getDate())
		var hour = padLeft(date.getHours())
		var minute = padLeft(date.getMinutes())
		var second = padLeft(date.getSeconds())

		timeEl.textContent = `${year}-${month}-${day} ${hour}:${minute}:${second}`
	}, 1000)
</script>
```

## 三、倒计时

```html
<style>
	.countdown {
		color: red;
		font-size: 20px;
	}

	.countdown .time {
		display: inline-block;
		background-color: #f00;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
	}
</style>

<div class="countdown">
	<span class="time hour"></span>
	<span class="split">:</span>
	<span class="time minute"></span>
	<span class="split">:</span>
	<span class="time second"></span>
</div>

<script>
	/* 封装补零工具函数 */
	function padLeft(content, count, padStr) {
		count = count || 2
		padStr = padStr || '0'
		content = String(content)
		return content.padStart(count, padStr)
	}

	/* 获取元素 */
	var hourEl = document.querySelector('.hour')
	var minuteEl = document.querySelector('.minute')
	var secondEl = document.querySelector('.second')

	setInterval(function () {
		/* 现在的时间 */
		var nowDate = new Date()
		/* 截至的时间*/
		var endDate = new Date()
		/* 设置截至的时间*/
		endDate.setHours(24)
		endDate.setMinutes(0)
		endDate.setSeconds(0)
		endDate.setMilliseconds(0)

		/* 截止时间与现在时间的差 */
		var intervalTime = Math.floor(
			(endDate.getTime() - nowDate.getTime()) / 1000
		)
		var hour = Math.floor(intervalTime / 3600)
		var minute = Math.floor((intervalTime / 60) % 60)
		var second = Math.floor(intervalTime % 60)

		// 设置内容
		hourEl.textContent = padLeft(hour)
		minuteEl.textContent = padLeft(minute)
		secondEl.textContent = padLeft(second)
	}, 1000)
</script>
```

