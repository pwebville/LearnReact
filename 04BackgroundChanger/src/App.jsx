import { useState } from 'react'

import './App.css';

function App() {
 
  const [color, setColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'violet', 'olive', 'grey', 'black'];

  return (
    <>
      <div className="w-screen h-screen duration-200" style={{ backgroundColor:color }}></div>
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-8'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-xl p-4'>
          {colors.map((clr) => (
            <>
              <button onClick={() => setColor(clr)} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor: clr }}>
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
              </button>
            </>
          ))}
         
        </div>
      </div>
    </>
  )
}

export default App
