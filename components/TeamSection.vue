<template>
  <section id="teamSection" class="mx-auto w-full max-w-[1120px] max-lg:px-4">
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
        v-for="doctor in Doctors"
      >
        <div
          class="DoctorContainer relative mx-auto flex h-[183px] w-[183px] items-center justify-center rounded-full border-[5px] border-white"
        >
          <img
            :src="doctor.image"
            :alt="doctor.id"
            width="168"
            height="168"
            class="h-[168px] w-[168px] items-center justify-center rounded-full border-[4px] border-white object-cover"
          />
        </div>
        <div class="text-center">
          <h3 class="mb-1 text-lg font-bold text-Text md:text-xl">{{ $t(doctor.name) }}</h3>
          <p class="line-clamp-2 text-sm font-medium text-primary md:text-base">
            {{ $t(doctor.title) }}
          </p>
        </div>
        <Button label="احجز موعد" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Imports
import wafaa from '~/assets/image/doctors/Dr. Wafaa Abdullateef Mira-n.svg';
import ahmed from '~/assets/image/doctors/Dr. Ahmad Al-Qosi-n.svg';
import ali from '~/assets/image/doctors/Dr. Ali Al-Shammari-n.svg';
import jumana from '~/assets/image/doctors/Dr. Jumana Khairelbeili-n.svg';
import maha from '~/assets/image/doctors/Dr. Maha Al-Hamri-n.svg';
import obair from '~/assets/image/doctors/Dr. Obair Khayat-n.svg';
import jamalYahya from '~/assets/image/doctors/Mr. Jamal Yahya Hassan-n.svg';
import jameel from '~/assets/image/doctors/Mr. Jameel Al-kateb-n.svg';
import muhammadAbdul from '~/assets/image/doctors/Mr. Muhammed Abdul Ghaffar-n.svg';
import muhammadYahya from '~/assets/image/doctors/Mr. Muhammed Yahya-n.svg';
import ashuaq from '~/assets/image/doctors/Ms. Ashuaq Al-Farsani-n.svg';
import ghufran from '~/assets/image/doctors/Ms. Ghufran Baathman-n.svg';
import haifa from '~/assets/image/doctors/Ms. Haifaa Babtain-n.svg';
import khulood from '~/assets/image/doctors/Ms. Khulood Muhammad-n.svg';
import lama from '~/assets/image/doctors/Ms. Lama Ghaleb-n.svg';
import omayma from '~/assets/image/doctors/Ms. Omayma Fadel-n.svg';
import saja from '~/assets/image/doctors/Ms. Saja Al-Otaibi-n.svg';
import shluiuh from '~/assets/image/doctors/Ms. Shluioh Al-Mohammadi-n.svg';
import WD_Female_Avatar from '~/assets/image/doctors/WD_Female_Avatar_two.svg';

// Array
const Doctors = [
  {
    id: 'wafaa-mira',
    name: 'doctors.members[0].name',
    title: 'doctors.members[0].title',
    position: 'doctors.members[0].position',
    founder: 'doctors.members[0].founder',
    qualifications: 'doctors.members[0].qualifications',
    services: 'doctors.members[0].services',
    language: 'doctors.members[0].language',
    sessionType: 'doctors.members[0].sessionType',
    image: wafaa,
  },
  {
    id: 'ahmed-alqosi',
    name: 'doctors.members[1].name',
    title: 'doctors.members[1].title',
    position: 'doctors.members[1].position',
    classification: 'doctors.members[1].classification',
    memberships: 'doctors.members[1].memberships',
    specializations: 'doctors.members[1].specializations',
    language: 'doctors.members[1].language',
    sessionType: 'doctors.members[1].sessionType',
    image: ahmed,
  },
  {
    id: 'abeer-khayat',
    name: 'doctors.members[2].name',
    title: 'doctors.members[2].title',
    position: 'doctors.members[2].position',
    classification: 'doctors.members[2].classification',
    memberships: 'doctors.members[2].memberships',
    specializations: 'doctors.members[2].specializations',
    language: 'doctors.members[2].language',
    sessionType: 'doctors.members[2].sessionType',
    image: obair,
  },
  {
    id: 'maha-alhamri',
    name: 'doctors.members[3].name',
    title: 'doctors.members[3].title',
    position: 'doctors.members[3].position',
    additionalRole: 'doctors.members[3].additionalRole',
    note: 'doctors.members[3].note',
    specializations: 'doctors.members[3].specializations',
    language: 'doctors.members[3].language',
    sessionType: 'doctors.members[3].sessionType',
    image: maha,
  },
  {
    id: 'jameel-alkateb',
    name: 'doctors.members[4].name',
    title: 'doctors.members[4].title',
    position: 'doctors.members[4].position',
    classification: 'doctors.members[4].classification',
    additionalInfo: 'doctors.members[4].additionalInfo',
    specializations: 'doctors.members[4].specializations',
    language: 'doctors.members[4].language',
    sessionType: 'doctors.members[4].sessionType',
    image: jameel,
  },
  {
    id: 'jumana-kheir-albabili',
    name: 'doctors.members[5].name',
    title: 'doctors.members[5].title',
    position: 'doctors.members[5].position',
    classification: 'doctors.members[5].classification',
    additionalRole: 'doctors.members[5].additionalRole',
    specializations: 'doctors.members[5].specializations',
    language: 'doctors.members[5].language',
    sessionType: 'doctors.members[5].sessionType',
    image: jumana,
  },
  {
    id: 'ashwaq-alfarsani',
    name: 'doctors.members[6].name',
    title: 'doctors.members[6].title',
    position: 'doctors.members[6].position',
    classification: 'doctors.members[6].classification',
    additionalInfo: 'doctors.members[6].additionalInfo',
    memberships: 'doctors.members[6].memberships',
    specializations: 'doctors.members[6].specializations',
    language: 'doctors.members[6].language',
    sessionType: 'doctors.members[6].sessionType',
    image: ashuaq,
  },
  {
    id: 'ali-alshamrani',
    name: 'doctors.members[7].name',
    title: 'doctors.members[7].title',
    position: 'doctors.members[7].position',
    specializations: 'doctors.members[7].specializations',
    language: 'doctors.members[7].language',
    sessionType: 'doctors.members[7].sessionType',
    image: ali,
  },
  {
    id: 'omayma-fadl',
    name: 'doctors.members[8].name',
    title: 'doctors.members[8].title',
    position: 'doctors.members[8].position',
    classification: 'doctors.members[8].classification',
    additionalInfo: 'doctors.members[8].additionalInfo',
    currentRole: 'doctors.members[8].currentRole',
    specializations: 'doctors.members[8].specializations',
    language: 'doctors.members[8].language',
    sessionType: 'doctors.members[8].sessionType',
    image: omayma,
  },
  {
    id: 'saji-alotaibi',
    name: 'doctors.members[9].name',
    title: 'doctors.members[9].title',
    position: 'doctors.members[9].position',
    classification: 'doctors.members[9].classification',
    additionalQualification: 'doctors.members[9].additionalQualification',
    specializations: 'doctors.members[9].specializations',
    language: 'doctors.members[9].language',
    sessionType: 'doctors.members[9].sessionType',
    image: saja,
  },
  {
    id: 'jamal-atawi',
    name: 'doctors.members[10].name',
    title: 'doctors.members[10].title',
    additionalQualification: 'doctors.members[10].additionalQualification',
    memberships: 'doctors.members[10].memberships',
    specializations: 'doctors.members[10].specializations',
    language: 'doctors.members[10].language',
    sessionType: 'doctors.members[10].sessionType',
    image: jamalYahya,
  },
  {
    id: 'haifa-babteen',
    name: 'doctors.members[11].name',
    title: 'doctors.members[11].title',
    position: 'doctors.members[11].position',
    classification: 'doctors.members[11].classification',
    additionalQualification: 'doctors.members[11].additionalQualification',
    experience: 'doctors.members[11].experience',
    specializations: 'doctors.members[11].specializations',
    language: 'doctors.members[11].language',
    sessionType: 'doctors.members[11].sessionType',
    image: haifa,
  },
  {
    id: 'lama-ghaleb',
    name: 'doctors.members[12].name',
    title: 'doctors.members[12].title',
    position: 'doctors.members[12].position',
    classification: 'doctors.members[12].classification',
    specializations: 'doctors.members[12].specializations',
    cases: 'doctors.members[12].cases',
    language: 'doctors.members[12].language',
    sessionType: 'doctors.members[12].sessionType',
    image: lama,
  },
  {
    id: 'mohammed-abdelghaffar',
    name: 'doctors.members[13].name',
    title: 'doctors.members[13].title',
    position: 'doctors.members[13].position',
    classification: 'doctors.members[13].classification',
    memberships: 'doctors.members[13].memberships',
    specializations: 'doctors.members[13].specializations',
    language: 'doctors.members[13].language',
    sessionType: 'doctors.members[13].sessionType',
    image: muhammadAbdul,
  },
  {
    id: 'zainab-alhasan',
    name: 'doctors.members[14].name',
    title: 'doctors.members[14].title',
    position: 'doctors.members[14].position',
    experience: 'doctors.members[14].experience',
    specializations: 'doctors.members[14].specializations',
    language: 'doctors.members[14].language',
    sessionType: 'doctors.members[14].sessionType',
    image: WD_Female_Avatar,
  },
  {
    id: 'ghofran-baathman',
    name: 'doctors.members[15].name',
    title: 'doctors.members[15].title',
    position: 'doctors.members[15].position',
    classification: 'doctors.members[15].classification',
    additionalQualification: 'doctors.members[15].additionalQualification',
    experience: 'doctors.members[15].experience',
    specializations: 'doctors.members[15].specializations',
    language: 'doctors.members[15].language',
    sessionType: 'doctors.members[15].sessionType',
    image: ghufran,
  },
  {
    id: 'shalaweeh-almohammadi',
    name: 'doctors.members[16].name',
    title: 'doctors.members[16].title',
    classification: 'doctors.members[16].classification',
    specializations: 'doctors.members[16].specializations',
    language: 'doctors.members[16].language',
    sessionType: 'doctors.members[16].sessionType',
    image: shluiuh,
  },
  {
    id: 'haneen-almadani',
    name: 'doctors.members[17].name',
    title: 'doctors.members[17].title',
    position: 'doctors.members[17].position',
    additionalQualification: 'doctors.members[17].additionalQualification',
    experience: 'doctors.members[17].experience',
    specializations: 'doctors.members[17].specializations',
    language: 'doctors.members[17].language',
    sessionType: 'doctors.members[17].sessionType',
    image: WD_Female_Avatar,
  },
  {
    id: 'kholoud-mohammed',
    name: 'doctors.members[18].name',
    title: 'doctors.members[18].title',
    position: 'doctors.members[18].position',
    additionalQualification: 'doctors.members[18].additionalQualification',
    specializations: 'doctors.members[18].specializations',
    language: 'doctors.members[18].language',
    sessionType: 'doctors.members[18].sessionType',
    image: khulood,
  },
  {
    id: 'mohammed-yahya',
    name: 'doctors.members[19].name',
    title: 'doctors.members[19].title',
    position: 'doctors.members[19].position',
    additionalInfo: 'doctors.members[19].additionalInfo',
    specializations: 'doctors.members[19].specializations',
    language: 'doctors.members[19].language',
    sessionType: 'doctors.members[19].sessionType',
    image: muhammadYahya,
  },
];
</script>

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
