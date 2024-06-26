import { useElementBounding, useMouse, useMousePressed, type MaybeElementRef } from '@vueuse/core'

export type MousePressedDeltaOptions<IW = number> = {
  target?: MaybeElementRef
  initials?: {
    width: IW
  }
}

export function useMousePressedDelta<IW>(opts?: MousePressedDeltaOptions) {
  const { x: mouseX, y: mouseY } = useMouse()
  const { x: xEl, y: yEl } = useElementBounding(opts?.target)
  const { pressed } = useMousePressed(opts)
  const start = reactive<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  })

  watch(pressed, (v) => {
    if (!v) {
      start.x = null
      start.y = null

      return
    }

    start.x = mouseX.value
    start.y = mouseY.value
  })

  return {
    width: computed(() => {
      if (start.x === null) return null
      if (mouseX.value < start.x) return start.x - mouseX.value
      return mouseX.value - start.x
    }),
    height: computed(() => {
      if (start.y === null) return null
      if (mouseY.value < start.y) return start.y - mouseY.value
      return mouseY.value - start.y
    }),
    x: computed(() => {
      if (start.x === null) return null
      if (mouseX.value < start.x) return mouseX.value - (xEl.value || 0)
      return start.x - (xEl.value || 0)
    }),
    y: computed(() => {
      if (start.y === null) return null
      if (mouseY.value < start.y) return mouseY.value - (yEl.value || 0)
      return start.y - (yEl.value || 0)
    }),
  }
}
