<template>
  <button class="gradient-button">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  link?: string;
}

defineProps<Props>();
</script>

<style scoped>
.gradient-button {
  font-size: 20px;
  font-weight: 500;
  color: white;
  background: linear-gradient(
    to right,
    rgba(163, 139, 113, 1) 0%,
    rgba(221, 191, 165, 1) 50%,
    rgba(163, 139, 113, 1) 100%
  );
  padding: 8px 24px;
  border-radius: 50px;
  border: 2px solid white;
  cursor: pointer;
  position: relative;
}
.gradient-button::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50px;
  background: linear-gradient(
    to right,
    rgba(163, 139, 113, 1) 0%,
    rgba(221, 191, 165, 1) 50%,
    rgba(163, 139, 113, 1) 100%
  );
  z-index: -1;
}
</style>
