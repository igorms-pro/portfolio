<template>
  <section class="experience sm:px-12 px-5 sm:h-[350px]">
    <Divider label="Experiences" circleClassNames="left-1/2" />
    <div class="flex dark:text-gray-light text-[#565560] h-full">
      <!-- Left Panel -->
      <div class="w-1/3">
        <ul>
          <li
            v-for="(experience, index) in experiences"
            :key="experience.company"
            @click="selectedExperienceIndex = index"
            :class="[
              selectedExperienceIndex === index ? '!bg-purple text-white' : '',
              'cursor-pointer h-14 sm:w-52 hover:bg-purple/20 flex justify-center items-center  border-l border-l-gray-light',
            ]"
          >
            {{ experience.company }}
          </li>
        </ul>
      </div>
      <!-- Right Panel -->
      <div class="w-2/3 ml-10 h-full">
        <div v-if="selectedExperience">
          <h2 class="text-xl font-bold">
            {{ selectedExperience.title }} @ {{ selectedExperience.company }}
          </h2>
          <p class="text-gray-700">{{ selectedExperience.period }}</p>
          <ul>
            <li v-for="detail in selectedExperience.details" :key="detail">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Divider from './Divider.vue'
import { ref, watch } from 'vue'

const experiences = [
  {
    company: 'Consensys',
    location: 'New York, USA',
    role: 'FullStack Engineer',
    period: '16 August 2021 – Currently',
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

watch(
  () => selectedExperienceIndex.value,
  (newIndex) => {
    selectedExperience.value = experiences[newIndex]
  },
)
</script>
<style lang=""></style>
