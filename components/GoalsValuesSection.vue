<template>
  <section class="mx-auto w-full max-w-[1120px] max-md:px-4">
    <HeaderTitle title="أهدافنا">
      <h2 class="mt-3 text-2xl font-bold md:text-3xl">
        ما نطمح لتحقيقه من خلال مشروعنا النفسي المتكامل
      </h2>
    </HeaderTitle>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="value in Goals"
        class="flex w-full items-center justify-center rounded-3xl bg-BG p-8 text-center text-base font-medium text-Text md:w-[calc(50%-12px)] md:text-lg lg:w-[calc(33.333%-16px)]"
      >
        {{ value }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const Goals = [
  'أن نعمل على تأهيل الكوادر في المجالين النفسي والاجتماعي من خلال تدريب نوعي ومكثف.',
  'أن ندعم البحث العلمي في المجالين النفسي والاجتماعي بدعم الباحثين.',
  'أن نسهم في التخلص من الوصمة الاجتماعية للاضطرابات النفسية والتشجيع على تقبل الإرشاد والعلاج النفسي.',
  'أن نقدم خدماتنا النفسية (الإرشاد الفردي والجماعي والزواجي والقياس النفسي) للعملاء بأعلى جودة ممكنة.',
  'أن نسعى نحو نشر الوعي النفسي والاجتماعي وجعلهما متاحين للجميع.',
];
</script>

<style scoped></style>
