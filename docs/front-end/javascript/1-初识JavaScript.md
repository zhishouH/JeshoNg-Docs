# 初识 JavaScript

## 一、认识编程语言

### 计算机语言

用于人与计算机通讯的语言，是人与计算机之间传递信息的介质，但是其概念比通用的编程语言要更广泛，比如`HTML`是标记语言，也是计算机语言，但不是编程语言。

### 编程语言

用于定义计算机程序的形式语言，是一种被标准化的交流技巧，用来向计算机发出指令，能准确地定义计算机所需要使用数据的计算机语言，并精确的定义在不同情况下所应当采取的行动。

### 编程语言的特点

1. 具有数据和数据结构，如`{}`、`[]`
2. 具有指令及流程控制，如`if`、 `switch`、`while`、 `for`
3. 具有引用机制和重用机制
4. 具有设计哲学，比如`JavaScript`的设计哲学是灵活性、动态性

## 二、编程语言发展历史

### 阶段一：机器语言

计算机的存储单元只有`0`和`1`两种状态。由 0 和 1 按照一定规律组成的代码叫机器码，也叫二进制码，一定长度的机器码组成了机器指令，用这些机器指令所编写的程序称为机器语言。

**优点：**

- 代码能被计算机直接识别，不需要经过编译解析
- 直接对硬件产生作用，程序的执行效率非常高

**缺点：**

- 程序全是 0 和 1，可读性差
- 不易编写

### 阶段二：汇编语言

用符号代替冗长的 0 和 1 的代码，比如`mov`、`push`等指令，经过汇编器，将汇编代码进一步转成二进制码`0101`。

**优点:**

- 像机器语言一样可以直接访问和控制计算机的各种硬件设备
- 占用内存少，执行速度快

**缺点：**

- 不同的机器有不同的汇编语言和编译器，代码缺乏可移植性
- 符号非常多，不易编写

### 阶段三：高级语言

高级语言接近于自然语言，更符合人类的思维。

**优点：**

- 简单、易用、易于理解
- 远离对硬件的操作
- 具有可移植性

**缺点：**

- 不能直接被计算机识别，需要编译器翻译成二进制指令

## 三、JavaScript 的历史

JavaScript 是一种高级的、解释型的编程语言，是一门基于原型、头等函数的语言。是一门多范式的语言，支持面向对象程序设计、指令式编程、函数式编程。

### JavaScript 的起源（一）

1994 年网景公司（Netscape）发布了 Navigator 浏览器 0.9 版，这是历史上第一个比较成熟的网络浏览器，但是只能用来浏览，并不具备交互能力，此时的网景公司急需一种网页脚本语言，使得浏览器可以与网页互动。

### JavaScript 的起源（二）

在 1995 年招入了程序员 Brendan Eich，希望将 Scheme 语言作为网页的脚本语言。

与此同时，Sun 公司将 Oak 语言改名为 Java 并正式推向市场。网景公司决定与 Sun 公司结成联盟，将 Java 嵌入到网页中。

### JavaScript 的起源（三）

Brendan Eich 对此并不感兴趣，他用了 10 天的时间设计出了 JavaScript，起初这门语言的名字是`Mocha(摩卡)`，在 Navigator 2.0 beta 版本更名为`LiveScript`，在 Navigator 2.0 beta3 版本正式重命名为`JavaScript`，当时是为了蹭`Java`的热度。

JavaScript 在当时更像是一个多语言的大杂烩，借鉴了`C`语言的基本语法，借鉴了`Java`语言的数据类型和内存管理，借鉴了`Scheme`语言将函数提升到第一等公民的地位，借鉴了`Self`语言使用基于原型的继承机制。

### JavaScript 的起源（四）

微软公司在 1995 年首次推出了 IE 浏览器，引发了与 Netscape 的浏览器大战，微软对 Netscape Navigator 解释器进行了逆向工程，创建了`JScript`，以与处于市场领导地位的网景产品同台竞争，但是对于开发者是一场噩耗，需要针对不同的浏览器进行适配。

1996 年 11 月网景公司正式向 ECMA(欧洲计算机制造商协会)提交语言标准。

1997 年 6 月，ECMA 以 JavaScript 语言为基础制定了 ECMAScript 标准规范 ECMA-262。

JavaScript 成为了 ECMAScript 最著名的实现之一。

## 四、JavaScript 的组成

EMCAScript 是 JavaScript 的标准，描述了该语言的语法和基本对象。

JavaScript 是 ECMAScript 语言层面的实现。

除语言规范之外，JavaScript 需要对页面和浏览器进行各种操作，包括 DOM 操作和 BOM 操作。

## 五、JavaScript 运行引擎

**高级编程语言都需要转成最终的机器指令执行**

JavaScript 无论在浏览器还是在 Node 执行，都需要被 CPU 执行。但 CPU 只认识自己的指令集(就是机器语言才能被 CPU 所执行）。所以需要 JavaScript 引擎将 JavaScript 代码翻译成 CPU 指令来执行。

**常见的 JavaScript 引擎：**

- **SpiderMonkey**：第一款 JavaScript 引擎，由 Brendan Eich 开发
- **Chakra**：微软开发，用于 IE 浏览器
- **JavaScriptCore**：Webkit 中的 JavaScript 引擎，Apple 公司开发
- **V8**：Google 开发的强大 JavaScript 引擎

**浏览器内核和 js 引擎的关系：** 以 **Webkit** 为例：

- **WebCore**：负责`HTML` 解析、布局、渲染
- J**avaScriptCore**：解析、执行`JavaScript`代码

## 六、Atwood 定律

Any application that can be written in JavaScript,will eventually be written in JavaScript.

任何可以使用 JavaScript 来实现的应用都最终会使用 JavaScript 实现。

