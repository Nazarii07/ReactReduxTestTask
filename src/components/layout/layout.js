import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Layout = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container">
          <Link className="btn btn-primary" to="/">Blog</Link>
          <Link className="btn btn-info" to="/admin">Admin</Link>
        </div>
      </nav>
      <div className="container">
        {/* <h1 className="text-center">News List</h1>s */}
        {children}
      </div>
      <div className="d-flex justify-content-around footer-block mt-3 flex-wrap">
        <div>By Nazarii Chaban</div>
        <div>Phone:<a href="tel:0970612181">0970612181</a></div>
        <div>Skype: <a href="skype:nazarchabna87">nazarchabna87</a></div>
      </div>
    </>
  )
}

export default Layout