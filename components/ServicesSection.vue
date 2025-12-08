<template>
  <section id="servicesSection" class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <HeaderTitle title="خدماتنا">
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
        <ServicePsychologicalSection />
      </div>
    </div>
    <ServiceEducationalSection />
  </section>
</template>

<script setup lang="ts">
const Educational = [
  {
    id: 1,
    title: 'services.educational.cards[0].title',
    description: 'services.educational.cards[0].description',
    icon: 'AdditionalServices',
  },
  {
    id: 2,
    title: 'services.educational.cards[1].title',
    description: 'services.educational.cards[1].description',
    icon: 'MChatTest',
  },
  {
    id: 3,
    title: 'services.educational.cards[2].title',
    description: 'services.educational.cards[2].description',
    icon: 'ParentingProgram',
  },
  {
    id: 4,
    title: 'services.educational.cards[3].title',
    description: 'services.educational.cards[3].description',
    icon: 'FamilyCounseling',
  },
  {
    id: 5,
    title: 'services.educational.cards[4].title',
    description: 'services.educational.cards[4].description',
    icon: 'Psychiatry',
  },
  {
    id: 6,
    title: 'services.educational.cards[5].title',
    description: 'services.educational.cards[5].description',
    icon: 'Development',
  },
  {
    id: 7,
    title: 'services.educational.cards[6].title',
    description: 'services.educational.cards[6].description',
    icon: 'TrainingCourses',
  },
];
</script>

<style scoped></style>
