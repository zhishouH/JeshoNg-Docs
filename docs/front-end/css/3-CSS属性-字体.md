# CSS 属性-字体

## 1、font-size

`font-size`决定文字的大小。

**常用的设置：**

- 具体数值+单位
  - 比如`100px`
  - 也可以使用 em 单位(不推荐)：1em 代表 100%，2em 代表 200%，0.5em 代表 50%
- 百分比
  - 基于父元素的 font-size 计算，比如 50%表示等于父元素 font-size 的一半

## 2、font-family

`font-family`用于设置文字的字体名称。

- 可以设置 1 个或者多个字体名称;
- 浏览器会选择列表中第一个该计算机上有安装的字体;
- 或者是通过 @font-face 指定的可以直接下载的字体。

## 3、font-weight

`font-weight`用于设置文字的粗细（重量）。

**常见的取值:**

- 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量
- `normal`：等于 400
- `bold`：等于 700

`strong`、`b`、`h1`~`h6`等标签的 font-weight 默认就是 bold

## 4、font-style

`font-style`用于设置文字的常规、斜体显示。

- `normal`：常规显示
- `italic`(斜体)：用字体的斜体显示(通常会有专门的字体)
- `oblique`(倾斜)：文本倾斜显示(仅仅是让文字倾斜)

`em`、`i`、`cite`、`address`、`var`、`dfn`等元素的 font-style 默认就是 italic

## 5、font-variant

`font-variant`可以影响小写字母的显示形式。

**常见的值：**

- `normal`：常规显示
- `small-caps`：将小写字母替换为缩小过的大写字母

## 6、line-height

`line-height`用于设置文本的行高。

**行高的严格定义是**：两行文字基线（baseline）之间的间距。

**基线（baseline）**：与小写字母 x 最底部对齐的线。

![image-20240201170517303](/front-end/css/image-20240201170517303.png)

## 7、height 和 line-height 的区别

- `height`：元素的整体高度
- `line-height`：元素中每一行文字所占据的高度

假设 div 中只有一行文字，line-height 等同于 height，这行文字在 div 内部垂直居中。

![image-20240201170624992](/front-end/css/image-20240201170624992.png)

## 8、font

`font`是一个缩写属性。

- font 属性可以用来作为 `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` 和 `font-family` 属性的简写;
- `font-style font-variant font-weight font-size/line-height font-family`

**规则:**

- `font-style`、`font-variant`、`font-weight`可以随意调换顺序，也可以省略
- `/line-height`可以省略，如果不省略，必须跟在 font-size 后面
- `font-size`、`font-family`不可以调换顺序，不可以省略

