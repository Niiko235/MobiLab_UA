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
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

export default function Page() {
  return (
    <div className="h-screen font-bold m-2">
      <h1>Dashboard en proceso...</h1>
      <section className='flex flex-col gap-4 md:flex-row'>
        <Card>
          <CardContent>
            <p className="text-xl font-bold text-blue-400">Partidas jugadas</p>
            <p>127</p>
            <p>total de partidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-xl font-bold text-blue-400">Partidas jugadas</p>
            <p>127</p>
            <p>total de partidas</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
