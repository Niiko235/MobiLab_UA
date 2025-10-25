'use server'

import { getSesion } from "@/features/auth/actions/get-sesion"

type responseType = {
  ok: boolean
  error?: string
  data?: {
    promedio: number
    partidas: number
  }
}

export default async function getStadistics() {
  try {


    const sesion = await getSesion()

    const idEstudiante = sesion?.sesion?.id

    const res = await fetch(
      `${process.env.API_URL}/estadisticas/${idEstudiante}`,
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
      throw new Error(data.error ?? 'Error al traer la documentación')
    }

    return data
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido al obtener las estadísticas del estudiante',
    }
  }
}
