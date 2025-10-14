'use server'

import { createMySqlClient } from '@/MySql/client/create-mysql-client'
import { ResultSetHeader } from 'mysql2'

type registerProps = {
  nombres: string
  apellidos: string
  correo: string
  numero_telefonico: string
  contrasenia: string
}

export async function registerStudent({
  nombres,
  apellidos,
  correo,
  numero_telefonico,
  contrasenia,
}: registerProps) {
  let mysql
  try {
    mysql = await createMySqlClient()

    const [response] = await mysql.execute<ResultSetHeader>('INSERT INTO estudiantes (nombres, apellidos, correo, numero_telefonico, contrasenia) VALUES (?, ?, ?, ?, ?)', [nombres, apellidos, correo, numero_telefonico, contrasenia])

    if(response?.affectedRows != 1){
        throw new Error("Error al intentar registrar el nuevo usuario")
    }

    console.log('\n\n\n\n\n\n\n');
    console.log('Id de la insercion en registro');
    console.log(response.insertId);
    console.log('\n\n\n\n\n\n\n');

    return{
        ok: true
    }

  } catch(error){
    console.log(error)
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido en el registro',
    }
  } finally {
    if (mysql) {
      await mysql.end()
    }
  }
}
