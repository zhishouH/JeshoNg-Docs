import path from 'node:path'
import fs from 'node:fs'

// 文件根目录
const DIR_PATH = path.resolve()

// 白名单，过滤不是文章的文件和文件夹
const WHITE_LIST = ['.vitepress', 'node_modules', '.idea', 'assets']

// 判断是否是文件夹
const isDirectory = path => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1, arr2) =>
	Array.from(new Set(arr1.filter(item => !new Set(arr2).has(item))))

// 数字优先排序的函数
const sortByNumber = (a, b) => {
	// 提取字符串中的数字
	const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10) // 如果没有数字，默认值为 0
	const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10)
	if (numA !== numB) {
		return numA - numB // 按数字大小排序
	}
	// 如果数字相同，按字母顺序排序
	return a.localeCompare(b)
}

// 把方法导出直接使用
function getList(params, path1, pathname) {
	// 先对 params 进行排序
	params.sort(sortByNumber)

	// 存放结果
	const res = []
	// 开始遍历 params
	for (let file in params) {
		// 拼接目录
		const dir = path.join(path1, params[file])
		// 判断是否是文件夹
		const isDir = isDirectory(dir)
		if (isDir) {
			// 如果是文件夹，读取之后作为下一次递归参数
			const files = fs.readdirSync(dir)
			res.push({
				text: params[file],
				collapsed: true,
				items: getList(files, dir, `${pathname}/${params[file]}`),
			})
		} else {
			// 获取名字
			const name = path.basename(params[file])
			// 排除非 md 文件
			const suffix = path.extname(params[file])
			if (suffix !== '.md') {
				continue
			}
			res.push({
				text: name,
				link: `${pathname}/${name}`,
			})
		}
	}
	// 对 name 做一下处理，把后缀删除
	res.map(item => {
		item.text = item.text.replace(/\.md$/, '')
	})
	return res
}

export const set_sidebar = pathname => {
	// 获取 pathname 的路径
	const dirPath = path.join(DIR_PATH, pathname)
	// 读取 pathname 下的所有文件或者文件夹
	const files = fs.readdirSync(dirPath)
	// 过滤掉白名单
	const items = intersections(files, WHITE_LIST)
	// 调用 getList 生成最终的 sidebar 配置
	return getList(items, dirPath, pathname)
}

