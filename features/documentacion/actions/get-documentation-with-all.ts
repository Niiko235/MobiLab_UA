type RowDocumentation = {
  id: number
  title: string
  color_primario: string
  color_secundario: string
}
type RowTheory = {
  id: number
  contenido: string
  tipo: string
  orden: number
}
type RowVideos = {
  id: number
  titulo: string
  descripcion: string
  url: string
}
type RowLinks = {
  id: number
  titulo: string
  descripcion: string
  url: string
  pagina: string
}

type responseType = {
  ok: boolean
  error?: string
  data?: {
    dataDocumentation: RowDocumentation
    dataTheory: RowTheory[]
    dataVideos: RowVideos[]
    dataLinks: RowLinks[]
  }
}
export async function getDocumentationWithAll(idMicrocapsula: number) {

  try {
    const res = await fetch(
      `http://localhost:3001/movi_lab/documentacion/${idMicrocapsula}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // evita cache en SSR
      }
    )

    const data: responseType = await res.json()

    if (data.ok === false || !data.data) {
      throw new Error(data.error ?? 'Error al traer la documentación' )
    }
    


    return {
        ok: true,
        dataDocumentation: data.data.dataDocumentation,
        dataTheory: data.data.dataTheory,
        dataVideos: data.data.dataVideos,
        dataLinks: data.data.dataLinks,
    }
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido al obtener la documentación',
    }
  } 
}
