<template>
  <header class="relative">
    <div
      class="fixed left-1/2 top-10 z-50 mx-auto w-full max-w-[1120px] -translate-x-1/2 max-lg:px-4"
    >
      <div
        class="boxShadow relative z-50 flex w-full items-center justify-between rounded-full bg-white p-4 max-md:px-4 md:p-6"
      >
        <a href="#hero">
          <img
            src="~/assets/image/Logo.svg"
            alt="WD LIFE CENTER lOGO"
            width="200"
            height="66"
            loading="eager"
            fetchpriority="high"
          />
        </a>
        <nav class="hidden lg:block">
          <ul class="flex items-center justify-center gap-5 md:gap-10">
            <li>
              <a href="">
                {{ $t('page.home') }}
              </a>
            </li>
            <li>
              <a href="">
                {{ $t('page.home') }}
              </a>
            </li>
            <li>
              <a href="">
                {{ $t('page.home') }}
              </a>
            </li>
            <li>
              <a href="">
                {{ $t('page.home') }}
              </a>
            </li>
            <li>
              <a href="">
                {{ $t('page.home') }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="cursor-pointer text-2xl sm:text-3xl lg:hidden">
          <LucideMenu :class="{ hidden: isSideBar }" @click="toggleSidebar" />
          <LucideX :class="{ hidden: !isSideBar }" @click="toggleSidebar" />
        </div>
        <div class="max-lg:hidden">
          <Button label="تواصل معنا" link="contact" />
        </div>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar fixed inset-x-0 -top-10 z-30 flex h-[calc(100dvh)] w-full flex-col items-start bg-Secondary px-6 transition-all sm:px-7 md:px-11 lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <div class="pt-[155px]">
            <nav class="mt-4 inline-block w-full">
              <ul class="flex flex-col gap-5">
                <li :class="['hover:text-PrimaryPL3 text-black']">
                  <a href="hero" @click="isSideBar = !isSideBar" class="w-full">
                    {{ $t('pages.home') }}
                  </a>
                </li>
                <li :class="['hover:text-PrimaryPL3 text-black']">
                  <a href="#about-us" @click="isSideBar = !isSideBar" class="w-full">
                    {{ $t('pages.aboutUs') }}
                  </a>
                </li>

                <li :class="['hover:text-PrimaryPL3 text-white']">
                  <a @click="isSideBar = !isSideBar" class="w-full" to="#blogs">
                    {{ $t('pages.blog') }}
                  </a>
                </li>

                <li :class="['hover:text-PrimaryPL3 text-white']">
                  <a to="#contact-us" @click="isSideBar = !isSideBar" class="w-full">
                    {{ $t('pages.contactUs') }}
                  </a>
                </li>
              </ul>
            </nav>
            <!-- <div class="mt-5 justify-between flex-col">
              <LanguageSwitcher isWhite />
            </div> -->
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const localPath = useLocalePath();

const { locale } = useI18n();

import { useDebounceFn } from '@vueuse/core';
const isSideBar = ref<boolean>(false);
const transitionName = computed(() => (locale.value === 'ar' ? 'sidebar-ar' : 'sidebar-en'));

// const openMenu = ref(false);
// const route = useRoute();

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
}
/* 
ul li {
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  position: relative;
  list-style: none;
  width: fit-content;
  cursor: pointer;
  transition: color 0.3s ease;
  will-change: color;
  line-height: 25px;
  padding: 8px 24px;
  text-align: center;
  border-bottom: 2px solid transparent;
}

@media (min-width: 768px) {
  ul li {
    padding: 8px 0;
  }
}

@media (max-width: 768px) {
  ul li {
    padding: 8px 0px;
  }
}

@media (min-width: 1024px) {
  ul li {
    padding: 8px 16px;
  }
}

@media (min-width: 1280px) {
  ul li {
    padding: 8px 24px;
  }
}

ul li a,
ul li {
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li:hover {
  color: white;
}

ul li.active,
.active {
  color: white;
  font-weight: 700;
} */

.sideBar {
  opacity: 0.9;
  will-change: transform;
}

.sideBar nav ul li {
  border-bottom: 2px solid transparent;
}

.sideBar nav ul li:hover,
.sideBar nav ul li.active {
  border-bottom: 2px solid #617961;
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
