<template>
  <div class="relative">
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ errors }"
      class="relative z-10 w-full lg:max-w-[616px]"
    >
      <div class="mb-6 flex w-full gap-4 max-lg:flex-col lg:gap-8">
        <div class="flex w-full flex-col">
          <label
            for="FirstName"
            class="text-text mb-2 inline-block w-fit cursor-pointer text-sm font-normal"
          >
            {{ locale === 'ar' ? 'الاسم الأول' : 'First Name' }}
          </label>
          <Field
            id="FirstName"
            name="FirstName"
            type="text"
            :placeholder="locale === 'en' ? 'Enter First Name' : 'أدخل اسمك الأول'"
            class="inputBack h-[48px] w-full border px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary md:px-4 md:py-3"
            :class="{ '!border-red-500': errors.FirstName }"
          />
          <span class="text-sm text-red-500">{{ errors.FirstName }}</span>
        </div>
      </div>
      <div class="mb-6 flex w-full flex-col">
        <label
          for="phoneNumber"
          class="text-text mb-2 inline-block w-fit cursor-pointer text-sm font-normal"
        >
          {{ locale === 'ar' ? 'رقم الهاتف' : 'Phone Number' }}
        </label>
        <Field
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          :placeholder="locale === 'en' ? 'e.g. +9665xxxxxxx' : 'أدخل رقم الهاتف '"
          class="inputBack focus:ring-primary-main h-[48px] w-full border px-2.5 py-2 focus:outline-none focus:ring-2 md:px-4 md:py-3"
          :class="{ '!border-red-500': errors.phoneNumber }"
        />
        <span class="text-sm text-red-500">{{ errors.phoneNumber }}</span>
      </div>
      <div class="mb-6 flex w-full flex-col">
        <label
          for="email"
          class="text-text mb-2 inline-block w-fit cursor-pointer text-sm font-normal"
        >
          {{ locale === 'ar' ? 'عنوان البريد الإلكتروني' : ' Enter your email address' }}
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          :placeholder="locale === 'en' ? 'e.g. name@domain.com' : 'أدخل عنوان بريدك الإلكتروني'"
          class="inputBack focus:ring-Primary h-[48px] w-full border px-2.5 py-2 focus:outline-none focus:ring-2 md:px-4 md:py-3"
          :class="{ '!border-red-500': errors.email }"
        />
        <span class="text-sm text-red-500">{{ errors.email }}</span>
      </div>
      <div class="flex w-full flex-col lg:max-w-[640px]">
        <label
          for="message"
          class="text-text mb-2 inline-block w-fit cursor-pointer text-sm font-normal"
        >
          {{ locale === 'ar' ? 'الرسالة' : 'Message' }}
        </label>
        <Field
          id="message"
          name="message"
          as="textarea"
          :placeholder="locale === 'en' ? 'Write your message here' : 'اكتب رسالتك هنا'"
          class="inputBack focus:ring-Primary h-32 w-full resize-none !rounded-2xl border p-4 focus:outline-none focus:ring-2 md:h-[100px]"
          :class="{ '!border-red-500': errors.message }"
        />
        <span class="text-sm text-red-500">{{ errors.message }}</span>
      </div>
      <div class="mt-8">
        <Button label="أرسل طلب الحجز الآن" />
      </div>
      <p v-if="contactMessage" class="text-primary-300 my-2 text-center">
        {{ contactMessage }}
      </p>
      <p v-if="contactMessageE" class="my-2 text-center text-red-500">
        {{ contactMessageE }}
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localpath = useLocalePath();
import { Form, Field, useForm } from 'vee-validate';
import * as yup from 'yup';
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const contactMessage = ref('');
const contactMessageE = ref('');

const schema = yup.object({
  FirstName: yup
    .string()
    .min(
      3,
      locale.value === 'en'
        ? 'First name must be at least 3 characters'
        : 'يجب أن يكون الاسم الأول على الأقل 3 أحرف'
    )
    .required(locale.value === 'en' ? 'First name is required' : 'الاسم الأول مطلوب'),
  LastName: yup
    .string()
    .min(
      3,
      locale.value === 'en'
        ? 'Last Name must be at least 3 characters'
        : 'يجب أن يكون الاسم الأخير على الأقل 3 أحرف'
    )
    .required(locale.value === 'en' ? 'Last name is required' : 'الاسم الأخير مطلوب'),
  email: yup
    .string()
    .email(locale.value === 'en' ? 'Invalid email' : 'البريد الإلكتروني غير صالح')
    .required(locale.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),

  phoneNumber: yup
    .string()
    .matches(
      /^(\+?20|0)?1[0-2,5]\d{8}$|^(\+?966|0)?5\d{8}$/,
      locale.value === 'en'
        ? 'Please enter a valid Egyptian or Saudi phone number'
        : 'من فضلك أدخل رقم هاتف مصري أو سعودي صحيح'
    )
    .required(locale.value === 'en' ? 'Phone number is required' : 'رقم الهاتف مطلوب'),
  message: yup
    .string()
    .min(
      10,
      locale.value === 'en'
        ? 'Message must be at least 10 characters'
        : 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل'
    )
    .max(
      500,
      locale.value === 'en'
        ? 'Message cannot exceed 500 characters'
        : 'يجب ألا تتجاوز الرسالة 500 حرف'
    )
    .required(locale.value === 'en' ? 'Message is required' : 'الرسالة مطلوبة'),
});
const onSubmit = async (values: any, { resetForm }: any) => {
  console.log(values);

  //   try {
  //     isLoading.value = true;
  //     const { data, pending, error } = await useFetch(
  //       'https://37-27-29-234.nip.io/shangiti/api/contact/',
  //       {
  //         method: 'POST',
  //         body: {
  //           first_name: values.FirstName,
  //           last_name: values.LastName,
  //           phone: values.phoneNumber,
  //           email: values.email,
  //           message: values.message,
  //         },
  //         server: false,
  //       }
  //     );
  //     if (error.value) {
  //       throw new Error('Unknown error occurred');
  //     }
  //     if (data.value) {
  //       contactMessage.value =
  //         locale.value === 'en'
  //           ? 'Your message has been sent successfully'
  //           : 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً';
  //       resetForm();
  //       isOpenSuccess.value = true;
  //     }
  //   } catch (error) {
  //     contactMessageE.value =
  //       locale.value === 'en'
  //         ? 'There was an error sending your message. Please try again later.'
  //         : 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً.';
  //   } finally {
  //     isLoading.value = false;
  //   }
};
</script>

<style scoped>
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
</style>
