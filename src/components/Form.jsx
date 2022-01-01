import { useState } from "react"

export const Form =()=>{
    const [form, setForm] = useState({
      Name:"",
      Age:"",
      Address:"",
      Department:"",
      Salary:"",
    })
const [array ,setArray] =useState([])

    const handleChange = (e)=>{
       // console.log(e.target.value,e.target.name)
        const {name , value} = e.target
        setForm({...form, [name]: checkbox ? e.target.checked : value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(form)
        console.log("array-",[...array,form])
        setArray([...array,form])
    }
    return(
        <div >
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={handleChange} name="Name" type="text" placeholder="Enter Name" />
                <br/>
                <label>Age: </label>
                <input onChange={handleChange} name="Age" type="number" placeholder="Enter Age" /> 
                <br/>
                <label>Address: </label>
                <input onChange={handleChange} name="Address" type="text" placeholder="Enter Address" /> 
                <br/>
                <label>Department: </label>
                <select name="Department" onChange={handleChange} type="select" >
                        <option value="">--Please choose an option--</option>
                        <option value="science">science</option>
                        <option value="chemistry">chemistry</option>
                        <option value="english">english</option>
                        <option value="hindi">hindi</option>
                       
                </select>
                <br/>
                <label>Salary: </label>
                <input onChange={handleChange} name="Salary" type="number" placeholder="Enter Salary" /> 
                <br/>
                <label>MaritalState: </label>
                <input onChange={handleChange} name="Married" type="checkbox" value="Married"/> 
                <label for="Married">Married</label>
                <input onChange={handleChange} name="NotMarried" type="checkbox" value="true"/> 
                <label for="NotMarried">NotMarried</label>
                <br/>
                <input type="submit"/>
            </form>
            <div >
                
            </div>
        </div>
    )
}