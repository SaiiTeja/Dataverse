import '../utils/login.js';   // make sure this line is at the very top
import React from 'react';
import '../styles/bootstrap.css';
import '../styles/login.css';

function Login() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dataverse</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About', 'Contact', 'Services', 'Products', 'Blog'].map((label, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href="#" onClick={() => window.first()}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Box */}
      <div className="box">
        <center><h2 id="heading1">Login</h2></center>
        <p id="error"></p>

        <p>
          Username:{" "}
          <input
            type="text"
            placeholder="Enter here"
            id="username"
            size="30"
            className="sai"
            required
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="password"
            placeholder="Enter here"
            id="password"
            size="30"
            className="sai"
            required
          />
        </p>

       <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
  <input
    type="checkbox"
    id="showPassword"
    style={{ width: '16px', height: '16px', margin: 0, padding: 0 }}
    onChange={(e) => {
      const pass = document.getElementById('password');
      pass.type = e.target.checked ? 'text' : 'password';
    }}
  />
  <label htmlFor="showPassword" style={{ margin: 0, padding: 0, lineHeight: '16px', cursor: 'pointer' }}>
    Show Password
  </label>
</div>



        <h5>
          <a href="/forget">Forgot Password?</a>
          <span style={{ float: 'right' }}>
            <a href="/signup">Sign Up</a>
          </span>
        </h5>

        <center>
          <button id="login" onClick={() => window.login()}>
            <h2>Login</h2>
          </button>
        </center>
      </div>
    </div>
  );
}

export default Login;
