<template>
  <main class="py-20 max-md:px-5">
    <div class="container mx-auto">
      <div class="relative flex flex-col items-center justify-center">
        <div class="relative mb-10 md:mb-20">
          <img
            src="~/assets/img/Logo.svg"
            alt="Logo"
            class="h-ful w-[400px] object-contain"
          />
        </div>
        <h1
          class="mb-8 text-center text-5xl font-bold text-white md:mb-16 md:text-8xl"
        >
          COMING SOON
        </h1>
        <div
          class="relative mx-auto flex w-full max-w-[1110px] flex-wrap justify-center gap-7 text-center md:gap-14"
        >
          <CounterCard :time="timeLeft.days" label="DAYS" />
          <CounterCard :time="timeLeft.hours" label="HOURS" />
          <CounterCard :time="timeLeft.minutes" label="MINUTES" />
          <CounterCard :time="timeLeft.seconds" label="SECONDS" />
        </div>
        <div
          class="absolute -bottom-14 right-1/2 z-30 translate-x-1/2 bg-transparent px-4 py-2 md:-bottom-24 xl:right-1/2"
        >
          <span class="text-base font-semibold text-white">Follow US</span>
        </div>
        <div
          class="absolute bottom-28 right-0 z-10 hidden overflow-hidden md:-bottom-20 xl:right-40 xl:inline-block"
        >
          <img
            src="~/assets/img/leftbox.svg"
            class="h-auto w-full object-contain"
            alt="Avater"
          />
        </div>
        <div
          class="absolute bottom-1/2 left-0 z-10 hidden overflow-hidden md:bottom-56 lg:-bottom-20 xl:left-40 xl:inline-block"
        >
          <img
            src="~/assets/img/leftbox.svg"
            class="h-auto w-full rotate-180 object-contain"
            alt="Avater"
          />
        </div>
      </div>
      <div
        class="mt-20 flex flex-wrap items-center justify-center gap-10 md:mt-40 md:gap-14"
      >
        <div
          class="overflow-hidden"
          v-for="social in socialMedia"
          :key="social.altText"
        >
          <a :href="social.link" target="_blank">
            <img
              :src="social.icon"
              :alt="social.altText"
              class="h-ful size-8 w-full object-contain"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import instagram from "~/assets/img/instagram (5).svg";
import whatsapp from "~/assets/img/whatsapp (2).svg";
import twitter from "~/assets/img/twitter.svg";
import tiktok from "~/assets/img/tiktok.svg";

const socialMedia = [
  {
    icon: instagram,
    link: "https://www.instagram.com/wdlifecenter",
    altText: "instagram",
  },

  {
    icon: whatsapp,
    link: "https://wa.me/966536565545",
    altText: "whatsapp",
  },
  {
    icon: twitter,
    link: "https://x.com/wdlifecenter",
    altText: "twitter",
  },
  {
    icon: tiktok,
    link: "https://www.tiktok.com/@wdlifecenter_",
    altText: "tiktok",
  },
];
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const targetDate = "2025-12-30T00:00:00";
const calculateTimeLeft = () => {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

// Update countdown every second
let interval = null;

onMounted(() => {
  calculateTimeLeft();
  interval = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped></style>
