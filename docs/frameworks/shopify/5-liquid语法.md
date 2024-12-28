## 1、定义变量

```jsx
{% assign myVariable = 'Hello World' %}
{{ myVariable }}
```

**{% %}与{%- -%}的区别**

- {% %}渲染后会有上一行空格
- {%- -%}渲染后没有上一行空格

## 2、注释

```jsx
{% comment %}
This is comment
{% endcomment %}
```

也可以使用`html`的注释`<!-- This is comment -->`

区别在于使用 liquid 的注释最终不会渲染到代码中，而使用了`html`的注释最早会渲染到代码中

## 3、变量的数据类型

### 3.1、String 类型

```jsx
{% assign myString = 'hand' %}
{{ myString }}
```

### 3.2、Number 类型

```jsx
{% assign myNumber = 123 %}
{% assign myFloatPoint = 123.456 %}
{{ myNumber }},{{ myFloatPoint }}
```

### 3.3、boolean 类型

```jsx
{% assign myBoolean = true %}
{{ myBoolean }}
```

#### 3.4、nil 和 null 类型

```jsx
{% assign myNil = null %}
{{ myNil }}

{% if myNil == null %}
  <p>myNil is equal to nil</p>
{% endif %}
```

### 3.5、array 类型

```jsx
{% for tag in product.tags %}
	<div>{{ tag }}</div>
{% endfor %}
```

### 3.6、object 类型

```jsx
<p>{{ product.title }}</p>
```

### 4、模板字符串

```jsx
{% capture myHtml %}
  <div>
   hello {{product.title}}
 </div>
{% endcapture %}
{{ myHtml }}
```

### 5、条件语句

#### 5.1、if 语句

```jsx
{% assign myNum = 10 %}

{% if myNum > 10 %}
  <p>myConditionNumber > 10</p>
{% endif %}

{% if myNum < 10 %}
  <p>myConditionNumber < 10</p>
{% endif %}

{% if myNum == 10 %}
	<p>myConditionNumber < 10</p>
{% endif %}

{% if myNum != 10 %}
  <p>myConditionNumber != 10</p>
{% endif %}

{% if myNum >= 10 %}
  <p>myConditionNumber >= 10</p>
{% endif %}

{% if myNum <= 10 %}
  <p>myConditionNumber <= 10</p>
{% endif %}
```

#### 5.2、if else 语句

```jsx
{% assign myNum = 12 %}

{% if myNum > 10 %}
  <p>myConditionNumber > 10</p>
{% else %}
  <p>myConditionNumber <= 10</p>
{% endif %}

// 输出：myConditionNumber > 10
```

#### 5.3、if elsif 语句

```jsx
{% assign myNum = 12 %}
{% if myNum > 10 %}
  <p>myConditionNumber > 10</p>
{% elsif myNum > 5 %}
  <p>myConditionNumber > 5</p>
{% endif %}

// 输出：myConditionNumber > 10
```

#### 5.4、if elsif else 语句

```jsx
{% assign myNum = 12 %}
{% if myNum > 10 %}
  <p>myConditionNumber > 10</p>
{% elsif myNum > 5 %}
  <p>myConditionNumber > 5</p>
{% else %}
  <p>myConditionNumber <= 5</p>
{% endif %}

// 输出：myConditionNumber > 10
```

#### 5.5、unless 语句

```jsx
{% assign myString = 'hello' %}

{% unless myString contains 'e' %}
  <p>myString not contains e</p>
{% else %}
  <p>myString contains e</p>
{% endunless %}

// 输出：myString contains e
```

#### 5.6、case 语句

```jsx
{% assign myString = 'hello' %}

{% if myString != blank %}
  {% case myString %}
    {% when 'hello' %}
      <p>hello</p>
    {% when 'world' %}
      <p>world</p>
    {% else %}
      <p>!</p>
  {% endcase %}
{% endif %}

// 输出：hello
```

#### 5.7、or 条件

```jsx
{% assign myNumber = 10 %}
{% assign myString = 'hello' %}

{% if myNumber >= 10 or myString contains 'he' %}
  <p>myNumber >= 10 or myString contains he</p>
{% endif %}

// 从右往左执行
// 满足其中一个条件，输出：myNumber >= 10 or myString contains he
```

#### 5.8、and 语句

```jsx
{% assign myNumber = 10 %}
{% assign myString = 'hello' %}

{% if myNumber >= 10 and myString contains 'he' %}
  <p>myNumber >= 10 and myString contains he</p>
{% endif %}

// 从右往左执行
// 满足所有条件，输出：myNumber >= 10 and myString contains he
```

### 6、循环语句

```jsx
{% for product in collection.products limit: 5 offset: 0 %}
  <p
    style="
      {% if forloop.first %}
        color: green;
      {%  elsif  forloop.last %}
        color: orange;
      {% endif %}
      text-align: center;
    "
  >
    {{ forloop.index }}、{{ product.title }}
  </p>
  <ul
    style="
      width: fit-content;
      list-style-type: decimal;
      margin: 0 auto;
    "
  >
    {% for tag in product.tags %}
      <li>
        {{ tag }}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
```

### 7、分页

循环最多限制 50 条，超过需用分页

```jsx
{% paginate collection.products by 1 %}
  {% for product in collection.products %}
    <p>{{ product.title }}</p>
  {% endfor %}

  {{ paginate | default_pagination }}
{% endpaginate %}
```

### 8、过滤器

#### 8.1、+-\*/

```jsx
{% assign number = 10 %}

{% assign plusNumber = number | plus: 5 %}
{% assign minusNumber = number | minus: 5 %}
{% assign timesNumber = number | times: 5 %}
{% assign dividedByNumber = number | divided_by: 5 %}

<p>
  {{ plusNumber }}  -- 10
</p>
<p>
  {{ minusNumber }} -- 5
</p>
<p>
  {{ timesNumber }} -- 50
</p>
<p>
  {{ dividedByNumber }} -- 2
</p>
```

#### 8.2、数学运算过滤器

```jsx
{% assign number = '11' %}

// 字符串转数字类型
{% assign plusNumber = number | plus: 0 %}
{% if plusNumber > 5 %}
  <p>plusNumber 大于5</p>
{% endif %}

// 模数
{% assign moduloOfPlusNumber = plusNumber | modulo: 2 %}
{% if moduloOfPlusNumber == 0 %}
  <p>偶数</p>
{% else %}
  <p>奇数</p>
{% endif %}

// 绝对值
{% assign absNumber = -11 | abs %}
{{ absNumber }}

 // 四舍五入
{% assign roundNumber = 10.4 | round %}
{{ roundNumber }}
```

#### 8.3、字符串运算

```jsx
{% assign string = '  hellO world        ' %}

// 大写
<p>{{ string | upcase }}</p>

// 小写
<p>{{ string | downcase }}</p>

// 追加
<p>{{ string | append: '!' }}</p>

// strip删除前后空格
<p>{{ string | strip | append: '!' }}</p>

// strip_html 输出纯文本
{% assign htmlText = '<p style="color: red">hello</p>' %}
<p>{{ htmlText }}</p>
<p>{{ htmlText | strip_html | upcase }}</p>

// truncate 超过20个字符省略
// truncatewords 超过4个单词省略
{% assign longString = 'hello world and hello liquid, so let us thanks shopify team!' %}
<p>{{ longString | truncate: 20, '!' }}</p>
<p>{{ longString | truncatewords: 4 }}</p>

// newline_to_br开启换行
{% assign multilineText = '
  this is first line
  this is second line
  this is third line
' %}
{{ multilineText | newline_to_br }}

// 替换内容
<p>
  {{ string | replace: 'world', 'hand' }}
</p>

// 分割内容
<p>
  {{ string | split: ' ' }}
</p>

```

#### 8.4、对象中使用

```jsx
{% assign products = collection.products %}
{% assign productTitls = products | map: 'title' %}

{{ productTitls | join: '___' }}

<p>{{ productTitls.first }}</p>
<p>{{ productTitls.last }}</p>
<p>{{ productTitls.size }}</p>

{% for product in products %}
  <p>
    {{ product.title }} -
   	{{ product.price | money | }} --
   	{{- product.compare_at_price | money }}
  </p>
{% endfor %}
```

#### 8.5、其他

```jsx
<style>
  .highlight {
    color: red;
    background: teal;
  }
</style>
{{ shop.name }}

<p>{{ 'hello world!' | highlight: 'hello' }}</p>
<p>Copyright {{ 'now' | date: '%Y-%m-%d' }}</p>
```

