import { Atom, Bomb, Calendar, Home, Inbox, Scale, Zap } from "lucide-react";


// Menu items.
export const essentials = [
  {
    title: "Pagina Principal",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Documentación",
    url: "/dashboard/cards",
    icon: Inbox,
  },
  {
    title: "Información Personal",
    url: "/dashboard/personal-information",
    icon: Calendar,
  }
]

export const topycs = [
  {
    title: "Colisiones",
    url: "/dashboard/collisions",
    icon: Bomb,
  },
  {
    title: "Centro de Masa",
    url: "/dashboard/center-of-mass",
    icon: Scale,
  },
  {
    title: "Impulso y Momento",
    url: "/dashboard/impulse-and-momentum",
    icon: Zap,
  },
  {
    title: "Sistema de Particulas",
    url: "/dashboard/system-of-particles",
    icon: Atom,
  },
  
]