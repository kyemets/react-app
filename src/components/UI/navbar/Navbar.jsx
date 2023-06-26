import React from 'react';
import '../../../styles/App.css';
import {Link} from 'react-router-dom'

const Navbar = () => {



    return (
        <div className="navbar">
        <div className='navbar__links'>
          <Link to='/about'>About app</Link>
          <Link to='/posts'>Posts</Link>
        </div>
      </div>
    )
}

export default Navbar;