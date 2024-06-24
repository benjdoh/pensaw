<script setup lang="ts">
useHead({
  title: 'Pensaw',
})
</script>

<template>
  <div class="flex h-dvh">
    <PanelLeftContainer />
    <CanvasContainer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

body {
  @apply text-sm font-sans;
}

::selection {
  @apply bg-brand text-white;
}
</style>
