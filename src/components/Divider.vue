<template>
  <div class="relative flex flex-col justify-center items-center w-full h-52">
    <div
      class="absolute top-1/2 left-0 w-full border-t dark:border-[#82808F]/50 border-gray-divide transform -translate-y-1/2"
    ></div>
    <div :class="`absolute flex justify-start ${circleClassNames}`">
      <div
        class="dark:bg-purple bg-dark rounded-full sm:w-32 sm:h-32 h-[85px] w-[85px] flex items-center justify-center text-white sm:text-lg text-sm font-medium shadow-md"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
  circleClassNames: String,
})
const { label, circleClassNames } = props
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
