<template>
  <section id="ethicalSection" class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <HeaderTitle title="قيمنا">
      <h2 class="mt-3 text-2xl font-bold text-Text md:text-3xl">الميثاق الأخلاقي</h2>
      <p class="text-xl font-normal text-Text md:text-2xl">
        نمارس مهنتنا بأخلاق تحترم الإنسان وتحافظ على خصوصيته
      </p>
    </HeaderTitle>
    <div
      class="grid grid-cols-1 items-center justify-center md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <div
        class="flex flex-col items-center justify-center gap-4 p-4 md:gap-6 md:p-6 lg:p-10"
        v-for="ethicalPrinciple in EthicalPrinciples"
      >
        <img
          :src="ethicalPrinciple.icon"
          :alt="ethicalPrinciple.id"
          loading="lazy"
          width="103"
          height="100"
          class="max-lg:size-20 max-md:size-14"
        />
        <h3 class="text-center text-lg font-medium text-black md:text-xl">
          {{ $t(ethicalPrinciple.title) }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PrivacyIcon from '../assets/image/values/respect confidentialit.svg';
import SaudiFlag from '../assets/image/values/adhere to laws.svg';
import ClientRights from '../assets/image/values/account.svg';
import ScientificBasis from '../assets/image/values/programs.svg';
import QualityService from '../assets/image/values/customer.svg';
import BehavioralContract from '../assets/image/values/carried out.svg';

const EthicalPrinciples = [
  {
    id: 'privacy-confidentiality',
    title: 'ethicalCharter.principles[0].title',
    icon: PrivacyIcon,
  },
  {
    id: 'saudi-values',
    title: 'ethicalCharter.principles[1].title',
    icon: SaudiFlag,
  },
  {
    id: 'client-rights',
    title: 'ethicalCharter.principles[2].title',
    icon: ClientRights,
  },
  {
    id: 'scientific-programs',
    title: 'ethicalCharter.principles[3].title',
    icon: ScientificBasis,
  },
  {
    id: 'quality-services',
    title: 'ethicalCharter.principles[4].title',
    icon: QualityService,
  },
  {
    id: 'behavioral-contract',
    title: 'ethicalCharter.principles[5].title',
    icon: BehavioralContract,
  },
];
</script>

<style scoped></style>
