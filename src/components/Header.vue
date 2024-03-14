<template lang="">
  <header class="bg-transparent">
    <nav
      class="sm:p-10 p-5 font-normal flex h-10 items-center text-white text-xl dark:text-gray-light"
    >
      <div class="flex flex-1 h-full sm:h-auto">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="">© Igor Moreno Semedo</span>
        </a>
      </div>
      <span @click="mobileMenuOpen = true" class="lg:hidden h-full"> Menu</span>
      <div
        class="hidden sm:flex flex-auto text-white items-center space-x-12 h-9"
      >
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
    <!-- Mobile menu, show/hide based on menu open  state. -->
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span>© Igor Moreno Semedo</span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
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
