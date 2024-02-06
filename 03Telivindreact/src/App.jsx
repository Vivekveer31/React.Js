
import { useState } from 'react'
import './App.css'

function App() {
   const[color, setColor] = useState("white");


  return (
  
  <div className="w-full  h-screen flex items-center justify-center " style={{backgroundColor: color}} >

    <div className='w-auto  h-18 flex items-center text-white  gap-10 bg-slate-950 rounded-full ' >
      <button onClick={()=>{
        setColor('red')
      }}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "red"}}>Red</button>
      <button
       onClick={()=>{
        setColor('Orange')
      }}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "orange"}}
      >Orange</button>
      <button onClick={()=>{
        setColor('green')
      }}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "green"}}>Green</button>
      <button onClick={()=>{
        setColor('Pink')
      }}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "pink"}}>Pink</button>
      <button onClick={()=>{
        setColor('purple')
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "purple"}}>Purpule</button>
      <button onClick={()=>{
        setColor('blue')
      }}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "blue"}}>blue</button>


    </div>




  </div>
  
  




 
  )
}

export default App
