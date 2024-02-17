import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=5

  function addValue(){
    console.log("clicked",Math.random()) 
    counter=counter+1

  }

  return (
   <>
     <h1>chai aur react</h1>
     <h2>count value: {counter}</h2>
     <br/>
     <button onClick={addValue}>add value</button>
     <button >sub value</button>
   </>
  )
}

export default App
