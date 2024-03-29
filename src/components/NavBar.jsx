import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-services'
import './NavBar.css'

function NavBar(props) {
  // Add in functionality to log out
  function handleLogOut () {
    // Delegate to users-service
    userService.logOut();
    // update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav className='nav'>
        <Link to='/jewelry'>Jewelry</Link>
        &nbsp; | &nbsp;
        {/* &nbsp; | &nbsp; */}
        <span className='welcome'>Welcome, {props.user.name}</span>
        &nbsp; | &nbsp;
        
        <Link to='/cart'>Cart</Link>
      &nbsp; | &nbsp;
      
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>

  )
}

export default NavBar