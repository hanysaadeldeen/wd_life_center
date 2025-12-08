<template>
  <header class="relative">
    <div
      class="fixed left-1/2 top-10 z-50 mx-auto w-full max-w-[1120px] -translate-x-1/2 max-lg:px-4"
    >
      <div
        class="boxShadow relative z-50 flex w-full items-center justify-between rounded-full bg-white py-2 max-md:px-6 md:p-4 lg:p-6"
      >
        <a @click.prevent="scrollTo('heroSection')">
          <img
            src="~/assets/image/Logo.svg"
            alt="WD LIFE CENTER lOGO"
            width="200"
            height="66"
            loading="eager"
            fetchpriority="high"
            class="max-md:h-[50px] max-md:w-fit"
          />
        </a>
        <nav class="hidden lg:block">
          <ul class="flex items-center justify-center gap-5 text-xl font-medium md:gap-10">
            <li>
              <a @click.prevent="scrollTo('aboutUs')">
                {{ $t('navigation.links.about') }}
              </a>
            </li>
            <li>
              <a @click.prevent="scrollTo('servicesSection')">
                {{ $t('navigation.links.services') }}
              </a>
            </li>
            <li>
              <a @click.prevent="scrollTo('teamSection')">
                {{ $t('navigation.links.team') }}
              </a>
            </li>
            <li>
              <a @click.prevent="scrollTo('ethicalSection')">
                {{ $t('navigation.links.ethical') }}
              </a>
            </li>
            <li>
              <a @click.prevent="scrollTo('contactSection')">
                {{ $t('navigation.links.find') }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="cursor-pointer text-2xl sm:text-3xl lg:hidden">
          <LucideMenu :class="{ hidden: isSideBar }" @click="toggleSidebar" />
          <LucideX :class="{ hidden: !isSideBar }" @click="toggleSidebar" />
        </div>
        <div class="max-lg:hidden">
          <a @click.prevent="scrollTo('contactSection')">
            <Button label="تواصل معنا" />
          </a>
        </div>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar fixed inset-x-0 -top-10 z-30 flex h-[calc(100dvh)] w-full flex-col items-start px-6 transition-all sm:px-7 md:px-11 lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <div class="pt-[155px]">
            <nav class="my-4 inline-block w-full">
              <ul class="flex flex-col gap-5 text-xl font-medium">
                <li :class="['text-Text hover:text-primary']">
                  <a
                    @click.prevent="scrollTo('aboutUs')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t('navigation.links.about') }}
                  </a>
                </li>
                <li :class="['text-Text hover:text-primary']">
                  <a
                    @click.prevent="scrollTo('servicesSection')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t('navigation.links.services') }}
                  </a>
                </li>

                <li :class="['text-Text hover:text-primary']">
                  <a
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                    @click.prevent="scrollTo('teamSection')"
                  >
                    {{ $t('navigation.links.team') }}
                  </a>
                </li>

                <li :class="['text-Text hover:text-primary']">
                  <a
                    @click.prevent="scrollTo('ethicalSection')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t('navigation.links.ethical') }}
                  </a>
                </li>
                <li :class="['text-Text hover:text-primary']">
                  <a
                    @click.prevent="scrollTo('contactSection')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t('navigation.links.find') }}
                  </a>
                </li>
              </ul>
            </nav>
            <div class="">
              <a @click.prevent="scrollTo('contactSection')" @click="isSideBar = !isSideBar">
                <Button label="تواصل معنا" link="contact" />
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const localPath = useLocalePath();
const { locale } = useI18n();
const { scrollTo } = useScrollTo();

import { useDebounceFn } from '@vueuse/core';
const isSideBar = ref<boolean>(false);
const transitionName = computed(() => (locale.value === 'ar' ? 'sidebar-ar' : 'sidebar-en'));

// Optimize sidebar toggle function
const toggleSidebar = () => {
  isSideBar.value = !isSideBar.value;
  console.log(isSideBar.value);
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
  document.body.style.overflow = value ? 'hidden' : '';
}, 100);

watch(isSideBar, newValue => {
  debouncedScrollLock(newValue);
});
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

.sideBar {
  will-change: transform;
  background-color: rgb(221 222 204 / 0.9);
}

nav ul li {
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

nav ul li:hover,
nav ul li.active {
  color: #a38b71;
}

.active {
  border-bottom: 2px solid #617961;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.sidebar-en-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-en-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-ar-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.sidebar-ar-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
