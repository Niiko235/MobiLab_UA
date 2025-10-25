'use server'

type registerProps = {
  nombres: string
  apellidos: string
  correo: string
  numero_telefonico: string
  contrasenia: string
}

type responseType = {
  ok: boolean
  error?: string
  data?: any
}

export async function registerStudent({
  nombres,
  apellidos,
  correo,
  numero_telefonico,
  contrasenia,
}: registerProps) {
  try {
    const res = await fetch(
      `http://localhost:3001/movi_lab/registrar-estudiante`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombres,
          apellidos,
          correo,
          numero_telefonico,
          contrasenia,
        }),
      }
    )

    const data: responseType = await res.json()

    if(data.ok === false){
      throw new Error(data.error)
    }

    return res.json()
    
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido al registrar el estudiante',
    }
  }
}
