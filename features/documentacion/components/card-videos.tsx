'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type dataVideos = {
  id: number
  titulo: string
  descripcion: string
  url: string
}

type videoProps = {
  videos?: dataVideos[]
}

export function CardVideos({ videos }: videoProps) {
  return (
    <Card className="min-w-xs">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between mb-4">
            <h3 className="font-bold text-purple-600 text-2xl">
              🎥 Videos educativos
            </h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {videos && videos.map((item) => (
          <Card className="w-full max-w-md overflow-hidden rounded-2xl shadow-sm border bg-gray-50" key={item.id}>
            {/* Header con ícono de video */}
            <CardHeader className="">
              <div className="bg-gray-200 h-40 flex items-center justify-center rounded-2xl">
                <p className="text-6xl">🎬</p>
              </div>
            </CardHeader>

            {/* Contenido */}
            <CardContent className="p-4 space-y-2">
              <h2 className="font-semibold text-lg text-gray-900">
                {item.titulo}
              </h2>
              <p className="text-gray-500 text-sm">{item.descripcion}</p>
            </CardContent>

            {/* Botón */}
            <CardFooter>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
                  Ver Video
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
