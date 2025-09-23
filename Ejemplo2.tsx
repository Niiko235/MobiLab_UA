import React from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Rocket, Scale, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PhysicsConceptDialog = () => (
  <AlertDialog open={true}>
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
          <p><strong>Centro de masa:</strong> {'Aquí se dará una pequeña explicación del fenomeno físico'}</p>
        </div>

        <div className="flex gap-4">
          <Lightbulb className="w-6 h-6 mt-1 text-yellow-500 flex-shrink-0" />
          <div>
            <p className="font-medium mb-2">En este juego:</p>
            <ul className="list-disc pl-6 space-y-2">
              
                <li>Objetivos del juego</li>
            </ul>
          </div>
        </div>

        {(
          <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
            <p className="text-sm italic">📐 {'Aquí va la ecuación del tema'}</p>
          </div>
        )}
      </AlertDialogDescription>

      <AlertDialogFooter className="mt-6">
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-transform hover:scale-105"
        >
          ¡Entendido!
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default PhysicsConceptDialog;