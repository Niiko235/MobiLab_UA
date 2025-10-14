'use client'

import { CardLinks } from "@/features/documentacion/components/card-links"
import { CardTeoria } from "@/features/documentacion/components/card-teoria"
import { CardVideos } from "@/features/documentacion/components/card-videos"

export default function Page() {
  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">⚡️ Momento lineal y su conservación</h1>
        <h3 className="text-gray-500 font-semibold">
          Aquí podras encontrar la documentación completa sobre este tema
        </h3>
      </header>
       <section className="w-full flex flex-col gap-4">
            <CardTeoria></CardTeoria>
            <CardLinks></CardLinks>
            <CardVideos></CardVideos>
       </section>
    </div>
  )
}
