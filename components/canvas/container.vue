<script setup lang="ts">
import { useKeyModifier, useMouseInElement } from '@vueuse/core'
import { tools } from './tools'

type Canvas = {
  x: number
  y: number
  zoom: number
  el: HTMLDivElement | null
  tool: string
}

const ctrlState = useKeyModifier('Control')
const canvas = reactive<Canvas>({
  x: 0,
  y: 0,
  zoom: 100,
  el: null,
  tool: tools[0].name,
})
const { isOutside: mouseOutsideCanvas } = useMouseInElement(canvas.el)
const hideToolbar = ref(false)

function onZoom(e: WheelEvent) {
  if (ctrlState.value || !mouseOutsideCanvas.value) e.preventDefault()

  const value = canvas.zoom * (e.deltaY < 0 ? 1.25 : 0.75)
  canvas.zoom = Number(Math.min(Math.max(value, 1), 20000).toFixed(2))
}
</script>

<template>
  <div class="flex-grow relative">
    <div>
      <span> </span>
    </div>
    <div></div>

    <div
      class="absolute bg-light-400 rounded-md w-full h-full border-2 border-light-700"
      @wheel="onZoom"
    ></div>

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
          canvas.tool === tool.name ? 'bg-light-200 border-light-700 text-brand' : 'border-transparent',
          hideToolbar ? 'pointer-events-none opacity-0' : '',
        ]"
        :title="`${tool.name} (${tool.shortcut})`"
        @click="canvas.tool = tool.name"
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
      ></button>
    </div>
  </div>
</template>
