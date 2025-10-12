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

            <a href="#" onClick={()=>window.second()} className="btn btn-dark">Home</a>
            <a href="#" onClick={()=>window.second()} className="btn btn-dark">About</a>
            <a href="#" onClick={()=>window.second()} className="btn btn-dark">Contact</a>
            <a href="#" onClick={()=>window.second()} className="btn btn-dark">Services</a>
            <a href="#" onClick={()=>window.second()} className="btn btn-dark">Products</a>
            <a href="#" onClick={()=>window.second()} className="btn btn-dark">Blog</a>
        </button>
    </nav>
    <span>
        <div className="box">
            <center><h2 id="heading2">Sign Up</h2></center>
            <p id="message"></p>
            <p>Username: <input type="text" placeholder="Enter your username" id="newUsername" size="30" className="sai" required/></p>
            <p>Password: <input type="password" placeholder="Enter your password" id="newPassword" size="30" required/></p>
            <p>
                security question:- 
                <select name="" id="securityQuestion">

                    <option value="first pet">what is your first pet name ?</option>
                    <option value="favourite color">what is your favourite color ?</option>
                    <option value="favourite food">what is your favourite food ?</option>
                    <option value="favourite movie">what is your favourite movie ?</option>
                    <option value="favourite anime">what is your favourite anime ?</option>
                    
                    
                    

                </select>
            </p>
            <p>Answer:- <input type="text" name="" id="answer"/></p>
          <p>  <center><button id="login" onClick={()=>window.signup()}><h2>Sign Up</h2></button> </center><a href="/"><button type="button" id="login" >Back to Login</button></a></p>
            
        </div>
    </span>
    </div>
  )
}

export default Signup