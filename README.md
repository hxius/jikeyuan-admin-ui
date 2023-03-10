## 博客管理后台系统
## 技术栈
 - 包管理 pnpm
 - 脚手架 create-react-app
 - 路由 react-router-dom history
 - react hooks
 - 状态管理 mobx
 - UI组件库 antd
 - 接口请求 axios
 - 富文本 react-quill
 - css sass/scss
 - 代码格式规范 ESlint + Prettier
 - 代码提交规范 Commitizen + GitHooks
   - Git提交规范: commitizen + cz-customizable
   - husky + commitlint
## 功能列表
 - 登录、退出
 - 首页
 - 内容管理
   - 文章列表
   - 发布文章
   - 修改文章

## 项目运行
```shell
$ git clone xxxx
```

```shell
$ pnpm install
$ pnpm run start
$ pnpm run build
```

## reportWebVitals文件解析

| 这个webVital是Google提出的、检测用户体验的标准，这些指标包含三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB）。具体含义如下（参考链接）：
LCP (Largest Contentful Paint)：最大内容渲染时间。指的是从用户请求网址到窗口中渲染最大可见内容所需要的事件（最大可见内容通常是图片或者视频，或者大块的文本）。

FID (First Input Delay):首次输入延迟。指的是从用户首次与网页互动（点击链接、按钮等）到浏览器响应此次互动直接的时间。用于判断网页进入互动状态的时间。

CLS (Cumulative Layout Shift) :累计布局偏移，得分范围0-1，指的是网页布局在加载期间的偏移量，0表示没有偏移，1表示最大偏移，这个指标指示用户与网站的交互体验，如果网址在加载过程布局一直跳动，用户体验会很差。比如加载一张图片，但没有大小空白占位，导致图片显示时页面高度跳动。

FCP(First Contentful Paint)首次内容绘制。标记浏览器渲染来自 DOM 第一位内容的时间点，内容可能是文本、图像等元素。
TTFB (Time to First Byte) 首字节到达的时间点。

## 问题记录

```Shell
 $ pnpm add react-router-dom
 // 异常
  Peer dependencies that should be installed:
    @babel/core@">=7.11.0 <8.0.0"
    @babel/plugin-transform-react-jsx@^7.14.9
    typescript@">=3.2.1 <4.0.0 || >=4.0.0 <5.0.0"
    @babel/plugin-syntax-flow@^7.14.5
    @testing-library/dom@>=7.21.4
```



