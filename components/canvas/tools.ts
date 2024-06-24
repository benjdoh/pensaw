import { Circle, Maximize, Pen, MousePointer2, Square, Spline } from 'lucide-vue-next'

export const tools = [
  {
    name: 'Move',
    shortcut: 'V',
    icon: MousePointer2,
  },
  {
    name: 'Board',
    shortcut: 'B',
    icon: Maximize,
  },
  {
    name: 'Rectangle',
    shortcut: 'M',
    icon: Square,
  },
  {
    name: 'Ellipse',
    shortcut: 'L',
    icon: Circle,
  },
  {
    name: 'Curve',
    shortcut: 'C',
    icon: Spline,
  },
  {
    name: 'Pen',
    shortcut: 'P',
    icon: Pen,
  },
]
