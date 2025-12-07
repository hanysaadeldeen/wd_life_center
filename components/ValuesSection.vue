<template>
  <section class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <HeaderTitle title="قيمنا">
      <h2 class="mt-3 text-2xl font-bold text-Text md:text-3xl">الميثاق الأخلاقي</h2>
      <p class="text-xl font-normal text-Text md:text-2xl">
        نمارس مهنتنا بأخلاق تحترم الإنسان وتحافظ على خصوصيته
      </p>
    </HeaderTitle>
    <div
      class="grid grid-cols-1 items-center justify-center gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <div
        class="flex flex-col items-center justify-center gap-4 p-4 md:gap-6 md:p-6 lg:p-10"
        v-for="value in 6"
      >
        <img
          src="~/assets/image/values/respect confidentialit.svg"
          alt="respect confidentialit"
          loading="lazy"
          width="103"
          height="100"
          class="max-md:size-20"
        />
        <h3 class="text-center text-lg font-medium text-black md:text-xl">
          نلتزم بأنظمة وقيم المملكة العربية السعودية
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
