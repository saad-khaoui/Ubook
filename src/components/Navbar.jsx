import React from 'react'

const Navbar = () => {
    const myul = document.getElementsByClassName("list")
    const myfunc = ()=>{
        myul[0].classList.toggle("active")
    }
    
    return (
        
    <div className="navbar">
        
            <a href="/" className='aa'>
            <span className="logo">
        UBOOK 
            <i className="fa-regular fa-bookmark"></i>
        
        </span>
            </a>
        <ul className='list'>
        
            <li><a href="/Med">MED</a></li>
            <li><a href="/science">science</a></li>
            <li><a href="/thriller">thriller</a></li>
            <li><a href="/bussiness">bussiness</a></li>
            <li><a href="/sign">SIGN IN</a></li>
        </ul>

        <i className="fa-solid fa-bars" onClick={myfunc}></i>
    </div>

    )
}

export default Navbar