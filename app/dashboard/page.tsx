// export default function Page(){
//     return(
//        <div className="flex justify-center items-center h-screen">
//         <iframe
//             src="/games/prueba/index.html"
//             width="800"
//             height="600"
//             className="border rounded-lg shadow-lg"
//         />
//     </div>
//     )
// }

// import Latex from 'react-latex-next';

export default function Page() {
  return (
    <div className='p-6 h-full gap-6'>
      {/* <Latex>{`$$\\frac{a}{b}$$`}</Latex> */}
      <header className='flex flex-col gap-2'>
        <h1 className='font-bold text-3xl'>¡Bienvenido de nuevo! 👋</h1>
        <h3 className='text-gray-500 font-semibold'>Continúa tu aprendizaje en física</h3>
      </header>
      <section className=''>
        <div>
          <h2>Partidas jugadas</h2>
        </div>
      </section>
    </div>
  )
}
