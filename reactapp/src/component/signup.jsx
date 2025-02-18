import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Signup = () => {
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
            <form >
                <h1>Create Account</h1>
                <input type="text" required placeholder='Username' />
                <img src="user.jpg" alt="" />
                <input type="email" required placeholder='Email' />
                <img src="email.png" alt="" />
                <input type="number" placeholder='Age' required/>
                <select name="" id="">
            <option value="">Male</option>
            <option value="">FeMale</option>
                </select>
                <input type="password" required placeholder='password' id='password'/>
                <img src="pass.png" alt="" id='show' onClick={Show}/>
                <button>Signup</button><br></br>
                <Link to='/login'><button>Back To Login</button></Link>
               
            </form>

        </>
    )
}

export default Signup