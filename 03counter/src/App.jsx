
import { useState } from 'react';
import './App.css'
import Card from './components/cards';

function App() {

  const [counter, setCounter] = useState(10);

  // let counter = 5;

  const adjustCounter = (amount, counterNew, setCounterNew) =>{
    const newCounterNew = counterNew + amount;
    if (newCounterNew >= 0 && newCounterNew <= 20) {
      setCounterNew(newCounterNew);
    }
  }

  const addValue = () => {
  //  adjustCounter(1, counter, setCounter)
   setCounter(preCounter => preCounter + 1)
   setCounter(preCounter => preCounter + 1)
   setCounter(preCounter => preCounter + 1)
  }
  const removeValue = () => {
    adjustCounter(-1, counter, setCounter)
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      <div className='flex gap-3 bg-slate-100 p-5 rounded-md mt-4'>
        <button onClick={addValue}>Add Value {counter}</button>
        <button onClick={removeValue}>Remove Value {counter}</button>
      </div>
      <Card username="Pradeep" imgPath={'https://images.pexels.com/photos/28882033/pexels-photo-28882033/free-photo-of-autumn-still-life-with-pumpkins-and-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
      <Card imgPath={'https://images.pexels.com/photos/28974077/pexels-photo-28974077/free-photo-of-close-up-of-two-polar-bears-on-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
    </>
  )
}

export default App
