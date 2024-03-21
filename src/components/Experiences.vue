<template>
  <section class="experience sm:px-12 px-5 sm:h-[400px] h-auto">
    <Divider label="Experiences" circleClassNames="sm:left-1/2" />
    <div class="sm:flex block dark:text-gray-light text-[#1A1A1A] h-full">
      <!-- Left Panel  -->
      <div class="sm:w-1/3 w-full">
        <!-- DESKTOP -->
        <ul class="sm:block hidden">
          <li
            v-for="(experience, index) in experiences"
            :key="experience.company"
            @click="selectedExperienceIndex = index"
            :class="[
              selectedExperienceIndex === index
                ? 'dark:!bg-purple !bg-[#1F1E1E] text-white'
                : '',
              'cursor-pointer h-14 sm:w-52 dark:hover:bg-purple/20 hover:bg-[#1F1E1E]/20 flex justify-center items-center  border-l border-l-gray-light ',
            ]"
          >
            {{ experience.company }}
          </li>
        </ul>
        <!-- MOBILE -->
        <swiper-container
          class="sm:hidden block mb-10"
          slides-per-view="3"
          space-between="10"
          loop="true"
        >
          <swiper-slide
            v-for="(experience, index) in experiences"
            :key="experience.company"
            @click="selectedExperienceIndex = index"
            :class="[
              selectedExperienceIndex === index
                ? 'dark:!bg-purple !bg-[#1F1E1E] text-white'
                : '',
              'h-10  rounded flex justify-center items-center',
            ]"
          >
            {{ experience.company }}
          </swiper-slide>
        </swiper-container>
      </div>
      <!-- Right Panel -->
      <div class="sm:w-2/3 sm:ml-10 w-full h-full">
        <div v-if="selectedExperience">
          <div class="text-xl mb-5 sm:flex sm:space-x-3 block item-center">
            <p
              class="font-medium dark:text-[#D0D0D5] text-[#1A1A1A] sm:mb-0 mb-2"
            >
              {{ selectedExperience.role }}
            </p>
            <a
              :href="selectedExperience.link"
              class="font-normal text-purple"
              target="_blank"
            >
              @{{ selectedExperience.company }}
            </a>
          </div>
          <p class="text-purple text-base">
            {{ selectedExperience.period }}, {{ selectedExperience.type }}
          </p>
          <ul class="mt-2">
            <li
              v-for="(detail, index) in selectedExperience.details"
              :key="detail"
              :class="[
                index === 0 && 'font-semibold italic',
                'text-[#565560] dark:text-gray-light my-3 leading-relaxed',
              ]"
            >
              {{ index > 0 ? '- ' + detail : detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Divider from './Divider.vue'
import { ref, watch, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'

const experiences = [
  {
    company: 'Cometh',
    link: 'https://www.cometh.io/',
    location: 'Paris, France',
    role: 'Senior Front-end Engineer',
    period: '29 January 2024 – Currently',
    type: 'Permanent',
    details: [
      'Working on global client projects and helping improve products like Connect',
      'FDJ: Working on a digital gaming project involving strategic collection and use of unique numerical assets in a competitive global environment.',
    ],
  },
  {
    company: 'Consensys',
    link: 'https://consensys.io/',
    location: 'Paris, France',
    role: 'Senior FullStack Engineer',
    period: '16 August 2021 – 26 January 2024',
    type: 'Permanent',
    details: [
      'Worked on global client projects and helped improve products like MetaMask and Linea',
      'MetaMask: Helped integrating Ledger hardware wallet; collaborated on a proof of concept for adding virtual cards; joined a team addressing GitHub issues, added settings search feature.',
      'Lineaster: Involved in maintaining the social DApp and implementing the Lens protocol.',
      'Covantis: Played a role in overhauling backend code using hexagonal architecture.',
      'CMA-CGM: Contributed to designing a port entry/exit request platform.',
    ],
  },
  {
    company: 'Few and Far',
    link: 'https://fewandfar.xyz/',
    location: 'Los Angeles, USA',
    role: 'Front-end Engineer',
    period: 'March 2022 – January 2023',
    type: 'Freelance',
    details: [
      'Contributed to the NFT marketplace creation, focusing on NFT details, rewards, and homepage.',
      'Integrated NEAR SDK functions.',
      "The platform's launch raised $8M in funding and attracted 15,000 users.",
    ],
  },
  {
    company: 'Ubiplace',
    link: 'https://www.ubiplace.com/',
    location: 'Nice, France',
    role: 'Front-end Engineer',
    period: 'Aug – Oct 2021 & Aug – Dec 2020',
    type: 'Freelance',
    details: [
      'Aided in adding a feature to SmartVigie, their flagship data solution.',
      'Implemented observation identification for action.',
    ],
  },
  {
    company: 'Accenture',
    link: 'https://www.accenture.com/us-en',
    location: 'Sophia Antipolis, France',
    role: 'Analyst',
    period: 'January 2016 – August 2021',
    type: 'Permanent',
    details: [
      'Prototyped innovative applications for cross-platform devices.',
      'Focused on helping companies adapt to change using new technologies.',
      'Blockchain subject matter expert: Assisted with CBDC, led Web3 platform implementation for Vehicles ownership, Brokers, and HealthCare, developed a blockchain platform for peer-to-peer energy sharing.',
      'JobReady: Worked on the integration of a chatbot for professional integration.',
      'Virtual reality: Contributed to the development of AR and VR headsets.',
      'Connected Insurance: Helped develop a connected-device platform for home insurance.',
      'Point of Sale: Took part in digitizing a commerce site for mobile payments.',
    ],
  },
]
const selectedExperienceIndex = ref(0)
const selectedExperience = ref(experiences[0])

onMounted(() => {
  register()
})

watch(
  () => selectedExperienceIndex.value,
  (newIndex) => {
    selectedExperience.value = experiences[newIndex]
  },
)
</script>
<style lang=""></style>
