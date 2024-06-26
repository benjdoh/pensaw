<script setup lang="ts">
import { useElementSize, useParentElement, useKeyModifier, useMouseInElement } from '@vueuse/core'
import type { CanvasState } from '~/assets/types'

const ctrlState = useKeyModifier('Control')
const canvas = inject<CanvasState>('useCanvas')
const canvasEl = ref<SVGElement>()
const { width: ccWidth, height: ccHeight } = useElementSize(useParentElement(canvasEl))
const { isOutside: mouseOutsideCanvas } = useMouseInElement(canvasEl)
const { width, height, x, y } = useMousePressedDelta({
  target: canvasEl,
})

function onZoom(e: WheelEvent) {
  if (!canvas) return
  if (ctrlState.value || !mouseOutsideCanvas.value) e.preventDefault()

  const value = canvas.zoom * (e.deltaY < 0 ? 1.25 : 0.75)
  canvas.zoom = Number(Math.min(Math.max(value, 1), 20000).toFixed(2))
}

effect(() => {
  //  console.log(width.value, height.value, x.value, y.value)
})
</script>

<template>
  <div class="absolute bg-light-400 rounded-md w-full h-full border-2 border-light-700">
    <svg
      class="w-full h-full"
      ref="canvasEl"
      :view-box="`${canvas?.x} ${canvas?.y} ${ccWidth} ${ccHeight}`"
      @wheel="onZoom"
    >
      <rect
        v-if="x !== null"
        :width="width || undefined"
        :height="height || undefined"
        :x="x || undefined"
        :y="y || undefined"
      />
    </svg>

    <CanvasToolbar />
  </div>
</template>
