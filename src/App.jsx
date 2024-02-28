import { useState } from 'react'


function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
    <div className='w-full h-screen'
    style={{backgroundColor: color}}>
    </div>
    <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-lg '>
        <button onClick={()=> setColor("red")} className='outline-none px-8 py-2 rounded-lg text-white shadow-lg'
        style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=> setColor("black")}  className='outline-none px-8 py-2 rounded-lg text-white shadow-lg'
        style={{backgroundColor:"black"}}>black</button>
        <button  onClick={()=> setColor("yellow")}  className='outline-none px-8 py-2 rounded-lg text-black shadow-lg'
        style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
    </div>
    </>
  )
}

export default App
