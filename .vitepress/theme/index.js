import DefaultTheme from 'vitepress/theme'
import GridBackgroundGenerator from './components/GridBackgroundGenerator.vue'

import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('GridBackgroundGenerator', GridBackgroundGenerator)
	},
}

