'use client'

import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import { Hand } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CardPresentation() {
  const [openCortex, setOpenCortex] = useState(true)
  const [openPaco, setOpenPaco] = useState(true)

  return (
    <div className="relative">
      <AlertDialog open={openCortex}>
        <AlertDialogContent className="max-w-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <Hand className="w-8 h-8 text-purple-600" />
              <AlertDialogTitle className="text-2xl font-bold text-gray-800">
                {'¡Saludos joven estudiante!'}
              </AlertDialogTitle>
            </div>
          </AlertDialogHeader>

          <AlertDialogDescription className="space-y-4 text-gray-700">
              Soy el Dr. Cortex, y mi misión es ayudarte a comprender los
              fenómenos físicos que estudiarás aquí. Antes de que entres a cada
              simulación, estaré contigo para explicarte la teoría, las leyes y
              los principios que se ponen en juego. Piensa en mí como tu guía
              científico
          </AlertDialogDescription>
          <div className="absolute left-[-400px] bottom-[-300px] z-50 w-[600px] h-[510px]">
            <Image
              src="/assets/dr-cortex/cortex-derecha.png"
              alt="Dr. Cortex"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <AlertDialogFooter className="mt-6">
            <Button
              onClick={() => setOpenCortex(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-transform hover:scale-105"
            >
              ¡Encantad@!
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={openPaco && !openCortex}>
        <AlertDialogContent className="max-w-2xl bg-white">
          <AlertDialogHeader>
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertDialogTitle className="text-2xl font-bold text-gray-800">
                {'¡Saludos joven estudiante!'}
              </AlertDialogTitle>
            </div>
          </AlertDialogHeader>

          <AlertDialogDescription className="space-y-4 text-gray-700">
              Soy Paco el Ingeniero, y estaré a tu lado para mostrarte cómo
              funciona cada simulación, yo me encargaré de guiarte en la
              práctica: cómo usar los controles, mover parámetros y observar los
              resultados. Mi trabajo es que experimentes, pruebes y veas la
              física en acción.
          </AlertDialogDescription>
          <div className="absolute left-[-300px] bottom-[-300px] z-50 w-[600px] h-[510px]">
            <Image
              src="/assets/paco-el-ing/paco-normal.png"
              alt="Dr. Cortex"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <AlertDialogFooter className="mt-6">
            <Button
              onClick={() => setOpenPaco(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105"
            >
              ¡Mucho Gusto!
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
