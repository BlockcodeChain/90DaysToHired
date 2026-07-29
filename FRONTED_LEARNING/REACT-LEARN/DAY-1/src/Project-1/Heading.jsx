
import { FiSun } from "react-icons/fi";
import { MdOutlineModeNight } from "react-icons/md";
const Heading = ({dark,setdark}) => {
  
    const handlebtn=()=>{
        setdark(!dark)
    }
  return (
    <div className={` flex justify-center item-center }`}>
        <h1 className={`${dark?"text-black":"text-white"} font-bold text-4xl p-4`}>TODO APP</h1>
        <div className="absolute right-3 top-4">
            <button className={`cursor-pointer rounded-full w-10 h-10 flex items-center justify-center  ${!dark?"bg-amber-400":"bg-white/80"} shadow-md shadow-gray-400 hover:inset-1 transition-all duration-200` } onClick={handlebtn}>
                {!dark ?<FiSun size={20} className="text-yellow-100 "  />:<MdOutlineModeNight size={20} className="text-gray-700 " />}
            </button>
        </div>
    </div>
  )
}

export default Heading



