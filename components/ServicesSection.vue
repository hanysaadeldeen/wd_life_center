<template>
  <section class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <HeaderTitle title="أهدافنا">
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
        <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="value in 8"
            class="boxShadow flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-[4px] border-white px-4 py-8"
            :class="{ ServiceActive: SelectedService == 'two' }"
            @click="SelectedService = 'two'"
          >
            <div class="ImageContainer flex items-center justify-center rounded-full bg-BG p-3">
              <img
                src="~/assets/image/service/Dual Sessions.svg"
                alt="Dual Sessions"
                width="40"
                height="40"
                class="max-md:h-6 max-md:w-6"
              />
            </div>
            <div>
              <h3 class="mx-auto text-center text-xl font-medium text-black md:text-lg">
                الجلسات الثنائية
              </h3>
              <h4 class="mx-auto text-center text-lg font-medium text-black md:text-lg">
                (جلسات البرامج المختصرة)
              </h4>
            </div>
          </div>
        </div>
        <div class="mt-14 flex w-full gap-6 rounded-3xl bg-BG p-8 xl:p-12">
          <div class="flex w-[226px] flex-col items-start justify-center gap-4">
            <div class="flex items-center justify-center rounded-full bg-white p-3">
              <img
                src="~/assets/image/service/Dual Sessions.svg"
                alt="Dual Sessions"
                width="40"
                height="40"
                class="max-md:h-6 max-md:w-6"
              />
            </div>
            <div>
              <h3 class="mx-auto text-xl font-medium text-black md:text-lg">أريد خطة محددة</h3>
              <h4 class="s mx-auto text-lg font-medium text-black md:text-lg">
                (جلسات البرامج المختصرة)
              </h4>
            </div>
          </div>
          <p class="flex-1 text-xl font-normal text-Text">
            برنامج – إرشادي علاجي أو تنموي – معد مسبقا ومختصر في حدود من 4 إلى 8 جلسات بحد أقصى.
            هدفها العمل على مشكلة محددة (هدف عام واحد)، مثل الغضب، الأرق، الاكتئاب، تعزيز التواصل،
            التسويف، تنمية دافع التعلم، قلق الاختبار وغيرها، دون التطرق لأي مشكلات فرعية أخرى، يرحب
            Life بالعملاء الذين يفضلون هذا النوع من البرامج المختصرة، ويتم اخطار العميل في حال كان
            يتفق هذا النوع من البرامج مع حالته أم لا.
          </p>
        </div>
      </div>
    </div>
    <div class="serviceTwo">
      <h2 class="text-center text-xl font-bold text-Text md:text-2xl">
        الخدمات التعليمية والتدريبية
      </h2>
      <div class="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="value in 3"
          class="flex cursor-pointer flex-col items-start justify-center gap-4 rounded-3xl bg-BG p-8"
        >
          <div
            class="ImageContainer mb-2 flex items-center justify-center rounded-full bg-white p-3 lg:mb-4"
          >
            <img
              src="~/assets/image/service/Dual Sessions.svg"
              alt="Dual Sessions"
              width="40"
              height="40"
              class="max-md:h-6 max-md:w-6"
            />
          </div>
          <div>
            <h3 class="text-xl font-medium text-black md:text-2xl">
              الدورات التدريبية (نظام التدريب الممتاز)
            </h3>
            <p class="text-Paragraph text-base font-normal md:text-lg">
              دورات مكثفة عملية تطبيقية للمتخصصين لا يزيد العدد فيها عن 20 متدرباً لضمان كفاءة
              التدريب، يحصل المتدرب في نهاية الفترة التدريبية على شهادة اجتياز.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const SelectedService = ref('CustomPlan');
</script>

<style scoped>
.ServiceActive {
  border-color: #a38b71;
  background-color: #f3f0ea;
}
.ServiceActive .ImageContainer {
  background-color: white;
}

.serviceTwo {
  margin-top: 160px;
}

@media (max-width: 768px) {
  .serviceTwo {
    margin-top: 80px;
  }
}
</style>
