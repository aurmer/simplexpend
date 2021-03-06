import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from "react-router-dom"


const AppNavbar = () => {
  // hook for configuring navbar mobile menu to close when clicking a link
  const [expanded, setExpanded] = React.useState(false);
  
  return (
    <Navbar expanded={expanded} expand="sm" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">
        <img id="stacked-logo" alt="logo" height="30" className="d-inline-block align-top" src={require('../img/logoStacked.png')}></img>
        <img id="long-logo" alt="logo" height="30" className="d-inline-block align-top" src={require('../img/logoLong.png')}></img>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <NavLink onClick={() => setExpanded(false)} className="nav-link" to="/new-expense">New Expense</NavLink>       
          <NavLink onClick={() => setExpanded(false)} className="nav-link" to="/dashboard">Dashboard</NavLink>
          <NavLink onClick={() => setExpanded(false)} className="nav-link" to="/about">About</NavLink>
          <NavLink onClick={() => setExpanded(false)} className="nav-link" to="/logout">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavbar


