'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as z from 'zod'

const schema = z.object({
  nombres: z
    .string()
    .nonempty('Los nombres son obligatorios')
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(30, 'El nombre debe tener como máximo 30 caracteres'),
  apellidos: z
    .string()
    .nonempty('Los apellidos son obligatorios')
    .min(5, 'El apellido debe tener al menos 5 caracteres')
    .max(30, 'El apellido debe tener como máximo 30 caracteres'),
  correo: z
    .email('El correo no es válido')
    .nonempty('El correo es obligatorio'),
  numero_telefonico: z
    .string()
    .min(10, 'El número no es válido')
    .max(10, 'El número no es válido'),
  contrasenia: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(12, 'La contraseña debe tener como máximo 12 caracteres'),
})

type FormFields = z.infer<typeof schema>
export default function Page() {
  const [errorRegister, setErrorRegister] = useState(false)

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombres: '',
      apellidos: '',
      correo: '',
      numero_telefonico: '',
      contrasenia: '',
    },
  })

  async function onSubmit(values: FormFields) {
    console.log('uuhhhhhhh una diva virutal')
  }

  return (
    <div className="flex flex-col p-3 w-full gap-4">
      <header>
        <h1 className="font-bold text-2xl">Información Personal 👤</h1>
        <h3 className="text-gray-500 font-semibold">
          Gestiona tus datos personales
        </h3>
      </header>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <h1>Datos personales del estudiante</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-wrap gap-4"
            >
              <FormField
                control={form.control}
                name="nombres"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        form.formState.errors.nombres ? 'text-destructive' : ''
                      }
                    >
                      Nombres
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tus nombres"
                        {...field}
                        className={
                          form.formState.errors.nombres
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apellidos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        form.formState.errors.apellidos
                          ? 'text-destructive'
                          : ''
                      }
                    >
                      Apellidos
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tus apellidos"
                        {...field}
                        className={
                          form.formState.errors.apellidos
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="correo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        form.formState.errors.correo ? 'text-destructive' : ''
                      }
                    >
                      Correo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu.email@udla.edu.co"
                        {...field}
                        className={
                          form.formState.errors.correo
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numero_telefonico"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        form.formState.errors.numero_telefonico
                          ? 'text-destructive'
                          : ''
                      }
                    >
                      Número Telefónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: 3001234567"
                        {...field}
                        type="number"
                        className={
                          form.formState.errors.numero_telefonico
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contrasenia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        form.formState.errors.contrasenia
                          ? 'text-destructive'
                          : ''
                      }
                    >
                      Contraseña
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Crea una contraseña"
                        type="password"
                        {...field}
                        className={
                          form.formState.errors.contrasenia
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {errorRegister && (
                <Alert variant={'destructive'}>
                  <AlertTitle>Eror al registrarse</AlertTitle>
                  <AlertDescription>
                    Corrio un error al registrarse en la pagina, intentelo
                    nuevamente.
                  </AlertDescription>
                </Alert>
              )}

              <div className='flex items-end'>
                <Button
                  type="submit"
                  className="w-46 bg-purple-600"
                  disabled={form.formState.isSubmitting}
                >
                  Editar información
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
