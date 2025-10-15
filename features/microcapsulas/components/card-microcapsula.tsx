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

export function CardMicrocapsula({
  id,
  titulo,
  descripcion,
  ecuacion,
  footer,
  color_titulo,
}: microcapsulaProps) {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>
          <p className={`text-xl font-bol ${color_titulo}`}>
            {titulo}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          <span className="font-bold">{'Definicion: '}</span>
          {descripcion}
        </p>
        <div className="bg-gray-200 rounded-md p-0.5">
          <Latex>{ecuacion.replace(/\\\\/g, '\\')}</Latex>
        </div>
        <p>{footer}</p>
        <Link href={`/dashboard/documentation/${id}`}> {/* FALTA LA URL DINAMICA */}
          <ArrowRight
            className={`w-5 h-5 transition-transform hover:translate-x-1 ${color_titulo}`}
          ></ArrowRight>
        </Link>
      </CardContent>
    </Card>
  )
}

// <Latex>{`$$\\frac{a}{b}$$`}</Latex>
//
