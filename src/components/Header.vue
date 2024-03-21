<template lang="">
  <header class="dark:bg-[#191B1F] bg-[#999D9E]">
    <nav
      class="sm:p-10 p-5 font-normal flex h-10 items-center text-white text-xl dark:text-gray-light"
    >
      <div class="flex flex-1 h-full sm:h-auto">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="">© IMS</span>
        </a>
      </div>
      <span @click="mobileMenuOpen = true" class="lg:hidden h-full"> Menu</span>
      <div
        class="hidden sm:flex flex-auto text-white items-center space-x-12 h-9"
      >
        <a href="#about" class="text-sm leading-6">About</a>
        <a href="#skills" class="text-sm leading-6">Skills and Tools</a>
        <a href="#experiences" class="text-sm leading-6">Experiences</a>
        <a href="#works" class="text-sm leading-6">Works</a>
        <a href="#contact" class="text-sm leading-6">Contact</a>
        <SunIcon
          v-if="theme === 'dark'"
          class="h-6 w-6 cursor-pointer"
          aria-hidden="true"
          @click="toggleTheme"
        />
        <MoonIcon
          v-if="theme === 'light'"
          class="h-6 w-6 cursor-pointer"
          aria-hidden="true"
          @click="toggleTheme"
        />
        <GlobeAltIcon class="h-6 w-6 cursor-pointer" aria-hidden="true" />
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open  state. -->
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-dark px-6 py-6 dark:text-gray-light text-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span>© IMS</span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y dark:divide-gray-divide/70">
            <div class="space-y-2 py-6">
              <a
                href="#about"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >About</a
              >
              <a
                href="#skills"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >Skills and Tools</a
              >
              <a
                href="#work"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >Work</a
              >
              <a
                href="#testimonials"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >Testimonials</a
              >
              <a
                href="#contact"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >Contact</a
              >
            </div>
            <div class="py-6">
              <span
                class="block rounded-lg py-1 text-base font-light leading-7"
              >
                Socials
              </span>
              <!-- Add Picto? -->
              <div class="flex justify-start space-x-3 items-center mb-5">
                <a href=""> Instagram </a>
                <a href=""> Linkedin </a>
                <a href=""> Facebook </a>
                <a href=""> Twitter </a>
              </div>
              <div class="flex justify-start space-x-3 items-center">
                <SunIcon
                  v-if="theme === 'dark'"
                  class="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                  @click="toggleTheme"
                />
                <MoonIcon
                  v-if="theme === 'light'"
                  class="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                  @click="toggleTheme"
                />
                <GlobeAltIcon
                  class="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, watchEffect, watch } from 'vue'
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
const mobileMenuOpen = ref(false)

const toggleTheme = () => {
  console.log('ALLLO')
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedTheme = localStorage.getItem('theme')

  // Use stored theme if available, else use system preference
  theme.value = storedTheme ? storedTheme : prefersDark ? 'dark' : 'light'

  // Apply the theme
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

// Watch for changes in theme and update localStorage and document
watch(
  () => theme.value,
  (newTheme) => {
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  },
)
</script>

<style lang=""></style>
