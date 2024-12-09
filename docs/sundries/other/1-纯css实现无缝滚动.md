# 纯 css 实现无缝滚动

![image-20240131182111821](/public/sundries/纯css无缝滚动示意图.jpg)

- 准备两个 `.box` 容器
- 使用 `@keyframes` 动画将内容从右向左连续移动，形成无缝衔接的视觉效果
- 使用 `animation-play-state: paused;` 停止动画执行

**效果展示**
<auto-scoll/>

:::code-group

```html [move.html]
<div class="wrap">
	<div class="box">
		<div class="box-item">
			<div class="box-item_inner">item1</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item2</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item3</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item4</div>
		</div>
	</div>
	<div class="box">
		<div class="box-item">
			<div class="box-item_inner">item1</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item2</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item3</div>
		</div>
		<div class="box-item">
			<div class="box-item_inner">item4</div>
		</div>
	</div>
</div>
```

```css [move.css]
.wrap {
	width: 100%;
	display: flex;
	overflow: hidden;
	margin: 0 auto;
}

.box {
	flex-shrink: 0;
	width: 100%;
	display: flex;
	animation: move 10s linear infinite;
}

.wrap:hover .box {
	animation-play-state: paused;
}

.box-item {
	flex-shrink: 0;
	width: 25%;
	height: 100px;
	padding: 10px;
}

.box-item_inner {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	font-weight: bold;
	font-size: 24px;
	color: #fff;
	background-color: tomato;
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
