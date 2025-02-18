import React from 'react'
import { Link } from 'react-router-dom'
import './bar.css'
const Navbar = () => {
  return (
    <>
   <div className='header'>
    <h1>EAV-GITWE-TSS</h1>
   <Link to='/'><button>Home</button></Link>
    <Link to='/About'><button>About</button></Link>
    <Link to='/Contact'><button>Contact</button></Link>
    <Link to='/State'><button>State</button></Link>
    <Link to='/Effect'><button>Effect</button></Link>
    <Link to='/login'><button>Login</button></Link>
    <Link to='/signup'><button>Signup</button></Link>
   </div>

    </>
  )
}

export default Navbar