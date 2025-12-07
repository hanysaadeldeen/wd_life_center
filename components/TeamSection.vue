<template>
  <section class="mx-auto w-full max-w-[1300px] max-lg:px-4">
    <HeaderTitle title="فريقنا">
      <h2 class="mt-3 text-2xl font-bold text-Text md:text-3xl">
        ما نطمح لتحقيقه من خلال مشروعنا النفسي المتكامل
      </h2>
      <p class="text-xl font-normal text-Text md:text-2xl">فريقنا من أفضل المتخصصين في مجالاتهم.</p>
    </HeaderTitle>

    <div
      class="grid grid-cols-1 items-center justify-center gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="boxShadow mx-auto flex w-full max-w-[320px] flex-col items-center justify-center gap-4 rounded-3xl px-8 py-14"
        v-for="value in 3"
      >
        <div
          class="DoctorContainer relative mx-auto flex h-[183px] w-[183px] items-center justify-center rounded-full border-[5px] border-white"
        >
          <img
            src="~/assets/image/doctors/Dr. Ahmad Al-Qosi-n.jpg"
            alt="Dr. Ahmad Al-Qosi-n"
            width="168"
            height="168"
            class="h-[168px] w-[168px] items-center justify-center rounded-full border-[4px] border-white object-cover"
          />
        </div>
        <div class="text-center">
          <h3 class="mb-1 text-lg font-bold text-Text md:text-xl">د. أميمة فضل</h3>
          <p class="text-sm font-medium text-primary md:text-base">أخصائي أول علم نفس العيادي</p>
        </div>
        <Button label="احجز موعد" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.DoctorContainer {
  background: linear-gradient(
    to right,
    rgba(163, 139, 113, 1) 0%,
    rgba(221, 191, 165, 1) 50%,
    rgba(163, 139, 113, 1) 100%
  );
}
</style>
