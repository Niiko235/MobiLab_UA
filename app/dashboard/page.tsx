// export default function Page(){
//     return(
//        <div className="flex justify-center items-center h-screen">
//         <iframe
//             src="/games/prueba/index.html"
//             width="800"
//             height="600"
//             className="border rounded-lg shadow-lg"
//         />
//     </div>
//     )
// }

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {  ArrowRight } from 'lucide-react'
import Link from 'next/link'



export default function Page() {
  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">¡Bienvenido de nuevo! 👋</h1>
        <h3 className="text-gray-500 font-semibold">
          Continúa tu aprendizaje en física
        </h3>
      </header>
      <section className="w-full flex flex-wrap gap-3 justify-center">
        <Card className="min-w-xs">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row justify-between mb-4">
                <h3>Partidas Jugadas</h3>
                <h3>🎮</h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-700">127</p>
            <p className="text-gray-600 font-semibold">Total de partidas</p>
          </CardContent>
        </Card>
        <Card className="min-w-xs">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row justify-between mb-4">
                <h3>Promedio de record</h3>
                <h3>📊</h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-700">10.2 minutos</p>
            <p className="text-gray-600 font-semibold">
              Promedio de tiempo por partida
            </p>
          </CardContent>
        </Card>
      </section>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center">
            <h1>🎮 Acceso directo a los juegos</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 ">
            <Link href={'/dashboard/collisions'}>
              <Card className="bg-red-100 w-xs">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <h1 className="text-lg">💥 Colisiones</h1>
                  </CardTitle>
                  <CardAction>
                    <p className="text-red-500">
                      <ArrowRight></ArrowRight>
                    </p>
                  </CardAction>
                </CardHeader>
              </Card>
            </Link>

            <Link href={'/dashboard/center-of-mass'}>
              <Card className="bg-green-100 w-xs">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <h1 className="text-lg">⚖️ Centro de masa</h1>
                  </CardTitle>
                  <CardAction>
                    <p className="text-green-500">
                      <ArrowRight></ArrowRight>
                    </p>
                  </CardAction>
                </CardHeader>
              </Card>
            </Link>

            <Link href={'/dashboard/impulse-and-momentum'}>
              <Card className="bg-blue-100 w-xs">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <h1 className="text-lg">🎯 Impulso y Momento</h1>
                  </CardTitle>
                  <CardAction>
                    <p className="text-blue-500">
                      <ArrowRight></ArrowRight>
                    </p>
                  </CardAction>
                </CardHeader>
              </Card>
            </Link>

            <Link href={'/dashboard/system-of-particles'}>
              <Card className="bg-purple-100 w-xs">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <h1 className="text-lg">🌌 Sistema de Partículas</h1>
                  </CardTitle>
                  <CardAction>
                    <p className="text-purple-500">
                      <ArrowRight></ArrowRight>
                    </p>
                  </CardAction>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
