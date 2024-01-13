import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link><br/>
            </li>
            <li>
                <Link to='/customers'>Customers</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar