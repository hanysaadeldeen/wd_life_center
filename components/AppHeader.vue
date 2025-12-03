<template>
  <header
    class="boxShadow fixed left-1/2 top-10 z-50 mx-auto w-full max-w-[1120px] -translate-x-1/2 rounded-full bg-white max-md:px-4"
  >
    <div class="flex w-full items-center justify-between p-4 md:p-6">
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
        class="sideBar fixed inset-x-0 top-0 z-30 flex h-[calc(100dvh)] w-full flex-col items-start px-6 transition-all sm:px-7 md:px-11 lg:hidden"
        :class="[
          {
            'right-0': locale === 'ar',
            'left-0': locale !== 'ar',
          },
        ]"
      >
        <div class="pt-[83px] lg:pt-[100px]">
          <nav class="mt-4 inline-block w-full">
            <ul class="flex flex-col gap-5">
              <li
                :class="[adjustedPath === '/' ? 'active' : '', 'hover:text-PrimaryPL3 text-black']"
              >
                <a href="hero" @click="isSideBar = !isSideBar" class="w-full">
                  {{ $t('pages.home') }}
                </a>
              </li>
              <li
                :class="[
                  adjustedPath === '/about-us' ? 'active' : '',
                  'hover:text-PrimaryPL3 text-black',
                ]"
              >
                <a :to="localePath('about-us')" @click="isSideBar = !isSideBar" class="w-full">
                  {{ $t('pages.aboutUs') }}
                </a>
              </li>

              <li
                :class="[
                  adjustedPath === '/blogs' ? 'active' : '',
                  'hover:text-PrimaryPL3 text-white',
                ]"
              >
                <a @click="isSideBar = !isSideBar" class="w-full" :to="localePath('blogs')">
                  {{ $t('pages.blog') }}
                </a>
              </li>

              <li
                :class="[
                  adjustedPath === '/contact-us' ? 'active' : '',
                  'hover:text-PrimaryPL3 text-white',
                ]"
              >
                <a :to="localePath('contact-us')" @click="isSideBar = !isSideBar" class="w-full">
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
  </header>
</template>

<script setup lang="ts">
const localPath = useLocalePath();

const { locale } = useI18n();

import { useDebounceFn } from '@vueuse/core';
const isSideBar = ref<boolean>(false);
const transitionName = computed(() => (locale.value === 'ar' ? 'sidebar-ar' : 'sidebar-en'));

const openMenu = ref(false);
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
  isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
  document.body.style.overflow = value ? 'hidden' : '';
}, 100);

watch(isSideBar, newValue => {
  debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
  if (isSideBar.value) {
    isSideBar.value = false;
  }
}, 100);

onMounted(() => {
  window.addEventListener('scroll', debouncedScrollHandler);
});

const getPathWithoutLocale = (path: string) => {
  const segments = path.split('/');
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join('/')}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));

const isOpen = ref(false);
const answerHeight = ref(0);
const answer = ref<HTMLDivElement | null>(null);
const toggle = async () => {
  isOpen.value = !isOpen.value;

  await nextTick();
  if (answer.value) {
    answerHeight.value = answer.value.scrollHeight;
  }
};
</script>

<style scoped></style>
