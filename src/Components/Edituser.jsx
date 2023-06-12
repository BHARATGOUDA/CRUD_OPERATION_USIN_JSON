import axios from 'axios'
import React, { useEffect } from 'react'
import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"

const Edituser = () => {
          let [name,setName]=useState("")
            let [salary,setSalary]=useState("")
            let [company,setCompany]=useState("")
            let {index}=useParams()
            let navigate=useNavigate()
            console.log(index);
            useEffect(()=>{
              axios.get(`http://localhost:3000/content/${index}`)
              .then((Response)=>{
                setName(Response.data.name)
                setSalary(Response.data.salary)
                setCompany(Response.data.company)
              })
            },[])
            let btn=(e)=>{
              e.preventDefault()
              let payload={name,salary,company}
              axios.put(`http://localhost:3000/content/${index}`,payload)
              .then(()=>{
                console.log("data has been update");              
              })
              navigate("/users")
            }
            let nameData=(e)=>{
              setName(e.target.value)
            }
            let salaryData=(e)=>{
              setSalary(e.target.value)
            }
            let companyData=(e)=>{
              setCompany(e.target.value)
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
                <td colSpan="2" id={style.btn} onClick={btn}><h3>UPDATE</h3></td>
            </tr>
          </table>
      </form>
    </section>  )
}

export default Edituser