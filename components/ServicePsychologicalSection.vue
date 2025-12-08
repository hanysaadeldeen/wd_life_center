<template>
  <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
    <div
      v-for="psychological in Psychological"
      class="boxShadow flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-[4px] border-white px-4 py-8"
      :class="{ ServiceActive: SelectedService == psychological.id }"
      @click="SelectedService = psychological.id"
    >
      <div class="ImageContainer flex items-center justify-center rounded-full bg-BG p-3">
        <img
          :src="psychological.icon"
          :alt="psychological.id"
          width="40"
          height="40"
          class="max-md:h-6 max-md:w-6"
        />
      </div>
      <div>
        <h3 class="mx-auto text-center text-xl font-medium text-black md:text-lg">
          {{ $t(psychological.title) }}
        </h3>
        <!-- <h4 class="mx-auto text-center text-lg font-medium text-black md:text-lg">
                (جلسات البرامج المختصرة)
              </h4> -->
      </div>
    </div>
  </div>
  <div class="mt-14 flex w-full gap-6 rounded-3xl bg-BG p-8 max-lg:flex-col xl:p-12">
    <div class="flex w-[226px] flex-col items-start justify-center gap-4">
      <div class="flex items-center justify-center rounded-full bg-white p-3">
        <img
          :src="selectedItem?.icon"
          :alt="selectedItem?.title"
          width="40"
          height="40"
          class="max-md:h-6 max-md:w-6"
        />
      </div>
      <div>
        <h3 class="mx-auto text-xl font-medium text-black md:text-lg">
          {{ selectedItem ? $t(selectedItem.title) : '' }}
        </h3>
        <!-- <h4 class="s mx-auto text-lg font-medium text-black md:text-lg">
                (جلسات البرامج المختصرة)
              </h4> -->
      </div>
    </div>
    <p class="flex-1 text-xl font-normal text-Text">
      {{ selectedItem ? $t(selectedItem.description) : '' }}
    </p>
  </div>
</template>

<script setup lang="ts">
const SelectedService = ref('specific-plan');

import IndividualSessions from '../assets/image/service/Individual Sessions.svg';
import DualSessions from '../assets/image/service/Dual Sessions.svg';
import SpecificPlan from '../assets/image/service/Specific Plan.svg';
import SomeonetoListen from '../assets/image/service/Someone to Listen.svg';
import PostRecoverySupport from '../assets/image/service/Post-Recovery Support.svg';
import KnowYourself from '../assets/image/service/Know Yourself.svg';
import CustomPlan from '../assets/image/service/Custom Plan.svg';
import GroupSessions from '../assets/image/service/Group Sessions.svg';

const Psychological = [
  {
    id: 'specific-plan',
    title: 'services.psychological.cards[0].title',
    description: 'services.psychological.cards[0].description',
    icon: SpecificPlan,
  },
  {
    id: 'someone-to-listen',
    title: 'services.psychological.cards[1].title',
    description: 'services.psychological.cards[1].description',
    icon: SomeonetoListen,
  },
  {
    id: 'post-recovery-support',
    title: 'services.psychological.cards[2].title',
    description: 'services.psychological.cards[2].description',
    icon: PostRecoverySupport,
  },
  {
    id: 'know-yourself',
    title: 'services.psychological.cards[3].title',
    description: 'services.psychological.cards[3].description',
    icon: KnowYourself,
  },
  {
    id: 'custom-plan',
    title: 'services.psychological.cards[4].title',
    description: 'services.psychological.cards[4].description',
    icon: CustomPlan,
  },
  {
    id: 'group-sessions',
    title: 'services.psychological.cards[5].title',
    description: 'services.psychological.cards[5].description',
    icon: GroupSessions,
  },
  {
    id: 'dual-sessions',
    title: 'services.psychological.cards[6].title',
    description: 'services.psychological.cards[6].description',
    icon: DualSessions,
  },
  {
    id: 'individual-sessions',
    title: 'services.psychological.cards[7].title',
    description: 'services.psychological.cards[7].description',
    icon: IndividualSessions,
  },
];

const selectedItem = computed(() => {
  return Psychological.find(card => card.id === SelectedService.value);
});
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
