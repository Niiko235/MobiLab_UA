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

import Latex from 'react-latex-next';

export default function Page() {
  return (
    <div className='text-sky-600 text-2xl'>
      <Latex>{`$$\\frac{a}{b}$$`}</Latex>
    </div>
  )
}
