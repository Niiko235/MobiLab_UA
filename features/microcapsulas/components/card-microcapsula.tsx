'use client'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type microcapsulaProps = {
  id: number
  titulo: string
  descripcion: string
  ecuacion: string
  footer: string
  color_titulo: string
}

const COLOR_STYLES: Record<string, { text: string; bg: string }> = {
  purple: { text: 'text-purple-600', bg: 'bg-purple-100' },
  red: { text: 'text-red-600', bg: 'bg-red-100' },
  blue: { text: 'text-blue-600', bg: 'bg-blue-100' },
  green: { text: 'text-green-600', bg: 'bg-green-100' },
  // agrega los colores necesarios
}

export function CardMicrocapsula({
  id,
  titulo,
  descripcion,
  ecuacion,
  footer,
  color_titulo,
}: microcapsulaProps) {
  const color = COLOR_STYLES[color_titulo] ?? COLOR_STYLES.purple

  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>
          <p className={`text-xl font-bold ${color.text}`}>
            {titulo}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          <span className="font-bold">{'Definicion: '}</span>
          {descripcion}
        </p>
        <div className={`${color.bg} rounded-md p-0.5`}>
          <Latex>{ecuacion.replace(/\\\\/g, '\\')}</Latex>
        </div>
        <p>{footer}</p>
        <Link href={`/dashboard/documentation/${id}`}>
          {' '}
          {/* FALTA LA URL DINAMICA */}
          <ArrowRight className={`w-5 h-5 transition-transform hover:translate-x-1 ${color.text}`} />
        </Link>
      </CardContent>
    </Card>
  )
}

// <Latex>{`$$\\frac{a}{b}$$`}</Latex>
//
