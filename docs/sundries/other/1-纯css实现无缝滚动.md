# 纯 css 实现无缝滚动

![image-20240131182111821](/public/sundries/纯css无缝滚动示意图.jpg)

- 准备两个 `.box` 容器
- 使用 `@keyframes` 动画将内容从右向左连续移动，形成无缝衔接的视觉效果
- 使用 `animation-play-state: paused;` 停止动画执行

:::code-group

```html [move.html]
<div class="wrap">
	<div class="box">
		<div class="box-item">item1</div>
		<div class="box-item">item2</div>
		<div class="box-item">item3</div>
		<div class="box-item">item4</div>
	</div>
	<div class="box">
		<div class="box-item">item1</div>
		<div class="box-item">item2</div>
		<div class="box-item">item3</div>
		<div class="box-item">item4</div>
	</div>
</div>
```

```css [move.css]
.wrap {
	width: 1060px;
	display: flex;
	gap: 20px;
	margin: 100px auto;
	overflow: hidden;
}

.box {
	width: 100%;
	display: flex;
	gap: 20px;
	animation: move 10s linear infinite;
}

.wrap:hover .box {
	animation-play-state: paused;
}

.box-item {
	width: 250px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: tomato;
	border-radius: 10px;
	font-weight: bold;
	font-size: 24px;
	color: #fff;
}

@keyframes move {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-100%);
	}
}
```

:::
