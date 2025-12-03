<template>
  <section class="mx-auto w-full max-w-[1120px] max-md:px-4">
    <HeaderTitle title="أهدافنا">
      <div class="mt-3 text-2xl font-bold md:text-3xl">
        <span>يتخصص</span>
        <span class="mx-2 inline-block align-middle">
          <img
            src="~/assets/image/utils/wdLifeHeader.svg"
            alt="wdLifeHeader"
            width="128"
            height="32"
          />
        </span>
        <span> في تقديم الخدمات النفسية والاجتماعية المتنوعة للمجتمع </span>
      </div>
    </HeaderTitle>

    <div>
      <h2 class="text-center text-xl font-bold text-Text md:text-2xl">
        الخدمات والاستشارات النفسية
      </h2>
      <div class="mt-8 md:mt-12">
        <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="value in 8"
            class="boxShadow flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-[4px] border-white p-8"
            :class="{ ServiceActive: SelectedService == 'two' }"
            @click="SelectedService = 'two'"
          >
            <div class="ImageContainer flex items-center justify-center rounded-full bg-BG p-3">
              <img
                src="~/assets/image/service/Dual Sessions.svg"
                alt="Dual Sessions"
                width="40"
                height="40"
                class="max-md:h-6 max-md:w-6"
              />
            </div>
            <h3 class="mx-auto max-w-[200px] text-base font-medium text-black md:text-lg">
              الجلسات الثنائية
            </h3>
          </div>
        </div>
        <div class="flex w-full p-8 xl:p-12">
          <div class="flex max-w-[226px] items-start">
            <div class="flex items-center justify-center rounded-full bg-BG p-3">
              <img
                src="~/assets/image/service/Dual Sessions.svg"
                alt="Dual Sessions"
                width="40"
                height="40"
                class="max-md:h-6 max-md:w-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script setup lang="ts">
const SelectedService = ref('CustomPlan');
</script>

<style scoped>
.ServiceActive {
  border-color: #a38b71;
  background-color: #f3f0ea;
}
.ServiceActive .ImageContainer {
  background-color: white;
}
</style>
