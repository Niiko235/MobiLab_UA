'use client'

import { CardItem } from '@/features/games/center-of-mass/components/car-item'


export default function Page() {


  return (
    <div className="flex flex-row m-4 gap-2">
      <div className="h-150 w-250">
        <iframe
          src="/games/center-of-mass/index.html"
          className="h-150 w-250 border rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="flex flex-row gap-2 flex-wrap p-2 ">
        <CardItem
          title="Tomate"
          weight={7}
          url="/games/center-of-mass/assets/sprites_16x16/tomato.png"
          name='tomato'
        />
        <CardItem
          title="Peperoni"
          weight={10}
          url="/games/center-of-mass/assets/sprites_16x16/carrot.png"
          name='carrot'
        />
      </div>
    </div>
  )
}
