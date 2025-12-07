<template>
  <footer class="bg-black py-5">
    <div class="l max-lg:px- mx-auto w-full max-w-[1120px] py-20">
      <div class="grid grid-cols-1 gap-8 px-6 text-white sm:grid-cols-2 md:grid-cols-6">
        <div class="col-span-2 max-w-[482px] md:col-span-3">
          <img
            src="~/assets/image/LogoFooter.svg"
            alt="logo"
            loading="lazy"
            width="300"
            height="113"
          />
          <div class="mb-2 text-lg font-medium text-BG md:text-xl">
            <h3>لتلقي رسائلنا ومستجداتنا،</h3>
            <h3>ما عليك سوى تزويدنا ببريدك الإلكتروني.</h3>
          </div>
          <Form
            :validation-schema="schema"
            @submit="onSubmit"
            v-slot="{ errors }"
            class="mt-3 flex max-w-[482px] items-start gap-3"
          >
            <div class="mb-6 flex w-full max-w-[315px] flex-col">
              <Field
                id="email"
                name="email"
                type="email"
                :placeholder="
                  locale === 'en' ? 'e.g. name@domain.com' : 'أدخل عنوان بريدك الإلكتروني'
                "
                class="inputBack focus:ring-Primary h-[48px] w-full border px-2.5 py-2 focus:outline-none focus:ring-2 md:px-4 md:py-3"
              />
              <span class="text-sm text-red-500">{{ errors.email }}</span>
            </div>
            <div class="relative z-20 min-w-[150px]">
              <Button label="اشترك الآن" />
            </div>
          </Form>
        </div>

        <div class="col-span-1 md:col-span-1">
          <h3 class="mb-5 text-lg font-semibold text-BG md:text-xl">استكشف</h3>
          <ul class="text-bg flex flex-col gap-4 text-lg font-normal md:text-xl">
            <li>
              <a href="#"> من نحن </a>
            </li>
            <li>
              <a href="#"> خدماتنا </a>
            </li>
            <li>
              <a href="#"> انضم إلينا </a>
            </li>
            <li>
              <a href="#"> فريقنا </a>
            </li>
            <li>
              <a href="#"> ميثاقنا الأخلاقي </a>
            </li>
            <li>
              <a href="#"> احجز موعد </a>
            </li>
          </ul>
        </div>

        <div class="col-span-1 md:col-span-2">
          <h3 class="mb-5 text-lg font-semibold text-BG md:text-xl">تواصل معنا</h3>
          <address class="not-italic">
            <ul class="flex flex-col gap-4 text-lg font-normal md:text-xl">
              <li class="flex items-center gap-3">
                <img src="~/assets/image/utils/mail.svg" alt="mail" width="24" height="24" />
                <a href="mailto:info@wdlife.com.sa" class="hover:underline"> info@wdlife.com.sa </a>
              </li>

              <li class="flex items-center gap-3">
                <img
                  src="~/assets/image/utils/phone-call.svg"
                  alt="phone-call"
                  width="24"
                  height="24"
                />
                <a href="tel:+966126700001" dir="ltr" class="hover:underline"> +966 126700001 </a>
              </li>

              <li class="flex items-center gap-3">
                <img
                  src="~/assets/image/utils/device-mobile.svg"
                  alt="device-mobile"
                  width="24"
                  height="24"
                />
                <a href="tel:053-65-65-545" dir="ltr" class="hover:underline"> 053-65-65-545 </a>
              </li>

              <li class="flex items-start gap-3">
                <img src="~/assets/image/utils/map-pin.svg" alt="map-pin" width="24" height="24" />
                <span> دور الثالث، برج بن حمران، شارع التحلية، جدة </span>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </div>

    <p class="text-center text-sm font-medium text-BG">
      © 2025 جميع الحقوق محفوظة لشركة

      <img
        src="~/assets/image/utils/wd-rights.svg"
        alt="wd-rights"
        width="24"
        height="24"
        class="inline-block"
      />
      بواسطة
      <a href=""></a>
      <a href="https://do.com.sa/" target="_blank"> DO </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import { Form, Field, useForm } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  email: yup
    .string()
    .email(locale.value === 'en' ? 'Invalid email' : 'البريد الإلكتروني غير صالح')
    .required(locale.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),
});

const onSubmit = async (values: any, { resetForm }: any) => {
  console.log(values);
};
</script>

<style scoped>
footer {
  margin-top: 160px;
}

@media (max-width: 768px) {
  footer {
    margin-top: 80px;
  }
}
.inputBack {
  background-color: white;
  border: none;
  color: #293329;
  border-radius: 50px;
}
label {
  color: black;
  font-size: 16px;
  font-weight: 500;
}
.gradient-button {
  border: 2px solid black;
}
</style>
