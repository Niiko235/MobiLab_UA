import { CardMicrocapsula } from "@/features/microcapsulas/components/card-microcapsula";

export default function Page() {
  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">Documentación 📚</h1>
        <h3 className="text-gray-500 font-semibold">
            Teoría y fórmulas organizadas por temas
        </h3>
      </header>
      <section className="w-full flex flex-wrap gap-4">
              <CardMicrocapsula/>
              <CardMicrocapsula/>
      </section>


    </div>
  )
}
