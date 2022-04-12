<template>
  <div @click="fatherClick">
    <svgIcon
      :iconClass="import('@/assets/svg/add-circle.svg?raw')"
      @click="childClick"/>
    <svgIcon
      :clickStop="true"
      :iconClass="import('@/assets/svg/disconnet.svg?raw')"
      @click="childClick"/>
    <svgIcon
      :iconClass="import('@/assets/svg/ameFolder.svg?raw')"/>
  </div>
</template>

<script setup lang="ts">
import svgIcon from '@/components/svgIcon.vue'

const fatherClick = () => {
  console.log('father clicked')
}
const childClick = () => {
  console.log('child clicked')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
