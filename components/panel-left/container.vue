<script setup lang="ts">
import {} from '@vueuse/core'
import { ChevronLeft, MoreVertical } from 'lucide-vue-next'

const name = ref('New file 1')
const folder = ref('DRAFTS')
const tab = ref('Layers')
</script>

<template>
  <div class="flex flex-col gap-2 w-66 select-none py-2 overflow-hidden">
    <div class="flex gap-1 px-2 items-center">
      <div class="flex flex-col flex-grow">
        <NuxtLink class="text-dim-800">
          {{ folder }}
        </NuxtLink>
        <input
          :class="['outline-none focus:bg-light-500 rounded']"
          v-model="name"
          type="text"
        />
      </div>

      <button class="h-8 w-8 grid place-items-center text-dark-50 hover:(text-black bg-light-500) rounded-md">
        <MoreVertical class="w-3" />
      </button>
    </div>

    <div class="px-2">
      <UiTabs
        v-model="tab"
        :tabs="['Layers', 'Assets']"
      >
        <template #left>
          <button class="h-8 w-6 grid place-items-center text-dark-50 hover:text-black">
            <ChevronLeft class="w-3" />
          </button>
        </template>
      </UiTabs>
    </div>
  </div>
</template>
