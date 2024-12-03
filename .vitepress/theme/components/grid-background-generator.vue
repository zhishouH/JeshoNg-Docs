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

	/* 线条宽度 */
	const lineWidth = ref(1)

	/* 网格大小 */
	const gridSize = ref(1)

	/* 线条颜色 */
	const defaultLineColor = ref([
		'#cbd5e1',
		'#ff924c',
		'#a0c4ff',
		'#ff595e',
		'#3fc95d',
		'#409eff',
		'#909399',
		'#212529',
	])
	const currnetDefaultColor = ref('#cbd5e1')
	const handleSelectColor = color => {
		currnetDefaultColor.value = color
	}

	const color = ref('')
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
		<div class="line-width">
			<label for="line-width_input">线条宽度：</label>
			<span>1px</span>
			<input
				class="line-width_input"
				type="range"
				name="lineWidth"
				id="line-width_input"
				min="0"
				max="10"
				v-model="lineWidth"
			/>
			<span>10px</span>
		</div>
		<div class="grid-size">
			<label for="grid-size_input">网格大小：</label>
			<span>1px</span>
			<input
				class="grid-size_input"
				type="range"
				name="lineWidth"
				id="grid-size_input"
				min="0"
				max="10"
				v-model="gridSize"
			/>
			<span>10px</span>
		</div>
		<div class="line-color">
			<label for="grid-size_input">线条颜色：</label>
			<div class="default-color">
				<template
					v-for="item in defaultLineColor"
					:key="item"
				>
					<div
						:class="[
							'default-color_item',
							{ 'is-current': item === currnetDefaultColor },
						]"
						:style="{ 'background-color': item }"
						@click="handleSelectColor(item)"
					>
						<div
							class="default-color_item-inner"
							:style="{ 'border-color': item }"
						></div>
					</div>
				</template>
			</div>
			<input
				type="color"
				v-model="currnetDefaultColor"
			/>
			<sketch-picker v-model="color" />
			{{ currnetDefaultColor }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$color: #3451b2;
	$color-hover: #233f9b;

	/* 模式选择 */
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

	/* 线条宽度与网格大小 */
	.line-width,
	.grid-size {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		label {
			font-weight: bold;
		}

		&_input {
			height: 2px;
			accent-color: #3451b2;
			cursor: pointer;
		}
	}

	/* 线条颜色 */
	.line-color {
		label {
			font-weight: bold;
		}

		.default-color {
			display: flex;
			margin: 10px 0;
			gap: 15px;

			&_item {
				position: relative;
				width: 20px;
				height: 20px;
				border-radius: 5px;
				cursor: pointer;

				&-inner {
					position: absolute;
					top: -4px;
					left: -4px;
					z-index: 2;
					height: 28px;
					width: 28px;
					border: 2px solid transparent;
					border-radius: 5px;
					opacity: 0;
				}

				&.is-current {
					.default-color_item-inner {
						opacity: 1;
					}
				}
			}
		}
	}
</style>
