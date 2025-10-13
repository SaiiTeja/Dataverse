import '../utils/login.js';
import React from 'react';
import '../styles/bootstrap.css';
import '../styles/styles.css';

function Forget() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form id="forgotPasswordForm">
        <div className="form-group">
          <h3>
          <label htmlFor="forget-username" className='text-dark h5'>Username:</label></h3>
          <input
            type="text"
            id="forget-username"
            placeholder="Enter your username"
            required
            className='mohi'
          />

        </div>

        {/* Security Question */}
        <div
          id="forget-securityQuestionDisplay"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        ></div>

        {/* Hidden Answer Section */}
        <div
          id="forget-questionSection"
          style={{
            display: "none",
            marginTop: "10px",
            transition: "all 0.4s ease",
          }}
          className="form-group"
        >
          <label id="forget-questionLabel" htmlFor="forget-answer"></label>
          <input
            type="text"
            id="forget-answer"
            placeholder="Enter your answer"
            required
          />
        </div>

        <div id="forget-message" style={{ marginTop: "10px" }}></div>

        <button
          type="button"
          onClick={() => window.retrieveSecurityQuestion()}
          style={{ marginRight: "10px" }}
          className='revan'
        >
          Retrieve Security Question
        </button>

        <button
          type="button"
          onClick={() => window.recoverPassword()}
          style={{ marginRight: "10px" }}
          className='revan'
        >
          Recover Password
        </button>

        <a href="/">
          <button type="button" className='revan'>Back to Login</button>
        </a>
      </form>
    </div>
  );
}

export default Forget;
