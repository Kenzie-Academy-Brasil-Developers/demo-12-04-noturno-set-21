const Input = ({setUpper}) =>{
    return (
    <input type="text" onChange={(e) => setUpper(e.target.value)}/>
    )
}

export default Input