<template>
  <div
    class="mx-auto mb-10 flex w-full max-w-[562px] flex-col items-center justify-center text-center md:mb-16 lg:mb-20"
  >
    <p class="text-2xl font-medium">{{ $t(title) }}</p>
    <img src="~/assets/image/utils/headerTitle.svg" alt="headerTitle.svg" width="90" height="18" />
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

defineProps<Props>();
</script>

<style scoped></style>
