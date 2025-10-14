'use client'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CardMicrocapsula() {
  return (
    <Card className='max-w-lg'>
      <CardHeader>
        <CardTitle>
          <p className='text-xl font-bold text-purple-600'>⚡️ Momento Lineal y conservación</p>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <p>
          <span className="font-bold">{'Definicion: '}</span>El momento lineal
          (p) es el producto de la masa por la velocidad.
        </p>
        <div className='bg-gray-200 rounded-md p-0.5'>
            <Latex>{`$$\\vec{p} = m \\cdot \\vec{v}$$`}</Latex>
        </div>
        <p>
          <span className="font-bold">{'Conservación: '}</span>En un sistema aislado, el momento total se conserva.
        </p>
        <Link href={'/dashboard/'}>
            <ArrowRight className='text-purple-600'></ArrowRight>
        </Link>


      </CardContent>
    </Card>
  )
}

// <Latex>{`$$\\frac{a}{b}$$`}</Latex>
//
