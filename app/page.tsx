import { Button } from '@/components/ui/button'
import { LoginForm } from '@/features/auth/components/login-form'

export default function Page() {
  return (
    <>
      <div className="min-h-screen  flex flex-col ">
        <nav className="bg-gradient-to-r from-[#667eea] to-[#764ba2] h-24 flex items-center">
          <div className="ml-28 flex w-1/2 text-3xl text-center gap-2">
            <span className=" size-10 bg-white rounded-full">🎓</span>
            <h1 className="font-bold text-white">MoviLab UA</h1>
          </div>
          <div className="mr-28 flex w-1/2 gap-8 justify-end">
            <LoginForm />
            <Button
              variant="outline"
              size="lg"
              className="text-white bg-[#50178d] text-xl"
            >
              Registrarse
            </Button>
          </div>
        </nav>
        <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] h-150 flex items-center justify-center flex-col text-center gap-8 text-white">
          {/* <div className="w-4xl flex flex-col items-center  flex-co gap-8 text-white"> */}
            <h1 className="font-bold text-7xl">
              Refuerza tu <br /> conocimiento en física
            </h1>

            <p className="text-2xl font-bold">
              Plataforma educativa interactiva diseñada especialmente para{' '}
              <br /> estudiantes de la universidad de la Amazonía. Aprende
              física <br /> jugando e interactuando con simulaciones
            </p>

            <Button
              variant="outline"
              size="lg"
              className="text-purple-600 font-bold text-xl hover:bg-purple-600 hover:text-white transition-transform duration-200 hover:-translate-y-1"
            >
              Comenzar ahora 🚀
            </Button>
          {/* </div> */}
        </section>
      <footer className="min-h-96 w-full bg-white text-center pb-16">
        <h1 className='mt-10 font-bold text-4xl'>¿Por qué elegir MoviLab UA?</h1>
        <div className='flex flex-wrap justify-center items-center gap-8 mt-10'>
          <div className='w-96 bg-blue-50 rounded-2xl h-64 flex flex-col justify-center gap-6 p-4'>
            <span className='text-4xl'>🎮</span>
            <h1 className='font-bold text-2xl'>Aprendizaje Interactivo</h1>
            <p>Juegos y simulaciones que hacen el aprendizaje divertido y efectivo</p>
          </div>
          <div className='w-96 bg-green-50 rounded-2xl h-64 flex flex-col justify-center gap-6 p-4'>
            <span className='text-4xl'>📚</span>
            <h1 className='font-bold text-2xl'>Documentación Completa</h1>
            <p>Teoría y fórmulas organizadas por temas para consulta rápida</p>
          </div>
          <div className='w-96 bg-purple-50 rounded-2xl h-64 flex flex-col justify-center gap-6 p-4'>
            <span className='text-4xl'>🫂</span>
            <h1 className='font-bold text-2xl'>Sistema de Records</h1>
            <p>Sigue tu progreso y compite con tus compañeros</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
