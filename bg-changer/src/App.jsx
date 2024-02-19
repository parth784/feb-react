import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");
  
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <h1>Backgr0und Color Changer</h1>
    <div className='flex-row bg-slate-400 '>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("red")}}>Red</button>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("green")}}>green</button>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("yellow")}}>yellow</button>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("blue")}}>blue</button>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("pink")}}>pink</button>
       <button className='border-4 hover:bg-blue-200 py-2 px-2 rounded ml-2 mr-2' onClick={()=>{setColor("purple")}}>purple</button>
    </div> 

   </div>
     
  )
}

export default App
