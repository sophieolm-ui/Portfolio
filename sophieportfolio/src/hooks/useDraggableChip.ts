import { useRef } from 'react'

export function useDraggableChip<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const state = useRef({ x: 0, y: 0, startX: 0, startY: 0, dragging: false })

  const onPointerDown = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    state.current.dragging = true
    state.current.startX = e.clientX - state.current.x
    state.current.startY = e.clientY - state.current.y
    el.setPointerCapture(e.pointerId)
    el.classList.add('is-dragging')
  }

  const onPointerMove = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el || !state.current.dragging) return
    state.current.x = e.clientX - state.current.startX
    state.current.y = e.clientY - state.current.startY
    el.style.setProperty('--drag-x', `${state.current.x}px`)
    el.style.setProperty('--drag-y', `${state.current.y}px`)
  }

  const endDrag = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    state.current.dragging = false
    el.classList.remove('is-dragging')
    el.releasePointerCapture(e.pointerId)
  }

  return { ref, onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag }
}
