<script setup lang="ts">
type Props = {
  tabs: string[]
}

const props = defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
  <div class="bg-light-600 p-0.5 min-w-content flex gap-1 rounded-md">
    <slot name="left" />

    <button
      v-for="tab of tabs"
      :key="tab"
      :class="['h-8 px-4 rounded-md flex-grow transition uppercase font-medium', model === tab ? 'bg-white text-brand' : 'text-dim-800 hover:text-black']"
      @click="model = tab"
    >
      {{ tab }}
    </button>

    <slot name="right" />
  </div>
</template>
