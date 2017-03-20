# 注释规范

    两周前：  这段代码上帝，我和少数几个我的同事看得懂；
    一周前：  这段代码只有上帝和我看得懂；
    现  在：  这段代码只有上帝看得懂了...

    你写的注释是给代码读者看的: 下一个需要理解你的代码的人可能就是你自己!


## 公共注释

1. 文件注释
    - `@file`用于标记本文件的文件名；
    - `@author`用于标记本文件的作者
    - `@create`用于标记本文件的创建日期
    - `@update`用于标记本文件更新的日期
    - `@description`用于撰写所有关于本文件的描述，包括但不限于本文件的功能，修改日志，注意事项等

2. 事件注释
    - `DEPRECATED` 弃用代码标记

    > ```
    > DEPRECATED by 张三 
    > 原因： XXX   
    > ```

    - `TODO:` 将要进行的编写活动

    > ```
    > TODO: 编写一个XX功能的模块
    > ```

## JavaScript

1. 注释有两种

    > ```javascript
    > /*
    >  *多行注释
    >  */
    > 
    > //单行注释
    > ```

[查看范例](examples/index.js)

## CSS

1. 有且仅有一种注释方式

    > ```
    > /* CSS注释 */
    > ```

[查看范例](examples/index.css)
## HTML


[查看范例](examples/index.html)

## PHP

> 我不是很懂PHP，希望有同事能够写个范例并给我个Pullrequest

---

#### 所谓技多不压身，我来简单说一下Git怎么用

首先要下载一个git的客户端

[下载地址](https://git-scm.com/)

下载好之后直接安装，没什么好说的直接下一步。

安装好之后，打开`git bash`或者`cmd`
```bash
git --version
```
查看版本，检查是否装好

紧接着，你可以创建`一个空的文件夹`，然后进入，右键点击`Git Bash Here`，在弹出的命令行里做一下设置
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

设置好之后，你就可以从git库里clone东西了
```bash
git clone https://github.com/xiaofuyesnew/comments-guide.git
```

然后本仓库的代码就下载到你的本地了

<稍后会推出教你使用远程仓库的教程>
