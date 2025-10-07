'use server'
import { RowDataPacket } from "mysql2"
import { createMySqlClient } from "../client/create-mysql-client"
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'


type credentialsProps = {
    email: string,
    password: string
}

type User = {
    id: number,
    first_name: string,
    email: string,
}

// agregar onboarding

const JWT_SECRET = process.env.JWT_SECRET 

// validar si el correo existe 
// hashear la contraseña 
// consulta de la contraseña hasheada y el correo 


export async function singIn({email, password}: credentialsProps) {
    let mysql;
    try{
        mysql = await createMySqlClient();

        const [response] = await mysql.query<(User & RowDataPacket)[]>('SELECT id, first_name, email FROM students WHERE email = ? AND password = ?', [email, password]);

        if(response.length === 0){
            throw new Error('Credenciales invalidas');
        }


        const token = jwt.sign({'id': response[0].id, 'first_name' : response[0].first_name, email}, JWT_SECRET as string);


        const cookieStore = await cookies();
        await cookieStore.set({name: 'jwt', value: token})


        return {
            ok: true,
        }



    }catch(error){
        console.log(error);
        return{
            ok: false,
            error: error instanceof Error ? error.message : 'Error desconocido en el inicio de sesión'
        }
        
    }finally{
        if(mysql){
            await mysql.end();
        }
    }
}