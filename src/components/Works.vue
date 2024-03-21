<template>
  <section id="works" class="works sm:px-12 px-5 mt-14">
    <Divider label="Works" circleClassNames="right-1/4" />
    <div class="h-auto border-t dark:border-t-[#E8E7EA] border-t-[#1A1A1A]">
      <div
        v-for="(work, index) in works"
        :key="`work.id_${index}`"
        class="dark:!text-white !text-[#1A1A1A]"
      >
        <p class="sm:text-6xl font-semibold text-4xl">
          {{ work.title }}
        </p>
        <p class="font-medium">{{ work.type }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import Divider from './Divider.vue'

const works = [
  {
    id: 'fostr',
    title: 'Fostr',
    type: 'App mobile',
    role: 'lead Front-end Developer',
    year: '2017',
    description: 'Fostr is',
    links: [
      'https://www.facebook.com/FostrApp',
      'https://www.youtube.com/watch?v=wWxGyAQzY4c',
    ],
    toughts: 'It was a great experience',
    images: {
      thumbnail: '',
      head: '',
    },
  },
]
</script>
<style lang=""></style>
