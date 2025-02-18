import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Login = () => {
    const Show = () =>{
      var pass =   document.getElementById('password')
      if (pass.type === "password") {
        document.getElementById('show').src = 'show.png'
        pass.type = "text"
      }
      else{
        document.getElementById('show').src = 'pass.png'
        pass.type = "password"
      }
    }
    return (
        <>
            <form>
            <h1>Login</h1>
                <input type="email" required placeholder='Email' />
                <img src="email.png" alt="" />
                <input type="password" required placeholder='password' id='password'/>
                <img src="pass.png" alt="" id='show' onClick={Show}/>
                <button>Login</button><br></br>
                <Link to='/signup'><button>Back To Signup</button></Link>
            </form>
           
        </>
    )
}

export default Login