'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type dataLinks = {
  id: number
  titulo: string
  descripcion: string
  url: string
  pagina: string
}

type linksProps = {
  links?: dataLinks[]
}

export function CardLinks({ links }: linksProps) {
  return (
    <Card className="min-w-xs">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between mb-4">
            <h3 className="font-bold text-purple-600 text-2xl">
              🔗 Material Externo
            </h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {links && links.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="flex justify-star">
                <h1 className="text-lg">{item.titulo}</h1>
              </CardTitle>
              <CardDescription>{item.descripcion}</CardDescription>
              <CardAction>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button variant={'materialLink'}>Visitar</Button>
                </a>
              </CardAction>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
