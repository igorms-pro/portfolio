<template>
  <div class="sm:px-12 px-5">
    <swiper-container
      slides-per-view="auto"
      loop="true"
      css-mode="true"
      class="h-10 dark:text-white"
    >
      <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { register } from 'swiper/element/bundle'
// import 'swiper/swiper-bundle.min.css'

onMounted(() => {
  register()
})
</script>

<style scoped></style>
