<template>
  <section id="works" class="works sm:px-12 px-5 mt-14 mb-5">
    <Divider label="Works" circleClassNames="right-1/4" />
    <div class="h-auto">
      <div
        v-for="(work, index) in works"
        :key="`work.id_${index}`"
        :class="[
          index < works.length - 1 &&
            'border-b dark:border-b-[#565560] border-b-[#1A1A1A]',
          'dark:!text-white !text-[#1A1A1A] mx-auto sm:text-left text-center mb-5',
        ]"
      >
        <div class="flex flex-col gap-3 space-y-1">
          <a
            :href="work.links[0]"
            target="_blank"
            class="text-6xl font-semibold hover:opacity-60"
          >
            {{ work.title }}
          </a>
          <p class="font-medium pb-5">{{ work.type }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Divider from './Divider.vue'

const works = [
  {
    id: 'q4us',
    title: 'Q4Us',
    type: 'App mobile',
    role: 'lead Front-end Developer',
    year: '2023-current',
    description: 'Fostr is',
    links: [
      'https://linktr.ee/Q4UsApp',
      'https://www.youtube.com/watch?v=wWxGyAQzY4c',
    ],
    toughts: 'It was a great experience',
    images: {
      thumbnail: '',
      head: '',
    },
  },
  {
    id: 'fostr',
    title: 'Fostr',
    type: 'App mobile',
    role: 'lead Front-end Developer',
    year: '2017',
    description: 'Fostr is',
    links: [
      'https://www.youtube.com/watch?v=wWxGyAQzY4c',
      'https://www.facebook.com/FostrApp',
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
