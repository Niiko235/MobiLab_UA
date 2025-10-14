'use client'

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CardLinks() {
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
        <Card >
          <CardHeader>
            <CardTitle className="flex justify-star">
              <h1 className="text-lg">Khan Academy - Momento Lineal</h1>
            </CardTitle>
            <CardDescription>
                Curso completo con ejercicios interactivos
            </CardDescription>
            <CardAction>
                <Button variant={'materialLink'}>
                    Visitar
                </Button>
            </CardAction>
          </CardHeader>
        </Card>
        <Card >
          <CardHeader>
            <CardTitle className="flex justify-star">
              <h1 className="text-lg">Khan Academy - Momento Lineal</h1>
            </CardTitle>
            <CardDescription>
                Curso completo con ejercicios interactivos
            </CardDescription>
            <CardAction>
                <Button variant={'materialLink'}>
                    Visitar
                </Button>
            </CardAction>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  )
}
