# 初识 MySQL

​

## 一、SQL 语句和数据类型

SQL 语句的常用规范:

- 通常关键字使用大写的，比如`CREATE、TABLE、SHOW`等等:
- 一条语句结束后，需要以`;`结尾;
  - 如果遇到关键字作为表明或者字段名称，可以使用``包裹;

## 二、SQL 语句-DDL

DDL(Data Definition Language)——数据定义语言

- 可以通过 DDL 语句对数据库或者表进行:创建、删除、修改等操作

**对数据库进行操作：**

```mysql
-- 1.查看当前所有的数据库
SHOW DATABASES;

-- 2.使用某一个数据库
USE `learn-mysql`

-- 3.查看正在使用的数据库
SELECT DATABASE()

-- 4.创建一个新的数据库
CREATE DATABASE IF NOT EXISTS test_demo;

-- 5.删除某一个数据库
DROP DATABASE IF EXISTS test_demo;

-- 6.修改数据库
ALTER DATABASE test_demo CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

**对表进行操作**

```mysql
-- 查看当前数据库中有哪些表
show TABLES;

-- 查看某一张表的表结构
DESC user;

-- 创建一张新的表-基本表结构
CREATE TABLE IF NOT EXISTS `user`(
	name VARCHAR(10),
	age INT,
	height DOUBLE
);

-- 删除一张表
DROP TABLE IF EXISTS `user`;

-- 创建一张新的表-完整表结构
CREATE TABLE IF NOT EXISTS `user`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) UNIQUE NOT NULL,
	level INT DEFAULT 0,
	telPhone VARCHAR(20) UNIQUE
);

-- 修改表结构-修改名字
ALTER TABLE `user` RENAME TO `t_users`;

-- 修改表结构-添加新字段
ALTER TABLE `t_users` ADD `createTime` TIMESTAMP;

-- 修改表结构-修改字段的名称
ALTER TABLE `t_users` CHANGE createTime createAt DATETIME;

-- 修改表结构-修改字段类型
ALTER TABLE t_users MODIFY id BIGINT;
```

## 三、SQL 语句-DML

DML(Data Manipulation Language)——数据操作语言

- 可以通过 DML 语句对表进行:添加、删除、修改等操作

```mysql
-- 新建商品表
CREATE TABLE IF NOT EXISTS t_products(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20) UNIQUE NOT NULL,
	description VARCHAR(200) DEFAULT(''),
	price DOUBLE DEFAULT(0),
	publishTime DATETIME
);

-- 插入数据
INSERT INTO t_products (title, description, price, publishTime) VALUES ('iPhone', 'iPhone 15 128g 蓝色', 5208, '2023-10-31');
INSERT INTO t_products (title, description, price, publishTime) VALUES ('xiaomi', '小米14 pro  128g 白色', 4999, '2023-09-30');

-- 删除数据
-- 删除表中的所有数据
DELETE FROM t_products
-- 根据id删除数据
DELETE FROM t_products WHERE id = 1;

-- 修改数据
-- 修改表中所有数据
UPDATE t_products SET price = 5100;
-- 根据条件修改数据
UPDATE t_products SET price = 5100 WHERE id = 2;
UPDATE t_products SET price = 5100, description = '小米14 pro 256g 白色' WHERE id = 2;

-- 扩展-当修改某一条数据的时候，使用最新的时间记录
ALTER TABLE t_products ADD updateTime  TIMESTAMP DEFAULT(CURRENT_TIMESTAMP) on UPDATE CURRENT_TIMESTAMP
```

## 四、SQL 语句-DQL

DQL (Data Query Language)——数据查询语言

- 可以通过 DQL 从数据库中查询记录

```mysql
-- 查询所有数据的所有字段
SELECT * FROM t_products;

-- 查询所有的数据，指定对应的字段
SELECT id, title, price FROM t_products;

-- 查询到字段后，给字段重命名(AS关键字可以省略)
SELECT id AS phoneId, title, price FROM t_products;

-- 查询条件 (比较运算符)
SELECT id, title, price FROM t_products WHERE price <= 5100;

-- 查询条件 (逻辑运算符)
SELECT id, title, price FROM t_products WHERE price > 5000 && title = 'iPhone';
SELECT id, title, price FROM t_products WHERE price > 5000 AND title = 'iPhone';

SELECT id, title, price FROM t_products WHERE price > 5000 || title = 'iPhone';
SELECT id, title, price FROM t_products WHERE price > 5000 OR title = 'iPhone';

-- 查询区间范围
SELECT id, title, price FROM t_products WHERE price > 5000 AND price < 5500;
SELECT id, title, price FROM t_products WHERE price BETWEEN 5000 AND 5500;

-- 枚举出多个结果，其中之一
SELECT * FROM t_products WHERE title IN ('iPhone', '小米');

-- 模糊查询 %匹配任意字符，_匹配一个字符
SELECT * FROM t_products WHERE title LIKE 'i%';

SELECT * FROM t_products WHERE title LIKE '%i%';

SELECT * FROM t_products WHERE title LIKE '__h%';

-- 查询结果进行排序 ASC升序 DESC降序
SELECT *  FROM t_products WHERE price < 10000 ORDER BY price DESC

-- 分页查询
SELECT * FROM t_products LIMIT 2 OFFSET 1;
```

**聚合函数**

```mysql
-- 计算品牌为iphone手机的平均值
SELECT AVG(price) AS avgPrice FROM t_products WHERE title LIKE '%iPhone%';

-- 查询价格最高
SELECT MAX(price) AS maxPrice FROM t_products;

-- 查询价格最低
SELECT MIN(price) AS minPrice FROM t_products;

-- 查询所有手机的价格集合
SELECT SUM(price) AS sumPrice FROM t_products;

-- 查询一共有多少台手机
SELECT COUNT(*) AS totalPhone FROM t_products;

-- GROUP BY 根据品牌分组
SELECT title, ROUND(price,2) FROM t_products GROUP BY title;
```

**多表联系**

```mysql
-- 创建歌曲表
CREATE TABLE IF NOT EXISTS t_songs(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	duration INT DEFAULT(0),
	singer VARCHAR(10)
);

INSERT INTO t_songs (name, duration, singer) VALUES ('温柔', 100, '五月天');
INSERT INTO t_songs (name, duration, singer) VALUES ('离开地球表面', 120, '五月天');
INSERT INTO t_songs (name, duration, singer) VALUES ('倔强', 130, '五月天');

CREATE TABLE IF NOT EXISTS t_singer(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10),
	intro VARCHAR(200)
);

INSERT INTO t_singer (name, intro) VALUES ('五月天', '五月天的介绍');

ALTER TABLE t_songs DROP singer;
ALTER TABLE t_songs ADD singer_id INT;

-- 多表查询
SELECT * FROM t_songs, t_singer WHERE t_songs.singer_id = t_singer.id;

-- 左连接 LEFT JOIN
SELECT * FROM t_songs LEFT JOIN t_singer ON t_songs.singer_id = t_singer.id;

-- 右连接 RIGHT JOIN
SELECT * FROM t_songs RIGHT JOIN t_singer ON t_songs.singer_id = t_singer.id;

-- 内连接 [CROSS] JOIN
SELECT * FROM t_songs JOIN t_singer ON t_songs.singer_id = t_singer.id;

-- 全连接
(SELECT * FROM t_songs LEFT JOIN t_singer ON t_songs.singer_id = t_singer.id)
UNION
(SELECT * FROM t_songs RIGHT JOIN t_singer ON t_songs.singer_id = t_singer.id);
```

**多对多关系**

```mysql
CREATE TABLE IF NOT EXISTS students(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

INSERT INTO students (name, age) VALUES('hand', 18);
INSERT INTO students (name, age) VALUES('tom', 22);
INSERT INTO students (name, age) VALUES('lilei', 25);
INSERT INTO students (name, age) VALUES('lucy', 6);
INSERT INTO students (name, age) VALUES('lily', 20);
INSERT INTO students (name, age) VALUES('gmi', 18);

CREATE TABLE IF NOT EXISTS courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE NOT NULL
);

INSERT INTO courses (name, price) VALUES('英语', 100);
INSERT INTO courses (name, price) VALUES('数学', 666);
INSERT INTO courses (name, price) VALUES('语文', 888);
INSERT INTO courses (name, price) VALUES('历史', 999);
INSERT INTO courses (name, price) VALUES('政治', 1000);

CREATE TABLE IF NOT EXISTS students_select_courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 3);

INSERT INTO students_select_courses (student_id, course_id) VALUES (3, 2);
INSERT INTO students_select_courses (student_id, course_id) VALUES (3, 3);
INSERT INTO students_select_courses (student_id, course_id) VALUES (3, 4);

-- 查询多对多数据
-- 内连接
SELECT *
FROM students AS stu
JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
JOIN courses AS cs ON ssc.course_id = cs.id;

-- 左连接
SELECT *
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id;

-- 单个学生的选课情况
SELECT *
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id WHERE stu.id = 1;

SELECT *
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id WHERE stu.id = 2;

-- 没有选课的学生
SELECT *
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id
WHERE cs.id IS NULL;

-- 查看哪些课程没有被选择
SELECT *
FROM students AS stu
RIGHT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
RIGHT JOIN courses AS cs ON ssc.course_id = cs.id
WHERE stu.id IS NULL;

```

```mysql
-- 转对象
SELECT stu.id,stu.name, stu.age,
JSON_OBJECT('id', cs.id, 'name', cs.`name`, 'price', cs.price) as courses
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id
WHERE cs.id IS NOT NULL;

-- 转数组
SELECT stu.id,stu.name, stu.age,
JSON_ARRAYAGG(JSON_OBJECT('id', cs.id, 'name', cs.`name`, 'price', cs.price) ) as courses
FROM students AS stu
LEFT JOIN students_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS cs ON ssc.course_id = cs.id
WHERE cs.id IS NOT NULL
GROUP BY stu.id;
```

## 五、SQL 语句-DCL

DCL(Data Control Language)——数据控制语言;

- 对数据库、表格的权限进行相关访问控制操作，

