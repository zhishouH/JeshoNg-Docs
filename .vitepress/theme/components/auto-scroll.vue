<script setup></script>

<template>
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
</template>

<style lang="scss" scoped>
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
</style>
