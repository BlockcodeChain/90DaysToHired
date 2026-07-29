import {useState} from "react"
import Input from "./Input"
import OtherSibling from "./OtherSibling"

const Display = () => {
    const [value,setvalue] =useState("")
  return (
   <div className="text-white ">
    <h2>{value}</h2>
     <Input value={value} setvalue={setvalue} />
     <OtherSibling value={value}/>
   </div>
  )
}

export default Display