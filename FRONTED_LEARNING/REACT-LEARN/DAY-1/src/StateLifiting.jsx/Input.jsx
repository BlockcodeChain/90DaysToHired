

const Input = ({value,setvalue}) => {
  return (
    <div>
        <input type="text" placeholder="enter your name " value={value} onChange={(e)=>setvalue(e.target.value)} />
    </div>
  )
}

export default Input