# vite-vue3-svg-icon
[中文说明](https://github.com/xianyongwen/vite-vue3-svg-icon/blob/master/README-zh.md) | English

## Description
1. Using vite's features of importing resources as strings, we can easily rander svg icon with svg files without any additional plug-ins.
2. Lazy load the svg file when using it to avoid loading all the svg files at one time, which will prolong the loading time of the first screen.

## install
yarn
```
yarn add @xianyongwen/vite-vue3-svg-icon
```
npm
```
npm install @xianyongwen/vite-vue3-svg-icon
```
## Props
### iconClass: promise
The import svg file result of vite，this iport params must with ?raw. ex: import('./assets/svg/add-circle.svg?raw')
### clickStop: boolean  
Determines whether the click event bubbles
## Usage
### Global install component in main.js
```
import { createApp } from 'vue'
import App from './App.vue'
import svgIcon from '@xianyongwen/vite-vue3-svg-icon'

createApp(App)
  .component('svg-icon', svgIcon)
  .mount('#app')
```
### example:
```
<template>
  <div @click="fatherClick">
    <svg-icon
      :iconClass="import('./assets/svg/add-circle.svg?raw')"
      @click="childClick"/>
    <svg-icon
      :clickStop="true"
      :iconClass="import('./assets/svg/disconnet.svg?raw')"
      @click="childClick"/>
    <!-- use alias path -->
    <svg-icon
      :iconClass="import('SVG_PATH/ameFolder.svg?raw')"/>
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