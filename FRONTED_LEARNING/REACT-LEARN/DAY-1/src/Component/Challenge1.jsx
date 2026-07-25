
import {useState} from "react"
const Challenge1 = () => {
    // const user=[
    //     {name:"Ishi" ,age:21},
    //     {name:"Swaysa" ,age:18},
    //     {name:"gola" ,age:12},
    //     {name:"kiwi" ,age:25},
    // ]

    const [user,setuser] =useState([{name:"Ishi" ,age:21},
        {name:"Swaysa" ,age:18},
        {name:"gola" ,age:12},
        {name:"kiwi" ,age:25}])
  return (
    
    <div className="min-h-screen text-white flex items-center justify-center flex-col gap-8 text-3xl">
        {user.map((item)=>(
            <h2>{item.name} - {item.age}</h2>
        ))}
    </div>
  )
}

export default Challenge1