import { RowDataPacket } from 'mysql2'
import { createMySqlClient } from './client/create-mysql-client'


type Row = {
    currentTime: string
}

export async function select() {
  let mysql
  try {
    mysql = await createMySqlClient();

    const [rows] = await mysql.query<(RowDataPacket & Row)[]>('SELECT NOW() AS currentTime')

    return {
      ok: true,
      data: {
        currentTime: rows[0].currentTime,
      },
    }
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Error desconocido en el select',
    }
  } finally {
    if (mysql) {
      await mysql.end()
    }
  }
}
