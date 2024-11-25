import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto-generated-sidebars.mjs'
import markdownItCustomAttrs from 'markdown-it-custom-attrs'

export default defineConfig({
	base: '/JeShoNg-Docs/',
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: './logo.svg' }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
			},
		],
		[
			'script',
			{
				src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
			},
		],
	],
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
					{ text: 'HTML', link: '/docs/front-end/html/1-初识Html.md' },
					{ text: 'CSS', link: '/docs/front-end/css/index.md' },
					{ text: 'JavaScript', link: '/docs/front-end/javascript/index.md' },
				],
			},
			{
				text: '后端',
				items: [
					{ text: 'Node', link: '/docs/back-end/node/index.md' },
					{ text: 'MySQL', link: '/docs/back-end/mysql/index.md' },
				],
			},
			{
				text: '框架',
				items: [
					{ text: 'Vue', link: '/docs/frameworks/vue/index.md' },
					{ text: 'React', link: '/docs/frameworks/react/index.md' },
					{ text: 'Express', link: '/docs/frameworks/express/index.md' },
					{ text: 'Koa', link: '/docs/frameworks/koa/index.md' },
				],
			},
			{
				text: '杂项',
				items: [
					{ text: '工具', link: '/docs/sundries/tools/index.md' },
					{ text: '其他', link: '/docs/sundries/other/1-纯css实现无缝滚动.md' },
				],
			},
		],
		sidebar: {
			'/docs/front-end/html': set_sidebar('/docs/front-end/html'),
			'/docs/front-end/css': set_sidebar('/docs/front-end/css'),
			'/docs/front-end/javascript': set_sidebar('/docs/front-end/javascript'),
			'/docs/frameworks/vue': set_sidebar('/docs/frameworks/vue'),
			'/docs/frameworks/react': set_sidebar('/docs/frameworks/react'),
			'/docs/frameworks/express': set_sidebar('/docs/frameworks/express'),
			'/docs/frameworks/koa': set_sidebar('/docs/frameworks/koa'),
			'/docs/back-end/node': set_sidebar('/docs/back-end/node'),
			'/docs/back-end/mysql': set_sidebar('/docs/back-end/mysql'),
			'/docs/sundries': {
				collapsed: true,
				items: [
					{
						text: '工具',
						collapsed: true,
						items: set_sidebar('/docs/sundries/tools'),
					},
					{
						text: '其他',
						collapsed: true,
						items: set_sidebar('/docs/sundries/other'),
					},
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
	markdown: {
		lineNumbers: true,
		image: {
			lazyLoading: true,
		},
		config: md => {
			md.use(markdownItCustomAttrs, 'image', {
				'data-fancybox': 'gallery',
			})
		},
	},
})
