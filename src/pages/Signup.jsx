import '../utils/login.js'; 
import React from 'react';
import '../styles/bootstrap.css';
import '../styles/login.css';

function Signup() {
  return (
    <div>
      <nav className="navbar bg-dark text-white">
        <a>
          Datavere
          </a>
        <button 
        id="button" 
        className="btn btn-dark" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">

           
        </button>
    </nav>
    <span>
        <div className="box2">
            <center><h2 id="heading2">Sign Up</h2></center>
            <p id="message"></p>
            <p className='text-dark fw-bold'>Username: <input type="text" placeholder="Enter your username" id="newUsername" size="30" className="sai" required/></p>
            <p className='text-dark fw-bold'>Password: <input type="password" placeholder="Enter your password" id="newPassword" size="30" required/></p>
            <p className='text-dark fw-bold'>
                security question:- 
                <select name="" id="securityQuestion">

                    <option value="first pet">what is your first pet name ?</option>
                    <option value="favourite color">what is your favourite color ?</option>
                    <option value="favourite food">what is your favourite food ?</option>
                    <option value="favourite movie">what is your favourite movie ?</option>
                    <option value="favourite anime">what is your favourite anime ?</option>
                    
                    
                    

                </select>
            </p>
            <p className='text-dark'>Answer:- <input type="text" name="" id="answer" placeholder='Enter your answer'/></p>
          <p>  <center><button id="login" className='ram' onClick={()=>window.signup()}><h2>Sign Up</h2></button> </center><a href="/"><button type="button" id="login" >Back to Login</button></a></p>
            
        </div>
    </span>
    </div>
  )
}

export default Signup