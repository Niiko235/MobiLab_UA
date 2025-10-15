import { CardLinks } from '@/features/documentacion/components/card-links'
import { CardTeoria } from '@/features/documentacion/components/card-teoria'
import { CardVideos } from '@/features/documentacion/components/card-videos'
import { getDocumentationWithAll } from '@/MySql/sql/get-documentation-with-all'

type Props = {
  params: {
    id: number
  }
}

export default async function Page({ params }: Props) {
  const paramsData = await params
const id = Number(paramsData.id)

  const { ok, dataDocumentation, dataLinks, dataTheory, dataVideos } =
    await getDocumentationWithAll(id)
    

  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">
          ⚡️ Momento lineal y su conservación
        </h1>
        <h3 className="text-gray-500 font-semibold">
          Aquí podras encontrar la documentación completa sobre este tema
        </h3>
      </header>
      {ok && (
        <section className="w-full flex flex-col gap-4">
          <CardTeoria
            key={'cardTeoria'}
            theories={dataTheory}
            color_primario={dataDocumentation?.color_primario ?? 'purple-600'}
            color_secundario={
              dataDocumentation?.color_secundario ?? 'purple-100'
            }
          ></CardTeoria>
          <CardLinks key={'cardUrls'} links={dataLinks}></CardLinks>
          <CardVideos
            key={'CardVideos'}
            videos={dataVideos}
          ></CardVideos>
        </section>
      )}
    </div>
  )
}
