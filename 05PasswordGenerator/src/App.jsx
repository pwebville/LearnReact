/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()-_=+\\|[]{};:/?.~>';

    for (let index = 0; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

    let num = '';

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])
  

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto mt-3'>
        <div className='flex'>
          <input type="text" value={password} className='outline-none py-1 px-3 border  w-full' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none border bg-slate-300 text-zinc-600 px-3 flex-shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} onChange={(e) =>{setLength(e.target.value)}}  />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
