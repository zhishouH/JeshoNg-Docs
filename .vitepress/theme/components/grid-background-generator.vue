<script setup>
	import { ref } from 'vue'

	/* 模式选择处理 */
	const currentModeIndex = ref(1)
	const modeData = ref([
		{ id: 1, name: '网格' },
		{ id: 2, name: '点阵' },
		{ id: 3, name: '花纹' },
	])
	const handleSelectMode = id => {
		currentModeIndex.value = id
	}

	/* 线条宽度处理 */
	const lineWidth = ref(1)
</script>

<template>
	<div class="grid-background-generator">
		<div class="select-mode">
			<template
				v-for="item in modeData"
				:key="item.id"
			>
				<span
					:class="['mode-item', { 'is-active': currentModeIndex === item.id }]"
					@click="handleSelectMode(item.id)"
				>
					{{ item.name }}</span
				>
			</template>
		</div>
		<div>
			<label for="line-width">线条宽度</label>
			<input
				class="line-width"
				type="range"
				name="lineWidth"
				id="line-width"
				min="0"
				max="10"
				v-model="lineWidth"
			/>
		</div>

		{{ lineWidth }}
	</div>
</template>

<style lang="scss" scoped>
	.select-mode {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;

		.mode-item {
			padding: 4px 24px;
			border-radius: 8px;
			font-weight: bold;
			color: #3451b2;
			border: 2px solid #3451b2;
			cursor: pointer;
			transition: color 200ms, background-color 200ms;
			user-select: none;

			&.is-active {
				color: #fff;
				background-color: #233f9b;
			}
		}
	}

	.line-width {
		height: 2px;
		accent-color: #3451b2;
	}
</style>
