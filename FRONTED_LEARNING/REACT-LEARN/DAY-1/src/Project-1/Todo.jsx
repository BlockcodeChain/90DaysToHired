import Heading from "./Heading"
import { useState } from "react"
import Date from "./Date"
import Input from "./Input"
const Todo = () => {
    const [dark,setdark]=useState(true)
  return (
    <div className={`min-h-screen flex-col gap-5px ${!dark?"bg-black":"bg-white"} ${dark?"text-white":"text-black"}`}>
     <Heading dark={dark} setdark={setdark}/>
     <Date />
     <Input dark={dark}/>
    </div>
  )
}

export default Todo