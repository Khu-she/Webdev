import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        <NavLink className="navbar-brand" to="/">
          My Website
        </NavLink>

        <div className="navbar-nav">

          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/product/1">
            Product 1
          </NavLink>

          <NavLink className="nav-link" to="/product/2">
            Product 2
          </NavLink>

          <NavLink className="nav-link" to="/product/3">
            Product 3
          </NavLink>

        </div>

      </div>
    </nav>
  )
}

export default Navbar