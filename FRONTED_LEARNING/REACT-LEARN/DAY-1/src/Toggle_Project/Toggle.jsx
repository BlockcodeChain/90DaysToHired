
import {useState} from "react"
const Toggle = () => {
  const  [dark ,setdark]=useState(true);

  const btnclick=()=>{
    setdark(!dark);
  }
  return (
   <div className={`min-h-screen ${dark ? "bg-black":"bg-white"} flex justify-center items-center `}>
    <div className={`rounded-full bg-gray-400 w-60 h-24 inset-1 shadow-md shadow-gray-500 px-1 flex items-center ${dark?"justify-start":"justify-end"}`}>
        <button onClick={btnclick} className={`w-20 h-20 rounded-full transition-all duration-500 cursor-pointer shadow-sm shadow-blue-50 inset-0.5 ${!dark?"bg-white":"bg-black"} ${dark?"text-white":"text-black"} font-bold  px-1`}>{!dark ?"DAY":"NIGHT"}</button>
    </div>
      

    </div>

  )
}

export default Toggle