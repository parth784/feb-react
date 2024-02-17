import './App.css'
import  Card from './components/flap.jsx' 
import Mac from './components/mac.jsx'

function App() {
  let newArr=[1,2,3]
  let obj={
    name:"parth Tammiwar",
    age:20
  }

  let obj2={
    gender:"male",
    location:"nagpur"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>hello tailwind</h1>
      <Card channelName="chaiAurCode" newArr={newArr} newObj={obj}/>
      <Mac obj={obj2} field="cse-webdeveloper" interest="cooking"/>
      

    </>
  )
}

export default App
