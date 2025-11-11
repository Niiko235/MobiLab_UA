'use server'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

type responseType = {
  ok: boolean
  error?: Error
}

type User = {
  id: number
  nombres: string
  apellidos: string
  contrasenia: string
  numero_telefonico: string
  email: string
}

export async function updateProfile({
  id,
  nombres,
  apellidos,
  numero_telefonico,
  contrasenia,
  email,
}: User) {
  try {
    console.log('LLEGAMOSSSS UDSAFUDHFSADFIS')

    const res = await fetch(
      `${process.env.API_URL}/estudiante/actualizarPerfil`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombres,
          apellidos,
          id,
          numero_telefonico,
          contrasenia,
        }),
      }
    )

    const response: responseType = await res.json()

    if (!response.ok) {
      throw new Error(
        response.error?.message || 'Error al actualizar el perfil'
      )
    }

    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error('JWT_SECRET no definido')

    const cookieStore = await cookies()
    const cookieActual = cookieStore.get('jwt')
    if (!cookieActual) throw new Error('Sesión no encontrada')

    const payloadActual = jwt.verify(cookieActual.value, secret) as User
    const payloadActualizado = { ...payloadActual, ...{
        nombres,
        id,
        apellidos,
        numero_telefonico,
        contrasenia,
        email,
    } }

    const nuevoToken = jwt.sign(payloadActualizado, secret)

    cookieStore.set({
    name: 'jwt',
    value: nuevoToken,
  })


    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido al actualizar el perfil',
    }
  }
}
