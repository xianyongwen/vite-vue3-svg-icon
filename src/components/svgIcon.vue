<template>
  <svg
    :viewBox="viewBox"
    aria-hidden="true"
    v-html="svgContent"
    style="height: 1em;overflow: hidden;vertical-align: -0.15em;width: 1em;"
    @click="clickHanle"
  ></svg>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  iconClass: {
    type: [Promise],
    default: ''
  },
  clickStop: {
    default: false
  }
})

const emit = defineEmits(['click'])
const clickHanle = e => {
  props.clickStop && e.stopPropagation()
  emit('click', e)
}

const viewBox = ref('0 0 1024 1024')
const svgContent = ref('')
let svgModuleDefault: any = ''
const reflashSvg = async() => {
  try {
    let svgModule: any =  await props.iconClass
    svgModuleDefault = svgModule.default.replace(/\r/g, '')
    svgModuleDefault = svgModuleDefault.replace(/\n/g, ' ')
  } catch (error) {
    console.error('can not find svg file')
    return
  }
  if(!/.+svg.+svg.+/.test(svgModuleDefault)) {
    console.error('import file is not a svg file')
    return
  } else {
    const svgEl:any = document.createElement('div')
    svgEl.innerHTML = svgModuleDefault
    viewBox.value = svgEl.children[0].getAttribute('viewBox') || '0 0 1024 1024'
    svgContent.value = svgEl.getElementsByTagName('svg')[0].innerHTML
  }
}

onMounted(reflashSvg)
watch(() => props.iconClass, reflashSvg)
</script>
