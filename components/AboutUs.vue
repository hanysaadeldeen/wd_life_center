<template>
  <section class="mx-auto w-full max-w-[1120px] max-lg:px-4">
    <div class="flex gap-12 max-md:flex-col">
      <img
        src="~/assets/image/about-us.webp"
        alt="about us image"
        loading="lazy"
        width="630"
        height="432"
        class="rounded-[60px]"
      />
      <div class="flex flex-col">
        <div class="mb-6 flex items-center md:mb-8">
          <p class="text-xl font-medium text-black md:text-2xl">نبذة عن Life </p>
          <img
            src="~/assets/image/utils/wd-rights.svg"
            alt="wd-rights.svg"
            width="48"
            height="24"
          />
        </div>
        <h2 class="mb-6 text-2xl font-bold text-Text md:mb-8 md:text-3xl">
          رواد في الاستشارات النفسية والأسرية
        </h2>
        <div class="mb-6 max-w-[524px] text-lg font-medium md:mb-8 md:text-xl">
          <p class="flex">
            life
            <img
              src="~/assets/image/utils/wd-rights.svg"
              alt="wd-rights.svg"
              width="48"
              height="24"
              class="inline-block h-fit"
            />
            ليس مجرد مركز لتقديم الاستشارات النفسية والأسرية،
          </p>
          <p>
            بل مشروع نفسي متكامل. يقوم عليه فريق مؤهل، يحلم بمجتمع متذوق للثقافة النفسية، حيث تصبح
            فيه الصحة النفسية راسخة فكرياً وعملياً في كل بيت.
          </p>
        </div>
        <Button label="عرض خدماتنا" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
