'use server'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

type Sesion = {
    id: number;
    first_name: string;
    email: string;
}

export async function getSesion() {
  try {
    const cookiesStore = await cookies()

    const jwtSesion = cookiesStore.get('jwt')


    if (!jwtSesion) {
      throw new Error('No se encontró el token de validación')
    }

    const token = jwt.verify(jwtSesion.value, process.env.JWT_SECRET as string) as jwt.JwtPayload & Sesion;

    if (!token) {
      throw new Error('Token inválido')
    }


    const sesion : Sesion = {
      id: token.id,
      first_name: token.first_name,
      email: token.email
    }

    return {
      ok: true,
      sesion
    }
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : 'Error al obtener la sesión',
    }
  }
}
