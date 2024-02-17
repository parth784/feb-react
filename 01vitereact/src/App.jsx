import Chai from "./chai"

function App() {
 
  const name="Parth Tammiwar"

  return (
   <>
   <h1>chai aur raect with {name}</h1>
   <Chai/>
   <h3>react gives the power to render elements of jsx just like normal tags like br or image etc. Hence we are able to make custom tags ex app</h3>
   </>
  )
}

// note in curly braces we only write evaluated expression of js , not js as whole
//as the render function only knows objects in its own decleration in React.createElement and this code is injected by babble the bundler/transpiler

export default App
