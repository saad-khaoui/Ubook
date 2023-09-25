import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Navbar = () => {


    
    return (
        
    <div className="navbar">
        
            <a href="/" className='aa'>
            <span className="logo">
        UBOOK 
            <i className="fa-regular fa-bookmark"></i>
        
        </span>
            </a>
        <ul className='list' >
        
            <li><a href="/Med">MED</a></li>
            <li><a href="/science">science</a></li>
            <li><a href="/thriller">thriller</a></li>
            <li><a href="/bussiness">bussiness</a></li>
            <li><a href="/sign">SIGN IN</a></li>
        </ul>

    </div>

    )
}

export default Navbar