<script setup>
	import { ref } from 'vue'
	const counter = ref(0)

	const handleAddCounter = () => {
		counter.value++
	}
</script>

<template>
	<div>{{ counter }}</div>
	<button @click="handleAddCounter">add counter</button>
</template>

<style lang="less" scoped></style>

