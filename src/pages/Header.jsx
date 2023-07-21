import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <div className='flex'>
            {/* navbar logo */}
        <div className='flex'>
            <a href=""></a>
        </div>
        {/* toggle nav button */}
        <div className='flex'>
            <button>X</button>
        </div>
        {/* navbar links */}
        <div className='flex'>
            <ul className='list-none'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Resume</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li className=''>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className=''>
                    <Link to="/blog">My Blog</Link>
                </li>
                <li className=''>
                    <Link to="/contact">My Contact</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Header