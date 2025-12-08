<template>
  <section class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <div
      class="flex items-center justify-between rounded-[40px] bg-black px-8 py-6 max-md:flex-col md:px-12 lg:px-16"
    >
      <div class="flex w-full max-w-[575px] flex-col">
        <h2 class="mb-4 text-2xl font-bold text-BG md:mb-6 lg:text-[28px] lg:leading-[48px]">
          هل ترغب في مساعدة الآخرين والمشاركة في مبادرتنا لحياة نفسية أكثر صحة؟
        </h2>
        <p class="mb-6 max-w-[474px] text-lg font-normal text-BG md:mb-10">
          كن جزءًا من فريقنا المتخصص في الصحة النفسية وساهم بخبرتك في إحداث تأثير إيجابي.
        </p>
        <div class="relative z-10">
          <button class="gradient-button w-fit">انضم للفريق</button>
        </div>
      </div>
      <div>
        <img
          src="~/assets/image/utils/heartCta.svg"
          alt="heart Logo"
          loading="lazy"
          width="345"
          height="358"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradient-button {
  font-size: 20px;
  font-weight: 500;
  color: white;
  background: linear-gradient(
    to right,
    rgba(163, 139, 113, 1) 0%,
    rgba(221, 191, 165, 1) 50%,
    rgba(163, 139, 113, 1) 100%
  );
  padding: 8px 24px;
  border-radius: 50px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
}
.gradient-button::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50px;
  background: linear-gradient(
    to right,
    rgba(163, 139, 113, 1) 0%,
    rgba(221, 191, 165, 1) 50%,
    rgba(163, 139, 113, 1) 100%
  );
  z-index: -1;
}
</style>
