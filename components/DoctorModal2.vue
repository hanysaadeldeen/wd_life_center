<template>
   <teleport to="body">
    <Transition name="modal">
      <Transition
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >

    </Transition>
    </teleport>
</template>

<script setup lang="ts">
interface Props {
  doctor: object;
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(['close']);
</script>


<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>
