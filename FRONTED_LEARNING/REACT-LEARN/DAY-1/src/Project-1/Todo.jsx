import Heading from "./Heading"
import { useState } from "react"
import DateTime from "./DateTime"
import Input from "./Input"
const Todo = () => {
    const [dark,setdark]=useState(true)
  return (
    <div className={`min-h-screen flex-col gap-5px ${!dark?"bg-black":"bg-white"} ${dark?"text-white":"text-black"}`}>
     <Heading dark={dark} setdark={setdark}/>
     <DateTime dark={dark}/>
     <Input dark={dark}/>
    </div>
  )
}

export default Todo