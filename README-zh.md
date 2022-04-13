# vite-vue3-svg-icon
中文说明 ｜
[English](https://github.com/xianyongwen/vite-vue3-svg-icon/blob/master/README.md)

## 描述
1、利用vite能够将资源引入为字符串的功能，我们能便捷地使用svg文件渲染svg图标，无需其他额外插件。  
2、使用的时候懒加载svg文件，避免一次加载所有svg文件导致首屏加载时间加长。

## 安装
yarn安装
```
yarn add @xianyongwen/vite-vue3-svg-icon
```
npm安装
```
npm install @xianyongwen/vite-vue3-svg-icon
```
## Props
### iconClass: promise
使用vite导入svg文件，路径参数必须带?raw. ex: import('./assets/svg/add-circle.svg?raw')
### clickStop: boolean  
决定click事件是否冒泡
## 使用
### main.js全局安装组件
```
import { createApp } from 'vue'
import App from './App.vue'
import svgIcon from '@xianyongwen/vite-vue3-svg-icon'

createApp(App)
  .component('svg-icon', svgIcon)
  .mount('#app')
```
### 例子:
```
<template>
  <div @click="fatherClick">
    <svgIcon
      :iconClass="import('./assets/svg/add-circle.svg?raw')"
      @click="childClick"/>
    <svgIcon
      :clickStop="true"
      :iconClass="import('./assets/svg/disconnet.svg?raw')"
      @click="childClick"/>
    <!-- use alias path -->
    <svgIcon :iconClass="import('SVG_PATH/ameFolder.svg?raw')"/>
  </div>
</template>

<script setup lang="ts">
const fatherClick = () => {
  console.log('father clicked')
}
const childClick = () => {
  console.log('child clicked')
}
</script>
```