import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav>

        <div className='title'><h2><li>BURGER KING</li></h2></div>
        <ul>
          
            <Link to="/"><li>  Home  </li></Link>
            <Link to="/work"><li>  Work  </li></Link>
            <Link to="/contact"><li>  Contact  </li></Link>
            <Link to="/about"><li>  About us  </li></Link>
            <Link to="/todolist"><li>  To do list  </li></Link>
        </ul>

    </nav>

    </div>
  )
}

export default Navbar