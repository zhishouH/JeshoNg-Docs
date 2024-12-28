# HTML 高级元素

## 1、列表元素

- 有序列表：`ol`、`li`
- 无序列表：`ul`、`li`
- 定义列表：`dl`、`dt`、`dd`

### 1-1、有序列表 ol

```html
<ol>
	<li>li-1</li>
	<li>li-2</li>
	<li>li-3</li>
</ol>
```

### 1-2、无序列表 ul

```html
<ul>
	<li>li-1</li>
	<li>li-2</li>
	<li>li-3</li>
</ul>
```

### 1-3、定义列表 dl

```html
<dl>
	<dt>标题一：</dt>
	<dd>dd-1</dd>
	<dd>dd-2</dd>
	<dd>dd-3</dd>
	<dt>标题二：</dt>
	<dd>dd-1</dd>
	<dd>dd-2</dd>
	<dd>dd-3</dd>
</dl>
```

## 2、表格元素

- `table`：表格
- `tr(table row)`：表格中的行
- `td(table data)`：行中的单元格
- `thead`： 表格的表头
- `tbody`： 表格的主体
- `tfoot`：表格的页脚
- `caption`：表格的标题
- `th`： 表格的表头单元格
- `border-collapse` CSS 属性是用来决定表格的边框是分开的还是合并的；
- `table { border-collapse: collapse; }` 合并单元格的边框

```html
<style>
	table {
		border-collapse: collapse;
	}

	caption {
		margin-bottom: 10px;
	}

	table.head {
		font-weight: 700;
	}

	th,
	td {
		text-align: center;
		border: 1px solid #999;
		padding: 8px 16px;
	}
</style>
<table>
	<caption>
		股票排行
	</caption>
	<thead>
		<tr class="head">
			<th>排名</th>
			<th>名称</th>
			<th>代码</th>
			<th>价格</th>
			<th>涨跌</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>xxx</td>
			<td>123</td>
			<td>12.34</td>
			<td>0.05%</td>
		</tr>
		<tr>
			<td>2</td>
			<td>xxx</td>
			<td>456</td>
			<td>56.78</td>
			<td>0.06%</td>
		</tr>
		<tr>
			<td>3</td>
			<td>xxx</td>
			<td>789</td>
			<td>90.12</td>
			<td>0.07%</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>foot-item</td>
			<td>foot-item</td>
			<td>foot-item</td>
			<td>foot-item</td>
			<td>foot-item</td>
		</tr>
	</tfoot>
</table>
```

![image-20240201153033436](/front-end/html/image-20240201153033436.png)

### 2-1、单元格合并

- 跨列合并: 使用`colspan`
  - 在最左边的单元格写上 colspan 属性, 并且省略掉合并的 td;

```html
<table>
	<tr>
		<td colspan="2">1-1</td>
	</tr>
	<tr>
		<td>2-1</td>
		<td>2-2</td>
	</tr>
</table>
```

![image-20240201153125923](/front-end/html/image-20240201153125923.png)

- 跨行合并: 使用`rowspan`
  - 在最上面的单元格写上 rowspan 属性, 并且省略掉后面 tr 中的 td；

```html
<table>
	<tr>
		<td rowspan="2">1-1</td>
		<td>1-2</td>
	</tr>
	<tr>
		<td>2-1</td>
	</tr>
</table>
```

![image-20240201153204887](/front-end/html/image-20240201153204887.png)

## 3、表单

常见的表单元素：

- `form`
  - 表单, 一般情况下，其他表单相关元素都是它的后代元素
- `input`
  - 单行文本输入框、单选框、复选框、按钮等元素
- `textarea`
  - 多行文本框
- `select`、`option`
  - 下拉选择框
- `button`
  - 按钮
- `label`
  - 表单元素的标题

### 3-1、input 元素的使用

**常见的属性:**

- `readonly`：只读
- `disabled`：禁用
- `checked`：默认被选中
  - 只有当 type 为`radio`或`checkbox`时可用
- `autofocus`：当页面加载时，自动聚焦
- `name`：名字
  - 在提交数据给服务器时，可用于区分数据类型
- `value`：取值
- `type`：input 的类型
  - `text`：文本输入框（明文输入）
  - `password`：文本输入框（密文输入）
  - `radio`：单选框
  - `checkbox`：复选框
  - `button`：按钮
  - `reset`：重置
  - `submit`：提交表单数据给服务器
  - `file`：文件上传

### 3-2、布尔属性

常见的布尔属性有`disabled`、`checked`、`readonly`、`multiple`、`autofocus`、`selected`

布尔属性可以没有属性值，写上属性名就代表使用这个属性

- 如果要给布尔属性设值，值就是属性名本身

```html
<input
	type="text"
	disabled
	autofocus
	readonly
/>

<input
	type="text"
	disabled="disabled"
	autofocus="autofocus"
	readonly="readonly"
/>
```

### 3-3、表单按钮

- 普通按钮（`type=button`）：使用 value 属性设置按钮文字
- 重置按钮（`type=reset`）：重置它所属 form 的所有表单元素（包括 input、textarea、select）
- 提交按钮（`type=submit`）：提交它所属 form 的表单数据给服务器（包括 input、textarea、select）

**input 实现:**

```html
<input
	type="button"
	value="普通按钮"
/>
<input
	type="reset"
	value="重置按钮"
/>
<input
	type="submit"
	value="提交按钮"
/>
```

**button 实现:**

```html
<button type="button">普通按钮</button>
<button type="reset">重置按钮</button>
<button type="submit">提交按钮</button>
```

![image-20240201153930142](/front-end/html/image-20240201153930142.png)

### 3-4、input 和 label 的关系

`label`元素一般跟 input 配合使用，用来表示 input 的标题

label 可以跟某个 input 绑定，点击 label 就可以激活对应的 input 变成选中

```html
<div>
	<label for="username">用户：</label>
	<input
		type="text"
		name="username"
		id="username"
	/>
</div>
```

![image-20240201154113667](/front-end/html/image-20240201154113667.png)

### 3-5、radio 的使用

type 类型设置为`radio`变成单选框:

- name 值相同的 radio 才具备单选功能

```html
<div>
	<label for="male"
		>男：
		<input
			type="radio"
			name="sex"
			id="male"
		/>
	</label>
	<label for="female"
		>女：
		<input
			type="radio"
			name="sex"
			id="female"
		/>
	</label>
</div>
```

![image-20240201154232445](/front-end/html/image-20240201154232445.png)

### 3-6、checkbox 的使用

type 类型设置为 checkbox 变成多选框:

- 属于同一种类型的 checkbox，name 值要保持一致

```html
<div>
	<label for="basketball">
		篮球：
		<input
			type="checkbox"
			name="hobby"
			id="basketball"
		/>
	</label>
	<label for="football">
		足球：
		<input
			type="checkbox"
			name="hobby"
			id="football"
		/>
	</label>
	<label for="run">
		跑步：
		<input
			type="checkbox"
			name="hobby"
			id="run"
		/>
	</label>
</div>
```

![image-20240201154256135](/front-end/html/image-20240201154256135.png)

### 3-7、textarea 的使用

**textarea 的常用属性:**

- `cols`：列数
- `rows`：行数

**缩放的 CSS 设置**

- 禁止缩放：`resize: none;`
- 水平缩放：`resize: horizontal;`
- 垂直缩放：`resize: vertical;`
- 水平垂直缩放：`resize: both;`

### 3-8、select 和 option 的使用

`option`是 select 的子元素，一个 option 代表一个选项

**select 常用属性：**

- `multiple`：可以多选
- `size`：显示多少项

**option 常用属性：**

- `selected`：默认被选中

```html
<select
	multiple
	size="2"
>
	<option
		value="1"
		selected
	>
		1
	</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="3">5</option>
	<option value="4">6</option>
</select>
```

![image-20240201154550486](/front-end/html/image-20240201154550486.png)

### 3-9、form 常见的属性

**form 通常作为表单元素的父元素:**

- form 可以将整个表单作为一个整体来进行操作;
- 比如对整个表单进行重置;
- 比如对整个表单的数据进行提交;

**form 常见的属性:**

- `action`
  - 用于提交表单数据的请求 URL
- `method`
  - 请求方法（get 和 post），默认是 get
- `target`
  - 在什么地方打开 URL

```html
<form
	action="/"
	method="get"
	target="_self"
>
	<input
		type="text"
		name="username"
	/>
	<input
		type="submit"
		value="提交"
	/>
</form>
```

### 3-10、请求方式的对比

![image-20240201154652554](/front-end/html/image-20240201154652554.png)

