'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type cardProps = {
  weight: number
  url: string
  title: string
  name: string
  
}

export function CardItem({ weight, url, title }: cardProps) {
  return (
    <div>
      <Card className="flex flex-row py-2 gap-3 w-40">
        <CardContent className="px-0 ml-2 flex ">
          <Image
            src={url}
            alt="Tomato"
            width={32}
            height={32}
            className="object-contain"
          />
        </CardContent>
        <CardContent className="px-0">
          <p>{title}</p>
          <p> {weight} gramos</p>
          <Button className="w-25">+</Button>
        </CardContent>
      </Card>
    </div>
  )
}
