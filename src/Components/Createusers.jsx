import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const Createusers = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()
    let nameData=(e)=>{
      setName(e.target.value)
    }
    let salaryData=(e)=>{
      setSalary(e.target.value)
    }
    let companyData=(e)=>{
      setCompany(e.target.value)
    }
    let btn=(e)=>{
      e.preventDefault();
      let payLoad={name,salary,company}
      axios.post("http://localhost:3000/content",payLoad)
      .then(()=>{
          console.log("data has been Added");
      })
      .catch(()=>{
        console.log("something fishy");
      })
      navigate("/users")
    }
  return (
    <section id={style.mainForm}>
      <form action="">
        <table>
            <tr>
              <th colSpan="2"><h1>Employee details</h1></th>
            </tr>
            <tr>
              <td><label >Name  :</label></td>
            <td> <input type="text" value={name} onChange={nameData}/></td>
            </tr>
            <tr>
              <td><label >Salary  :</label></td>
            <td> <input type="text" value={salary} onChange={salaryData}/></td>
            </tr>
            <tr>
              <td><label >Company  :</label></td>
            <td> <input type="text" value={company} onChange={companyData}/></td>
            </tr>
            <tr>
                <td colSpan="2" onClick={btn} id={style.btn}><h2>Submit</h2></td>
            </tr>
          </table>
      </form>
    </section>
  )
}

export default Createusers