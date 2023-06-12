import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
const Homecrud = () => {
  return(
    <section id={style.nav}>
      <Link to="/">Create-User</Link>
      <Link to="/users">User</Link>
    </section>
  )
}

export default Homecrud