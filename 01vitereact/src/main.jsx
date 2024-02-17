import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return <h1>"i want to be as strong as my mother"</h1>
}

const anotherElement=(
    <a href="https://google.com">Visit Google</a>
)

const reactElement=React.createElement(
    "a",
    {href:"https://google.com" ,target:"_blank"},
    "click here to open google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    //<MyApp/>
   // anotherElement
   //reactElement
  
)
