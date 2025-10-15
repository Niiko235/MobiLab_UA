import { CardMicrocapsula } from '@/features/microcapsulas/components/card-microcapsula'
import { getAllMicrocapsules } from '@/MySql/sql/get-all-microcapsules'

export default async function Page() {
  const response = await getAllMicrocapsules()

  const isOk = response.ok

  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">Documentación 📚</h1>
        <h3 className="text-gray-500 font-semibold">
          Teoría y fórmulas organizadas por temas
        </h3>
      </header>
      {isOk && (
        <section className="w-full flex flex-wrap gap-4">
          {response.data?.map((item) => {
            return (
              <CardMicrocapsula
                key={item.id}
                id={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                ecuacion={item.ecuacion}
                footer={item.footer}
                color_titulo={item.color_titulo}
              />
            )
          })}
        </section>
      )}
    </div>
  )
}
