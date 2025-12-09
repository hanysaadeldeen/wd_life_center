<template>
  <teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>

        <!-- Modal Content -->
        <div
          class="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl"
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md hover:bg-white hover:text-gray-900"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Content -->
          <div class="flex flex-col gap-6 p-6 md:flex-row md:p-8">
            <!-- صورة الدكتور -->
            <div class="flex-shrink-0">
              <div class="h-64 w-64 overflow-hidden rounded-lg border-4 border-[#C19D5C]">
                <img
                  :src="doctor.image"
                  :alt="$t(doctor.name)"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- التفاصيل -->
            <div class="flex-1 space-y-4">
              <!-- الاسم والمنصب -->
              <div class="border-b border-gray-200 pb-4">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                  {{ $t(doctor.name) }}
                </h2>
                <p class="mt-2 text-lg text-[#C19D5C]">
                  {{ $t(doctor.position) }}
                </p>
                <p v-if="doctor.title" class="mt-1 text-sm text-gray-600">
                  {{ $t(doctor.title) }}
                </p>
              </div>

              <!-- المؤهلات والدرجات -->
              <div v-if="doctor.qualifications || doctor.classification">
                <h3 class="mb-2 text-lg font-semibold text-gray-800">
                  {{ $t('doctors.qualificationsLabel') }}
                </h3>
                <div class="space-y-2">
                  <p v-if="doctor.classification" class="text-sm text-gray-700">
                    {{ $t(doctor.classification) }}
                  </p>
                  <ul
                    v-if="doctor.qualifications"
                    class="list-inside list-disc space-y-1 text-sm text-gray-600"
                  >
                    <li v-for="(qual, idx) in $t(doctor.qualifications)" :key="idx">
                      {{ qual }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- العضويات -->
              <!-- <div v-if="doctor.memberships">
                <h3 class="mb-2 text-lg font-semibold text-gray-800">
                  {{ $t(doctors.memberships) }}
                </h3>
                <ul class="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li v-for="(member, idx) in $t(doctor.memberships)" :key="idx">
                    {{ member }}
                  </li>
                </ul>
              </div> -->

              <!-- التخصصات -->
              <div v-if="doctor.specializations">
                <h3 class="mb-2 text-lg font-semibold text-gray-800">
                  {{ $t(doctor.specializations) }}
                </h3>
                <ul class="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <!-- <li>
                    {{ $t('doctors.members[6].specializations') }}
                  </li> -->
                </ul>
              </div>

              <!-- معلومات إضافية -->
              <div class="flex gap-4 border-t border-gray-200 pt-4 text-sm">
                <div>
                  <span class="font-semibold text-gray-700"
                    >{{ $t('doctors.languageLabel') }}:</span
                  >
                  <span class="mr-2 text-gray-600">{{ $t(doctor.language) }}</span>
                </div>
                <div>
                  <span class="font-semibold text-gray-700"
                    >{{ $t('doctors.sessionTypeLabel') }}:</span
                  >
                  <span class="mr-2 text-gray-600">{{ $t(doctor.sessionType) }}</span>
                </div>
              </div>

              <!-- زر الحجز -->
              <!-- <div class="pt-4">
                <Button :label="doctors.bookNow" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
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

console.log('here one');

const closeModal = () => {
  emit('close');
};

// Close on ESC key
onMounted(() => {
  console.log(props.isOpen);
  const handleEscape = (e: any) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleEscape);
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});

// Prevent body scroll when modal is open
watch(
  () => props.isOpen,
  newVal => {
    console.log(props.isOpen);
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);
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
