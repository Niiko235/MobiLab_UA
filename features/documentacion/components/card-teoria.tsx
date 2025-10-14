'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

export function CardTeoria() {
  return (
    <Card className="min-w-xs">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between mb-4">
            <h3 className="font-bold text-purple-600 text-2xl">
              📖 Teoría y Fórmulas
            </h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-gray-700 leading-relaxed">
          El <span className="font-semibold">momento lineal</span> (también
          llamado
          <em> cantidad de movimiento</em>) es una magnitud vectorial que
          describe el movimiento de un objeto. Se define como el producto de la
          masa del objeto por su velocidad.
        </p>

        <div className="bg-purple-50 rounded-xl p-2 border-l-4 border-purple-600">
          <Latex>{`$$\\vec{p} = m \\cdot \\vec{v}$$`}</Latex>
        </div>
        <p className="text-gray-700 leading-relaxed">
          El <span className="font-semibold">momento lineal</span> (también
          llamado
          <em> cantidad de movimiento</em>) es una magnitud vectorial que
          describe el movimiento de un objeto. Se define como el producto de la
          masa del objeto por su velocidad.
        </p>

        <div className="bg-purple-50 rounded-xl p-2 border-l-4 border-purple-600">
          <Latex>{`$$\\vec{p} = m \\cdot \\vec{v}$$`}</Latex>
        </div>
        <p className="text-gray-700 leading-relaxed">
          El <span className="font-semibold">momento lineal</span> (también
          llamado
          <em> cantidad de movimiento</em>) es una magnitud vectorial que
          describe el movimiento de un objeto. Se define como el producto de la
          masa del objeto por su velocidad.
        </p>
        <p className="text-gray-700 leading-relaxed">
          El <span className="font-semibold">momento lineal</span> (también
          llamado
          <em> cantidad de movimiento</em>) es una magnitud vectorial que
          describe el movimiento de un objeto. Se define como el producto de la
          masa del objeto por su velocidad.
        </p>
        <div className="bg-purple-50 rounded-xl p-2 border-l-4 border-purple-600">
          <Latex>{`$$\\vec{p} = m \\cdot \\vec{v}$$`}</Latex>
        </div>
      </CardContent>
    </Card>
  )
}
