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
import { useEffect, useState } from 'react'
import * as z from 'zod'
import { getSesion } from '@/features/auth/actions/get-sesion'


const schema = z.object({
  nombres: z.union([
    z
      .string()
      .min(5, 'El nombre debe tener al menos 5 caracteres')
      .max(30, 'El nombre debe tener como máximo 30 caracteres'),
    z.literal(''),
  ]),
  apellidos: z.union([
    z
      .string()
      .min(5, 'El apellido debe tener al menos 5 caracteres')
      .max(30, 'El apellido debe tener como máximo 30 caracteres'),
    z.literal(''),
  ]),
  correo: z.email('El correo no es válido').optional(),
  numero_telefonico: z.union([
    z
      .string()
      .min(10, 'El número no es válido')
      .max(10, 'El número no es válido'),
    z.literal(''),
  ]),
  contrasenia: z.union([
    z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(12, 'La contraseña debe tener como máximo 12 caracteres'),
    z.literal(''),
  ]),
})

type FormFields = z.infer<typeof schema>

type Sesion = {
  id: number
  nombres: string
  apellidos: string
  email: string
  numero_telefonico: string
  contrasenia: string
}

export default function Page() {
  const [errorRegister, setErrorRegister] = useState(false)
  const [data, setData] = useState<Sesion | null>()
  const [errorMessage, setErrorMessage] = useState('')

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

  useEffect(() => {
    async function fectData() {
      const response = await getSesion()

      if (response.ok) {
        setData(response.sesion)
      }
    }
    fectData()
  }, [])

  async function onSubmit(values: FormFields) {
    console.log('\n\n\n\n\n\n\n');
    console.log('Llega a la funcion onSubmit');
    console.log('\n\n\n\n\n\n\n');
    // const response = await updateProfile({
    //   id: data?.id ?? 0,
    //   nombres: values.nombres || data?.nombres || 'pailas',
    //   apellidos: values.apellidos || data?.apellidos || 'pailas',
    //   numero_telefonico:
    //     values.numero_telefonico || data?.numero_telefonico || 'pailas',
    //   contrasenia: values.contrasenia || data?.contrasenia || 'pailas',
    // })

    // if (!response.ok) {
    //   setErrorRegister(true)
    //   setErrorMessage(response.error ?? 'Error desconocido')
    // }

    // form.reset()
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
          <Form {...form} >
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
                        placeholder={data?.nombres}
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
                        placeholder={data?.apellidos}
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
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    value={data?.email ?? ''}
                    disabled
                    className="bg-gray-100 text-gray-500"
                  />
                </FormControl>
              </FormItem>
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
                        placeholder={data?.numero_telefonico}
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
                        placeholder={data?.contrasenia}
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
                  <AlertTitle>Eror al Actualizar los datos</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              <div className="flex items-end">
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
