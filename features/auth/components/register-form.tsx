'use client'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const schema = z.object({
  first_name: z
    .string()
    .nonempty('Los nombres son obligatorios')
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(30, 'El nombre debe tener como máximo 30 caracteres'),
  last_name: z
    .string()
    .nonempty('Los apellidos son obligatorios')
    .min(5, 'El apellido debe tener al menos 5 caracteres')
    .max(30, 'El apellido debe tener como máximo 30 caracteres'),
  email: z
    .email("El correo no es válido")
    .nonempty('El correo es obligatorio'),
  phone_number: z
    .string()
    .min(10, 'El número no es válido')
    .max(10, 'El número no es válido'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(12, 'La contraseña debe tener como máximo 12 caracteres'),
})

type FormFields = z.infer<typeof schema>

export function RegisterForm() {
  const [open, setOpen] = useState(false)

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
    },
  })

  const onSubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <AlertDialog open={open}>
      <Button
        size="lg"
        variant="outline"
        className="text-white bg-[#50178d] text-xl font-bold"
        onClick={() => setOpen(true)}
      >
        Registrarse
      </Button>

      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="text-center">
            <AlertDialogTitle>Registro de Estudiante</AlertDialogTitle>
          </div>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={
                      form.formState.errors.first_name ? 'text-destructive' : ''
                    }
                  >
                    Nombres
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tus nombres"
                      {...field}
                      className={
                        form.formState.errors.first_name
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
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={
                      form.formState.errors.last_name ? 'text-destructive' : ''
                    }
                  >
                    Apellidos
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tus apellidos"
                      {...field}
                      className={
                        form.formState.errors.last_name
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={
                      form.formState.errors.email ? 'text-destructive' : ''
                    }
                  >
                    Correo
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="tu.email@udla.edu.co"
                      {...field}
                      className={
                        form.formState.errors.email
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
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={
                      form.formState.errors.phone_number
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
                      type='number'
                      className={
                        form.formState.errors.phone_number
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={
                      form.formState.errors.password ? 'text-destructive' : ''
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
                        form.formState.errors.password
                          ? 'border-destructive focus-visible:ring-destructive'
                          : ''
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#586ed1] hover:to-[#ba81f3]"
              disabled={form.formState.isSubmitting}
            >
              Registrarse
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                form.reset()
                setOpen(false)
              }}
            >
              Cancelar
            </Button>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
