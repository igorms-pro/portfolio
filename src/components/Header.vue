<template lang="">
  <header class="bg-transparent">
    <nav
      class="sm:p-12 flex items-center justify-center font-normal h-10 text-white text-xl dark:text-gray-light"
    >
      <div class="flex flex-1 h-9">
        <a href="#" class="-m-1.5 p-1.5">
          <span>© Igor Moreno Semedo</span>
        </a>
      </div>
      <div class="flex sm:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="text-white flex flex-auto items-center space-x-12 h-9">
        <a href="#about" class="text-sm leading-6">About</a>
        <a href="#skills" class="text-sm leading-6">Skills and Tools</a>
        <a href="#work" class="text-sm leading-6">Work</a>
        <a href="#testimonials" class="text-sm leading-6">Testimonials</a>
        <a href="#contact" class="text-sm leading-6">Contact</a>
        <SunIcon
          v-if="theme === 'dark'"
          class="h-6 w-6 cursor-pointer"
          aria-hidden="true"
        />
        <MoonIcon
          v-if="theme === 'light'"
          class="h-6 w-6 cursor-pointer"
          aria-hidden="true"
        />
        <GlobeAltIcon class="h-6 w-6 cursor-pointer" aria-hidden="true" />
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open
  state. -->
    <div></div>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/vue/20/solid'

const theme = ref('')

watchEffect(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = prefersDark ? 'dark' : 'light'
})
</script>

<style lang=""></style>
