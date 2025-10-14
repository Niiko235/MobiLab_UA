'use client'

import { IntroductionGame } from '@/features/games/introduction-game'

const physic = {
  title: 'La Pizza del Centro de Masa',
  description:
    'El centro de masa es un punto hipotético en un cuerpo donde se podría considerar que se concentra toda la masa del mismo, si distribuyes bien los ingredientes, el centro de masa queda en el medio y la pizza está equilibrada.',
  goal: 'El jugador coloca ingredientes en una pizza y ver como su centro de masa cambia',
}

const simulation = {
  title : "Las manos sobre la masa",
  steps: [
    {
      image: '/assets/games/center-of-mass/btn_tomato.png',
      name: 'Añade un tomate',
      description:
        'Si le das clic en el boton tomato, agregas un tomate de 10 gramos',
    },
    {
      image: '/assets/games/center-of-mass/btn_pepperoni.png',
      name: 'Añade un Pepperoni',
      description:
        'Si le das clic en el boton tomato, agregas un pepperoni de 7 gramos',
    },
    {
      image: '/assets/games/center-of-mass/btn_delete.png',
      name: 'Elimina todo',
      description:
        'Remueve todos los ingredientes de la masa de pizza',
    },
    {
      image: '/assets/games/center-of-mass/ingredient_out.png',
      name: 'No te salgas de la masa',
      description:
        'Si sueltas un ingrediente por fuera de la masa, este desaparecerá',
    },
    {
      image: '/assets/games/center-of-mass/example.png',
      name: 'Juega con los ingredientes',
      description:
        'Cada ingrediente tiene un peso diferente, observa como se comporta el centro de masa cuando los convinas sobre la masa',
    },
  ],
}

export default function Page() {
  return (
    <div className="h-full flex p-4  justify-center">
      <IntroductionGame
        physic={physic}
        simulation={simulation}
      ></IntroductionGame>
      <div className="h-150 w-250">
        <iframe
          src="/games/center-of-mass/index.html"
          className="h-150 w-250 border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  )
}
