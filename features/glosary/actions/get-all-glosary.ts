'use server'

type Row = {
  id: number
  palabra: string
  significado: string
}

type responseType = {
  ok: boolean
  error?: string
  data?: Row[]
}

export async function getAllGlosary() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/glosario`,
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
      throw new Error(data.error ?? 'Error en el inicio de sesión')
    }

    return data
    
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido al obtener el glosario',
    }
  }
}
