'use server'
import { RowDataPacket } from 'mysql2'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { createMySqlClient } from '@/MySql/client/create-mysql-client'

type credentialsProps = {
  correo: string
  contrasenia: string
}

type User = {
  id: number
  first_name: string
  email: string
  onboarding_terminado: boolean
}

// agregar onboarding

const JWT_SECRET = process.env.JWT_SECRET

// validar si el correo existe
// hashear la contraseña
// consulta de la contraseña hasheada y el correo

export async function singIn({ correo, contrasenia }: credentialsProps) {
  let mysql
  try {
    mysql = await createMySqlClient()

    const [response] = await mysql.query<(User & RowDataPacket)[]>(
      'SELECT id, nombres, correo, onboarding_terminado FROM estudiantes WHERE correo = ? AND contrasenia = ?',
      [correo, contrasenia]
    )

    if (response.length === 0) {
      throw new Error('Credenciales invalidas')
    }

    const token = jwt.sign(
      {
        id: response[0].id,
        first_name: response[0].nombres,
        email: response[0].correo,
        onboarding_termiando: response[0].onboarding_terminado,
      },
      JWT_SECRET as string
    )

    const cookieStore = await cookies()
    await cookieStore.set({ name: 'jwt', value: token })

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
  } finally {
    if (mysql) {
      await mysql.end()
    }
  }
}
