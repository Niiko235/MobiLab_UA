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
import {
  Rocket,
  Scale,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Gamepad,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

type propInfo = {
  physic: {
    title: string
    description: string
    goal: string
  }
  simulation: {
    title: string
    steps: {
      image: string
      name: string
      description: string
    }[]
  }
}

export function IntroductionGame({ physic, simulation }: propInfo) {
  const [openPhysic, setOpenPhysic] = useState(true)
  const [openSimulation, setOpenSimulation] = useState(true)

  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((prev) =>
      prev < simulation.steps.length - 1 ? prev + 1 : prev
    )
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div className="relative">
      <AlertDialog open={openPhysic}>
        <AlertDialogContent className="max-w-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-purple-600" />
              <AlertDialogTitle className="text-2xl font-bold text-gray-800">
                {'¡Preparemos ese cerebro!'}
              </AlertDialogTitle>
            </div>
          </AlertDialogHeader>

          <AlertDialogDescription className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <Scale className="w-6 h-6 mt-1 text-blue-500 flex-shrink-0" />
              <p>
                <strong>{physic.title}:</strong> {physic.description}
              </p>
            </div>

            <div className="flex gap-4">
              <Lightbulb className="w-6 h-6 mt-1 text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-medium mb-2">En esta simulacion:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{physic.goal}</li>
                </ul>
              </div>
            </div>

            {
              <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
                <p className="text-sm italic">
                  {'Aquí va la ecuación del tema'}
                </p>
              </div>
            }
          </AlertDialogDescription>
          <div className="absolute left-[-300px] bottom-[-300px] z-50 w-[500px] h-[510px]">
            <Image
              src="/assets/dr-cortex/cortex-derecha.png"
              alt="Dr. Cortex"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <AlertDialogFooter className="mt-6">
            <Button
              onClick={() => setOpenPhysic(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-transform hover:scale-105"
            >
              ¡Entendido!
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={openSimulation && !openPhysic}>
        <AlertDialogContent className="max-w-2xl bg-white">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <Gamepad className="w-8 h-8 text-blue-600" />
              <AlertDialogTitle className="text-2xl font-bold text-gray-800">
                {simulation.title}
              </AlertDialogTitle>
            </div>
          </AlertDialogHeader>

          <AlertDialogDescription className="relative overflow-hidden">
            <div className="relative h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-4"
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-[230] h-[130] bg-blue-100 flex items-center justify-center">
                      <Image
                        src={simulation.steps[activeStep].image}
                        alt="foto"
                        width={230}
                        height={150}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {simulation.steps[activeStep].name}
                    </h3>
                    <p className="text-gray-600">
                      {simulation.steps[activeStep].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={activeStep === 0}
                className="text-gray-600 hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                <button
                  key={1}
                  className={`w-3 h-3 rounded-full ${
                    2 + 1 === 3 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              </div>

              <Button
                variant="ghost"
                onClick={nextStep}
                disabled={activeStep === simulation.steps.length - 1}
                className="text-gray-600 hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </AlertDialogDescription>

          <div className="absolute left-[-150px] bottom-[-130px] z-50 w-[300px] h-[210px]">
            <Image
              src="/assets/paco-el-ing/paco-hablando.png"
              alt="Dr. Cortex"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <AlertDialogFooter className="mt-6">
            <Button
              onClick={() => setOpenSimulation(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105"
              disabled = {activeStep != simulation.steps.length - 1}
            >
              {'¡Empezar!'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
