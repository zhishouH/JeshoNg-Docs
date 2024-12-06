import DefaultTheme from 'vitepress/theme'
import GridBackgroundGenerator from './components/grid-background-generator.vue'
import autoScroll from './components/auto-scroll.vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册全局组件
		app.component('grid-background-generator', GridBackgroundGenerator)
		app.component('auto-scoll', autoScroll)
	},
}

