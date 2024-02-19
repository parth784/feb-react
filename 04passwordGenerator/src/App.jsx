import { useState, useCallback,useEffect,useRef } from 'react'


function App() {
 const [length,setLength]=useState(8)
 const [numAllowd,setNumAllowd]=useState(false)
 const [charAllowd,setCharAllowd]=useState(false)
 const [password,setPassword]=useState("")

 //useRef
 const passwordRef = useRef(null)

 const copyPasswordToClip = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,999);
  //if we do not use the ref here then also it would have been copied
  window.navigator.clipboard.writeText(password)
 },[password])
 

//in usecallback we are trying to optimise the thing, saving it in cashmemory
 const passGen=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowd) str+="0123456789"
  if(charAllowd) str+="!@#$%^&*()-_=+[]{}|;:',.<>/?`"
  for (let i= 0; i < length; i++) {
         let char=Math.floor(Math.random()*str.length+1)
         pass+=str.charAt(char)
    
  }
  setPassword(pass)

 },[length,numAllowd,charAllowd,setPassword])


 //whenever we need to rerender the thing when the array parameters are changed
 useEffect(()=>{
  passGen()
 },[length,numAllowd,charAllowd])

  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
       <input 
       typr="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}  
       />
       <button 
       className='outline-none bg-blue-400  text-white px-3 py-0.5 shrink-0'
       onClick={passGen}>Change</button>
       <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       //onClick={passGen}//one of the methood
       onClick={copyPasswordToClip}
        >copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)}}
           />
           <label>Length:{length}</label>
       </div>
       <div className='flex items-center gap-x-1'>
           <input
           type="checkbox"
           defaultChecked={numAllowd}
           id="numInput"
           onChange={()=>{
            setNumAllowd((prev)=>!prev)
           }}
           />
            <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowd}
              id="characterInput"
              onChange={() => {
                  setCharAllowd((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
   </div>
  )
}

export default App
