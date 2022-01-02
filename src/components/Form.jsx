import { useState,useRef } from "react"

export const Form =()=>{
   var [form, setForm] = useState({
      Name:"",
      Age:"",
      Address:"",
      Department:"",
      Salary:"",
      Married:"",
      NotMarried:""
    })
const [array ,setArray] =useState([])
//const ref= useRef(null)

    const handleChange = (e)=>{
      //  console.log(ref.current.files[0])
       // console.log(e.target.value,e.target.name)
        var {name , value ,checked,type} = e.target
        value = type === "checkbox"? checked:value
        setForm({...form, [name]:  value})
    }

    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    //     console.log(form)
    //     console.log("array-",[...array,form])
    //     setArray([...array,form])
    // }
    var { Name,Age,Address,Department,Salary,Married,NotMarried  } = form

    const postArray =(e)=>{
        e.preventDefault()
       
    const payload= form
    console.log(payload)
      fetch("http://localhost:3001/array",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "content-type":"application/json"
          }
      })
    }


    return(
        <div >
            <form onSubmit={postArray}>
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
                <input onChange={handleChange} name="Married" type="checkbox" checked={Married}/> 
                <label for="Married">Married</label>
                <input onChange={handleChange} name="NotMarried" type="checkbox" checked={NotMarried}/> 
                <label for="NotMarried">NotMarried</label>
                <br/>
               
                <input type="submit"/>
            </form>
            {array.map((e)=>(
                <div style={{
                    display:"flex",
                    border:"1px solid black",
                    justifyContent: "space-between",
                }}>
                    <h3> Name:{e.Name}</h3>
                    <h3>Age:{e.Age}</h3>
                    <h3> address:{e.Address}</h3>
                    <h3> Department:{e.Department}</h3>
                    <h3> Salary:{e.Salary}</h3>
                    <h3> {e.Married === true ? "Married":"NotMarried"}</h3>
                </div>
            ))}
        </div>
    )
}
