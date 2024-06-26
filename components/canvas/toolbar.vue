<script setup lang="ts">
import type { CanvasState } from '~/assets/types'
import { tools } from './tools'

const canvas = inject<CanvasState>('useCanvas')
const hideToolbar = ref(false)
</script>

<template>
  <div
    :class="[
      'absolute top-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-light-700 p-1 pt-3 flex flex-wrap gap-1 rounded-lg transition',
      hideToolbar ? '-translate-y-11.5' : '',
    ]"
  >
    <button
      v-for="tool of tools"
      :key="tool.name"
      :class="[
        'w-8 h-8 grid place-items-center border-2 rounded-md transition',
        canvas?.tool === tool.name ? 'bg-light-200 border-light-700 text-brand' : 'border-transparent',
        hideToolbar ? 'pointer-events-none opacity-0' : '',
      ]"
      :title="`${tool.name} (${tool.shortcut})`"
      @click="canvas && (canvas.tool = tool.name)"
    >
      <component
        class="w-4"
        :is="tool.icon"
        :stroke-width="1.5"
        :absolute-stroke-width="true"
      />
    </button>

    <button
      :class="['w-16 h-1 rounded-full absolute top-1 left-1/2 tranform -translate-x-1/2 bg-light-700', hideToolbar ? 'top-initial bottom-1' : '']"
      @click="hideToolbar = !hideToolbar"
    />
  </div>
</template>
