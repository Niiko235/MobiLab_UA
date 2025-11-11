import { Button } from '@/components/ui/button'
import { LoginForm } from '@/features/auth/components/login-form'
import { RegisterForm } from '@/features/auth/components/register-form'

export default function Page() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gradient-to-r from-[#667eea] to-[#764ba2]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 text-center md:flex-row md:items-center md:justify-between md:px-10 lg:px-28 lg:text-left">
            <div className="flex items-center justify-center gap-3 text-2xl font-bold text-white md:justify-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl">🎓</span>
              <h1>MoviLab UA</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
              <LoginForm />
              <RegisterForm />
            </div>
          </div>
        </nav>
        <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center text-white sm:px-10 md:py-24">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl lg:text-7xl">
            Refuerza tu <br className="hidden lg:block" /> conocimiento en física
          </h1>
          <p className="max-w-2xl text-lg font-semibold sm:text-xl lg:text-2xl">
            Plataforma educativa interactiva diseñada especialmente para estudiantes de la universidad de la Amazonía. Aprende física jugando e interactuando con simulaciones.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="w-full max-w-xs text-lg font-bold text-purple-600 transition-transform duration-200 hover:-translate-y-1 hover:bg-purple-600 hover:text-white sm:w-auto sm:text-xl"
          >
            Comenzar ahora 🚀
          </Button>
        </section>
      <footer className="w-full bg-white px-6 py-16 text-center sm:px-10 lg:px-20">
        <h1 className="text-3xl font-bold sm:text-4xl">¿Por qué elegir MoviLab UA?</h1>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-64 flex-col justify-center gap-6 rounded-2xl bg-blue-50 p-6 text-start">
            <span className="text-4xl">🎮</span>
            <h1 className="text-2xl font-bold">Aprendizaje Interactivo</h1>
            <p>Juegos y simulaciones que hacen el aprendizaje divertido y efectivo</p>
          </div>
          <div className="flex h-64 flex-col justify-center gap-6 rounded-2xl bg-green-50 p-6 text-start">
            <span className="text-4xl">📚</span>
            <h1 className="text-2xl font-bold">Documentación Completa</h1>
            <p>Teoría y fórmulas organizadas por temas para consulta rápida</p>
          </div>
          <div className="flex h-64 flex-col justify-center gap-6 rounded-2xl bg-purple-50 p-6 text-start">
            <span className="text-4xl">🫂</span>
            <h1 className="text-2xl font-bold">Sistema de Records</h1>
            <p>Sigue tu progreso y compite con tus compañeros</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
