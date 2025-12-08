<template>
  <div class="serviceTwo Educational">
    <h2 class="text-center text-xl font-bold text-Text md:text-2xl">
      الخدمات التعليمية والتدريبية
    </h2>
    <div class="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="educational in Educational"
        class="flex cursor-pointer flex-col items-start justify-start gap-4 rounded-3xl bg-BG p-8"
      >
        <div
          class="ImageContainer mb-2 flex items-center justify-center rounded-full bg-white p-3 lg:mb-4"
        >
          <img
            :src="educational.icon"
            :alt="educational.id"
            width="40"
            height="40"
            class="max-md:h-6 max-md:w-6"
          />
        </div>
        <div>
          <h3 class="text-xl font-medium text-black md:text-2xl">
            {{ $t(educational.title) }}
          </h3>
          <p class="text-base font-normal text-Paragraph md:text-lg">
            {{ $t(educational.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HealthRequirements from '../assets/image/service/educational/health-requirements.svg';
import PsychologistsCounseling from '../assets/image/service/educational/PsychologistsCounseling.svg';
import TrainingSystem from '../assets/image/service/educational/TrainingSystem.svg';
import ScientificCommunity from '../assets/image/service/educational/ScientificCommunity.svg';
import ClinicalSupervision from '../assets/image/service/educational/ClinicalSupervision.svg';
import ProgramsScales from '../assets/image/service/educational/ProgramsScales.svg';
import TrainingCourses from '../assets/image/service/educational/TrainingCourses.svg';

const Educational = [
  {
    id: 'health-requirements',
    title: 'services.educational.cards[0].title',
    description: 'services.educational.cards[0].description',
    icon: HealthRequirements,
  },
  {
    id: 'psychologists-counseling',
    title: 'services.educational.cards[1].title',
    description: 'services.educational.cards[1].description',
    icon: PsychologistsCounseling,
  },
  {
    id: 'training-system',
    title: 'services.educational.cards[2].title',
    description: 'services.educational.cards[2].description',
    icon: TrainingSystem,
  },
  {
    id: 'scientific-community',
    title: 'services.educational.cards[3].title',
    description: 'services.educational.cards[3].description',
    icon: ScientificCommunity,
  },
  {
    id: 'clinical-supervision',
    title: 'services.educational.cards[4].title',
    description: 'services.educational.cards[4].description',
    icon: ClinicalSupervision,
  },
  {
    id: 'programs-scales',
    title: 'services.educational.cards[5].title',
    description: 'services.educational.cards[5].description',
    icon: ProgramsScales,
  },
  {
    id: 'training-courses',
    title: 'services.educational.cards[6].title',
    description: 'services.educational.cards[6].description',
    icon: TrainingCourses,
  },
];
</script>

<style scoped>
.serviceTwo {
  margin-top: 160px;
}

@media (max-width: 768px) {
  .serviceTwo {
    margin-top: 80px;
  }
}
</style>
