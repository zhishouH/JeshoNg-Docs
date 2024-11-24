import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import GridBackgroundGenerator from './components/GridBackgroundGenerator.vue'

import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app, router, siteData }) {
		// 注册全局组件
		app.component('GridBackgroundGenerator', GridBackgroundGenerator)

		// 等待页面加载完成后初始化放大功能
		if (typeof window !== 'undefined') {
			const zoom = mediumZoom({
				// 配置参数，例如 margin 和背景色
				margin: 16,
				background: 'rgba(0, 0, 0, 0.5)',
			})

			// 监听路由变化，更新放大功能绑定
			router.onAfterEach(() => {
				zoom.detach() // 解除之前的绑定
				zoom.attach('img') // 重新绑定图片
			})
		}
	},
}

