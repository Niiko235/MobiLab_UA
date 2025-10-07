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
import { singIn } from '@/MySql/sql/sing-in'
import {useRouter} from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const schema = z.object({
  email: z
    .string()
    .email({ message: 'El correo no es válido' })
    .nonempty('El correo es obligatorio'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(12, 'La contraseña debe tener como máximo 12 caracteres'),
})

type FormFields = z.infer<typeof schema>

export function LoginForm() {
  const [open, setOpen] = useState(false)
  const [errorSesion, setErrorSesion] = useState(false)

  const router = useRouter()

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: FormFields) {
    const response = await singIn({
      email: values.email, 
      password: values.password,
    })

    if (!response.ok) {
      setErrorSesion(true)
    } else {
      setOpen(false)
      router.push('/dashboard')
    }
  }

  return (
    <AlertDialog open={open}>
      <Button
        size="lg"
        variant="outline"
        className="text-xl font-bold hover:text-purple-600"
        onClick={() => setOpen(true)}
      >
        Iniciar sesión
      </Button>

      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="text-center">
            <AlertDialogTitle>Iniciar sesión</AlertDialogTitle>
          </div>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
                      placeholder="tuemail@ejemplo.com"
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

            {errorSesion && (
              <Alert variant={'destructive'}>
                
                <AlertTitle>Eror al iniciar sesión</AlertTitle>
                <AlertDescription>
                  
                  Las credenciales no coinciden con las de ningun usuario
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#586ed1] hover:to-[#ba81f3]"
              disabled={form.formState.isSubmitting}
            >
              Iniciar Sesión
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
