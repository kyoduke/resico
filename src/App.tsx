import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(num + count);
    }, 1000) 

    return () => clearInterval(interval);
  })
  
  return (
    <div className='flex flex-col items-center'>     
      <h1 className='text-resico-dark-blue text-5xl'>Really Simple Counter</h1>
      <p className='m-5 text-resico-light-blue'>A really simple counter application written in Typescript and ReactJS</p>
      <div className='rounded-lg bg-resico-dark-blue text-white w-40 h-20 flex justify-center items-center'><p className='text-5xl'>{count}</p></div>
      <div className='mt-1 mb-4'>Current: {num < 0 ? num : `+${num}`}\s</div>
      <div className=' flex w-40 justify-around '>
        <button className='' onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setNum(num-1)}>-1\s</button>
        <button className='' onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setNum(num+1)}>+1\s</button>
      </div>

    </div>
    
  )
}

export default App

// text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800