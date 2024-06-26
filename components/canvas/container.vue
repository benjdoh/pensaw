<script setup lang="ts">
import { tools } from './tools'
import type { CanvasState } from '~/assets/types'

const canvas = reactive<CanvasState>({
  x: 0,
  y: 0,
  zoom: 100,
  tool: tools[0].name,
})

provide('useCanvas', canvas)
</script>

<template>
  <div class="flex-grow relative">
    <div>
      <span> </span>
    </div>
    <div></div>

    <Canvas />
  </div>
</template>
