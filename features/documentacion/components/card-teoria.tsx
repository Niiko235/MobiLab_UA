'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

type dataTheory = {
  id: number
  contenido: string
  tipo: string
  orden: number
}

type theroyProps = {
  theories?: dataTheory[]
  color_primario: string | 'purple-600'
  color_secundario: string | 'purple-100'
}

export function CardTeoria({
  theories,
  color_primario,
  color_secundario,
}: theroyProps) {
  return (
    <Card className="min-w-xs">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between mb-4">
            <h3 className={`font-bold text-2xl text-${color_primario}`}>
              📖 Teoría y Fórmulas
            </h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {theories && theories.map((item) =>
          item.tipo === 'ecuacion' ? (
            <div
              key={item.id}
              className={`bg-${color_secundario} rounded-xl p-2 border-l-4 border-${color_primario}`}
            >
              <Latex>{item.contenido.replace(/\\\\/g, '\\')}</Latex>
            </div>
          ) : item.tipo === 'definicion' ? (
            <p key={item.id} className="text-gray-700 leading-relaxed">
              {item.contenido}
            </p>
          ) : null
        )}
      </CardContent>
    </Card>
  )
}
