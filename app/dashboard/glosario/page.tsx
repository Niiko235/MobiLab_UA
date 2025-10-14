'use client'

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TableBody, TableCell, TableRow, Table} from '@/components/ui/table'


const glosario = [
  {
    titulo: 'Aceleración',
    descripcion: 'Cambio de velocidad por unidad de tiempo. Se mide en m/s².',
  },
  {
    titulo: 'Centro de Masa',
    descripcion:
      'Punto donde se puede considerar concentrada toda la masa de un sistema.',
  },
  {
    titulo: 'Colisión Elástica',
    descripcion:
      'Choque en el que se conserva tanto el momento como la energía cinética.',
  },
  {
    titulo: 'Impulso',
    descripcion: 'Producto de la fuerza por el tiempo durante el cual actúa.',
  },
  {
    titulo: 'Momento Lineal',
    descripcion: 'Producto de la masa por la velocidad de un objeto (p = mv).',
  },
  {
    titulo: 'Velocidad',
    descripcion:
      'Magnitud vectorial que indica el desplazamiento por unidad de tiempo.',
  },
]

export default function Page() {
  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">Glosario 🌐</h1>
        <h3 className="text-gray-500 font-semibold">
          Descubre todo el vocabulario que emplearás aquí
        </h3>
      </header>

      <Table className='w-full'>
        <TableBody>
          {glosario.map((i) => (
            <TableRow key={i.titulo}>
                <TableCell>
                    <h1 className='font-bold text-lg'>{i.titulo}</h1>
                    <p>{i.descripcion}</p>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
