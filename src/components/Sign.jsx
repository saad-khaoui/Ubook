import React from 'react'
import { useState , useEffect} from 'react'
import { useRef } from 'react'
import App from '../App'

const User_Regex = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/
const Pwd_Regex = /^[0-9]+$/
const Sign = () => {
    const userref = useRef()
    const password = useRef()
    
    const [user, setuser] = useState("")
    const [validname, setvalidname] = useState(false)
    
    

    const [pwd, setpwd] = useState("")
    const [validpwd, setvalidpwd] = useState(false)
    
    const [success , setsuccess] = useState(false)


    useEffect (()=>{
        const result = User_Regex.test(user)
        setvalidname(result)
    },[user])
    
    useEffect (()=>{
        const result = Pwd_Regex.test(pwd)
        setvalidpwd(result)
    },[pwd])
    
    const handleSubmit = ()=>{
        setsuccess(true)
    }
if (success) {
    return(
        <section className='succ_section'>
            <div className="subscribe">
                welcome back {user.toUpperCase()}
            </div>
            <span className="back"><a href="/"> Go to Home page </a></span>
        </section>
    )
    
}
    return (
        
<div className="secondcontainer">
        <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form action="#" >
            <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" 
            placeholder="Username" 
            required 
            onChange={(e)=>setuser(e.target.value)} 
            
            className={validname ? "valid_name" : "invalid_name"}
            />
            
            </div>
            <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" 
            required  
            
            onChange={(e)=>setpwd(e.target.value)}
            
            className={validpwd ? "valid_name" : "invalid_name"}
            />
            </div>
            <div className="pass"><a href="#">Forgot password?</a></div>
            <div className="row button">
            <input type="submit" 
            value="Login" 
            className={validname && validpwd ? "valid_submit" : "invalid_submit"}
            onClick={handleSubmit}
            />
            </div>
            <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
</div>
    </div>
    )
}

export default Sign