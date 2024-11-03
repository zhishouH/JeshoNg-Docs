import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto-generated-sidebars.mjs'

export default defineConfig({
	base: '/JeShoNg-Docs/',
	srcDir: './src',
	cleanUrls: true,
	head: [['link', { rel: 'icon', href: './logo.svg' }]],
	title: 'JeSho Ng Docs',
	description: 'JeSho Ng Docs',
	themeConfig: {
		logo: '/logo.svg',
		outlineTitle: '文章目录',
		outline: [2, 6],
		nav: [
			{ text: '主页', link: '/' },
			{
				text: '前端',
				items: [
					{ text: 'HTML', link: '/front-end/html/index.md' },
					{ text: 'CSS', link: '/front-end/css/index.md' },
					{ text: 'JavaScript', link: '/front-end/javascript/index.md' },
				],
			},
			{
				text: '后端',
				items: [
					{ text: 'Node', link: '/back-end/node/index.md' },
					{ text: 'MySQL', link: '/back-end/mysql/index.md' },
				],
			},
			{
				text: '框架',
				items: [
					{ text: 'Vue', link: '/frameworks/vue/index.md' },
					{ text: 'React', link: '/frameworks/react/index.md' },
					{ text: 'Express', link: '/frameworks/express/index.md' },
					{ text: 'Koa', link: '/frameworks/koa/index.md' },
				],
			},
			{
				text: '杂项',
				items: [
					{ text: '工具', link: '/sundries/tools/index.md' },
					{ text: '其他', link: '/sundries/other/index.md' },
				],
			},
		],
		sidebar: {
			'/front-end/html': set_sidebar('/front-end/html'),
			'/front-end/css': set_sidebar('/front-end/css'),
			'/front-end/javascript': set_sidebar('/front-end/javascript'),
			'/frameworks/vue': set_sidebar('frameworks/vue'),
			'/frameworks/react': set_sidebar('/frameworks/react'),
			'/frameworks/express': set_sidebar('/frameworks/express'),
			'/frameworks/koa': set_sidebar('/frameworks/koa'),
			'/back-end/node': set_sidebar('/back-end/node'),
			'/back-end/mysql': set_sidebar('/back-end/mysql'),
			'/sundries': {
				collapsed: true,
				items: [
					{ text: '工具', items: set_sidebar('/sundries/tools') },
					{ text: '其他', items: set_sidebar('/sundries/other') },
				],
			},
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/zhishouH' }],
		footer: {
			copyright: '©2024 Hello Jesho Ng!',
		},
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭',
						},
					},
				},
			},
		},
	},
})

