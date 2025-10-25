'use server'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

type credentialsProps = {
  correo: string
  contrasenia: string
}

type User = {
  id: number
  nombres: string
  apellidos: string
  contrasenia: string
  numero_telefonico: string
  email: string
  onboarding_terminado: boolean
}

type responseType = {
  ok: boolean
  error?: string
  data?: User
}

const JWT_SECRET = process.env.JWT_SECRET

export async function singIn({ correo, contrasenia }: credentialsProps) {
  try {
    const res = await fetch(
      `http://localhost:3001/movi_lab/estudiante/login/${correo}/${contrasenia}`,
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

    const token = jwt.sign(data.data, JWT_SECRET as string)

    const cookieStore = await cookies()
    cookieStore.set({ name: 'jwt', value: token })

    return {
      ok: true,
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido en el inicio de sesión',
    }
  }
}
