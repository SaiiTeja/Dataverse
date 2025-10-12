import '../utils/login.js';
import React from 'react';
import '../styles/bootstrap.css';
import '../styles/styles.css';

function Forget() {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form id="forgotPasswordForm">
        <div className="form-group">
          <label htmlFor="forget-username">Username:</label>
          <input
            type="text"
            id="forget-username"
            placeholder="Enter your username"
            required
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
        >
          Retrieve Security Question
        </button>

        <button
          type="button"
          onClick={() => window.recoverPassword()}
          style={{ marginRight: "10px" }}
        >
          Recover Password
        </button>

        <a href="/">
          <button type="button">Back to Login</button>
        </a>
      </form>
    </div>
  );
}

export default Forget;
