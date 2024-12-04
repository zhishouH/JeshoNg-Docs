<script setup>
	import { ref, onMounted, computed } from 'vue'

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
	const gridSize = ref(10)

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

	const gradientRadius = ref(1)

	const gridCss = computed(() => {
		let css = {}
		switch (currentModeIndex.value) {
			case 1: {
				css = {
					'background-size': `${gridSize.value}px ${gridSize.value}px`,
					'background-position': 'center center',
					'background-image': `linear-gradient(to right, #cbd5e1 ${lineWidth.value}px, transparent ${lineWidth.value}px),	linear-gradient(to bottom, #cbd5e1 ${lineWidth.value}px, transparent ${lineWidth.value}px)`,
					'mask-image':
						'linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent),linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent)',
					'mask-composite': 'intersect',
				}
				break
			}
			case 2: {
				break
			}
			case 3: {
				break
			}
			default:
		}
		return css
	})
</script>

<template>
	<div class="grid-background-generator">
		<div
			class="grid"
			:style="gridCss"
		></div>
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
			<label for="line-width_input">线条宽度({{ lineWidth }}px)：</label>
			<span>1px</span>
			<input
				class="line-width_input"
				type="range"
				id="line-width_input"
				min="0"
				max="10"
				v-model="lineWidth"
			/>
			<span>10px</span>
		</div>
		<div class="grid-size">
			<label for="grid-size_input">网格大小({{ gridSize }}px)：</label>
			<span>1px</span>
			<input
				class="grid-size_input"
				type="range"
				id="grid-size_input"
				min="1"
				max="100"
				v-model="gridSize"
			/>
			<span>100px</span>
		</div>
		<div class="line-color">
			<label for="line-color_input">线条颜色：</label>
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
			<div class="select-color">
				<input
					type="color"
					class="select-color_choose"
					v-model="currnetDefaultColor"
				/>
				<input
					type="text"
					class="select-color_input"
					id="line-color_input"
					v-model="currnetDefaultColor"
				/>
			</div>
		</div>
		<div class="mask">
			<input
				class="mask-input"
				type="checkbox"
				id="mask-input"
			/>
			<label for="mask-input">是否显示边缘遮罩</label>
		</div>
		<div class="gradient-radius">
			<label for="gradient-radius_input">渐变半径： </label>
			<span>10px</span>
			<input
				class="gradient-radius_input"
				type="range"
				id="gradient-radius_input"
				min="10"
				max="200"
				v-model="gradientRadius"
			/>
			<span>200px</span>
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
			color: $color;
			border: 2px solid $color;
			cursor: pointer;
			transition: color 200ms, background-color 200ms;
			user-select: none;

			&.is-active {
				color: #fff;
				background-color: $color-hover;
			}
		}
	}

	.grid {
		width: 100%;
		height: 200px;
		margin: 0 0 20px;
	}

	/* 线条宽度\网格大小\渐变半径 */
	.line-width,
	.grid-size,
	.gradient-radius {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		&_input {
			height: 2px;
			accent-color: $color;
			cursor: pointer;
		}
	}

	/* 线条颜色 */
	.line-color {
		margin-bottom: 20px;

		.default-color {
			display: flex;
			margin: 20px 0;
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
					border-radius: 8px;
					opacity: 0;
				}

				&.is-current {
					.default-color_item-inner {
						opacity: 1;
					}
				}
			}
		}

		.select-color {
			display: flex;
			gap: 15px;

			&_input {
				width: 70px;
				border-bottom: 1px solid #ccc;

				&:focus {
					border-color: $color-hover;
				}
			}
		}
	}

	/* 是否显示遮罩层 */
	.mask {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;

		&-input {
			accent-color: $color;
		}
	}

	.line-width,
	.grid-size,
	.line-color,
	.mask,
	.gradient-radius {
		box-shadow: 0 0 1px 1px #eee;
		padding: 20px;
		border-radius: 10px;

		label {
			font-weight: bold;
			cursor: pointer;
			user-select: none;
		}

		.current-value {
			display: inline-block;
			font-weight: bold;
			padding-left: 50px;
		}
	}
</style>
