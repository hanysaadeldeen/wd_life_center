<template>
  <section id="contactSection" class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <div class="flex justify-between gap-10 rounded-[40px] bg-BG p-6 md:p-10 lg:p-16">
      <div class="w-full md:max-w-[439px]">
        <div class="mb-4 md:mb-6">
          <h2 class="text-2xl font-bold text-[#735C44] md:text-3xl">احجز موعدك</h2>
          <p class="text-base font-normal text-[#3A3A3A] md:text-lg">
            نحن نؤمن بأهمية تقديم أفضل رعاية ممكنة لجميع العملاء.
          </p>
        </div>
        <Form />
      </div>
      <div class="max-md:hidden md:max-w-[500]">
        <img
          src="~/assets/image/utils/ContactFrom.webp"
          alt="ContactFrom"
          class="h-full rounded-3xl object-cover brightness-75"
          loading="lazy"
          width="500"
          height="672"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
