"use client"


import { motion, AnimatePresence } from 'framer-motion';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Gamepad, ChevronLeft, ChevronRight} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const GameTutorialDialog = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = 3

  const nextStep = () => setActiveStep((prev) => (prev < 3 - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-2xl bg-white">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <Gamepad className="w-8 h-8 text-blue-600" />
            <AlertDialogTitle className="text-2xl font-bold text-gray-800">
              {'centro de masa'}
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>

        <AlertDialogDescription className="relative overflow-hidden">
          <div className="relative h-64">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-4"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {'Imagen del componente a explicar'}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {'Nombre del componente'}
                  </h3>
                  <p className="text-gray-600">
                    {'Descripción de como se quiere que el usuario interactue con este componente'}
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
                    2+1 === 3 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              
            </div>

            <Button
              variant="ghost"
              onClick={nextStep}
              disabled={activeStep === 2 - 1}
              className="text-gray-600 hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </AlertDialogDescription>

        <AlertDialogFooter className="mt-6">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105"
          >
            {'¡Empezar!'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GameTutorialDialog;