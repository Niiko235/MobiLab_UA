'use client'

import { useEffect, useState } from 'react'
import { email, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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
import { getSesion } from '@/features/auth/actions/get-sesion'
import { updateProfile } from '@/features/auth/actions/update-profile'

const schema = z.object({
 nombres: z
    .string()
    .nonempty('Los nombres son obligatorios')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(30, 'El nombre debe tener como máximo 30 caracteres'),
  apellidos: z
    .string()
    .nonempty('Los apellidos son obligatorios')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
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

type Sesion = {
  id: number
  nombres: string
  apellidos: string
  email: string
  numero_telefonico: string
  contrasenia: string
}

export default function Page() {
  const [sesion, setSesion] = useState<Sesion | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const router = useRouter()

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
    ;(async () => {
      const response = await getSesion()

      if (response.ok && response.sesion) {
        const sesionData = response.sesion
        setSesion(sesionData)
        form.reset({
          nombres: sesionData.nombres ?? '',
          apellidos: sesionData.apellidos ?? '',
          correo: sesionData.email ?? '',
          numero_telefonico: sesionData.numero_telefonico ?? '',
          contrasenia: sesionData.contrasenia ?? '',
        })
      }
    })()
  }, [form])

  async function onSubmit(values: FormFields) {
    if (!sesion) return

    setErrorMessage(null)
    setSuccessMessage(null)

    const payload = {
      id: sesion.id,
      nombres: values.nombres || sesion.nombres,
      apellidos: values.apellidos || sesion.apellidos,
      numero_telefonico: values.numero_telefonico || sesion.numero_telefonico,
      contrasenia: values.contrasenia || sesion.contrasenia,
      email: sesion.email,
    }

    console.log(payload);
    
    const response = await updateProfile(payload)

    if (!response.ok) {
      setErrorMessage(response.error ?? 'Error al actualizar los datos.')
      return
    }

    setSuccessMessage('Información actualizada correctamente.')
    setSesion({
      ...sesion,
      nombres: payload.nombres,
      apellidos: payload.apellidos,
      numero_telefonico: payload.numero_telefonico,
      contrasenia: payload.contrasenia,
    })
    form.reset({
      nombres: payload.nombres,
      apellidos: payload.apellidos,
      numero_telefonico: payload.numero_telefonico,
      contrasenia: payload.contrasenia,
    })

    router.push('/dashboard')
     
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
                        placeholder={sesion?.nombres}
                        {...field}
                        disabled={!sesion || form.formState.isSubmitting}
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
                        placeholder={sesion?.apellidos}
                        {...field}
                        disabled={!sesion || form.formState.isSubmitting}
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
                    value={sesion?.email ?? ''}
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
                        placeholder={sesion?.numero_telefonico}
                        {...field}
                        disabled={!sesion || form.formState.isSubmitting}
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
                        placeholder={sesion?.contrasenia}
                        {...field}
                        disabled={!sesion || form.formState.isSubmitting}
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

              {errorMessage && (
                <Alert variant="destructive" className="w-full">
                  <AlertTitle>Error al actualizar los datos</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              {successMessage && (
                <Alert className="w-full bg-emerald-50 text-emerald-700">
                  <AlertTitle>Actualización exitosa</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}

              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-46 bg-purple-600"
                  disabled={!sesion || form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? 'Guardando...'
                    : 'Editar información'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
