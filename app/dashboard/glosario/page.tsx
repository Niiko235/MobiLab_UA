import { TableBody, TableCell, TableRow, Table } from '@/components/ui/table'
import { getAllGlosary } from '@/MySql/sql/get-all-glosary'

export default async function Page() {
  const response = await getAllGlosary()
  const isOk = response.ok

  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">Glosario 🌐</h1>
        <h3 className="text-gray-500 font-semibold">
          Descubre todo el vocabulario que emplearás aquí
        </h3>
      </header>

      {isOk && (
        <Table className="w-full">
          <TableBody>
            {response.data?.map((i) => (
              <TableRow key={i.id}>
                <TableCell>
                  <h1 className="font-bold text-lg">{i.palabra}</h1>
                  <p>{i.significado}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
