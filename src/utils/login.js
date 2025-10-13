// src/utils/login.js

console.log("✅ login.js loaded successfully");

// --- LOGIN FUNCTION ---
window.login = function () {
  const username = document.getElementById('username')?.value;
  const password = document.getElementById('password')?.value;
  const errorEl = document.getElementById('error');
  const dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};

  if (!username) {
    errorEl.innerText = 'Please enter your username';
    errorEl.style.color='red';
    return;
  }
  if (!password) {
    errorEl.innerText = 'Please enter your password';
    errorEl.style.color='red';
    return;
  }

  const userData = dictionary[username];
  if (userData && userData.password === password) {
    localStorage.setItem('userName', username);
    errorEl.style.color = 'green';
    errorEl.innerText = 'Login successful! Redirecting...';
    setTimeout(() => {
      window.open('/project', '_blank');
    }, 2000);
  } else if (!userData) {
    errorEl.innerText = 'Username not found.';
  } else {
    errorEl.innerText = 'Incorrect password.';
  }
};

// --- SIGNUP FUNCTION ---
window.signup = function () {
  const newUsername = document.getElementById('newUsername')?.value;
  const newPassword = document.getElementById('newPassword')?.value;
  const question = document.getElementById('securityQuestion')?.value;
  const answer = document.getElementById('answer')?.value;
  const messageEl = document.getElementById('message');
  const dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};

  if (!newUsername || newUsername.length < 8) {
    messageEl.innerText = 'Username must be at least 8 characters long.';
    messageEl.style.color = 'red';
    return;
  }
  if (!newPassword || newPassword.length < 8) {
    messageEl.innerText = 'Password must be at least 8 characters long.';
    messageEl.style.color = 'red';
    return;
  }
  if (!question) {
    messageEl.innerText = 'Please enter a security question.';
    messageEl.style.color = 'red';
    return;
  }
  if (!answer) {
    messageEl.innerText = 'Please enter the answer to your question.';
    messageEl.style.color = 'red';
    return;
  }

  const updatedDict = {
    ...dictionary,
    [newUsername]: {
      password: newPassword,
      question: question,
      answer: answer,
    },
  };

  localStorage.setItem('dictionary', JSON.stringify(updatedDict));
  messageEl.innerText = 'Sign up successful! You can now log in.';
  messageEl.style.color = 'green';
};

// --- RETRIEVE SECURITY QUESTION (FOR FORGET PAGE) ---
window.retrieveSecurityQuestion = function () {
  const username = document.getElementById('forget-username')?.value.trim();
  const questionEl = document.getElementById('forget-securityQuestionDisplay');
  const messageEl = document.getElementById('forget-message');
  const questionSection = document.getElementById('forget-questionSection');
  const questionLabel = document.getElementById('forget-questionLabel');

  // Safety check for missing elements
  if (!username || !questionEl || !messageEl || !questionSection || !questionLabel) {
    console.error("❌ Missing required element(s) on Forget page:", {
      username,
      questionEl,
      messageEl,
      questionSection,
      questionLabel
    });
    return;
  }

  // Get dictionary data from localStorage
  const dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
  const userData = dictionary[username];

  // If username field is empty
  if (!username) {
    messageEl.innerText = 'Please enter your username.';
    messageEl.style.color = 'red';
    questionSection.style.display = 'none';
    questionEl.innerText = '';
    return;
  }

  // If user found
  if (userData) {
    questionEl.innerText = `Security Question: ${userData.question}`;
    messageEl.innerText = '';
    messageEl.style.color = '';

    // ✅ Show answer box smoothly
    questionLabel.innerText = 'Your Answer:';
    questionSection.style.display = 'block';
    questionSection.style.color = 'black';
    questionLabel.innerText = 'Your Answer:';
questionLabel.style.color = 'black'; // ✅ makes text black
questionSection.style.display = 'block';
questionSection.style.opacity = '0';
questionSection.style.fontWeight = 'bold';


    setTimeout(() => {
      questionSection.style.opacity = '1';
    }, 10);
  } else {
    // Username not found
    messageEl.innerText = 'Username not found.';
    messageEl.style.color = 'red';
    questionSection.style.display = 'none';
    questionEl.innerText = '';
  }
};

window.recoverPassword = function () {
  const username = document.getElementById('forget-username')?.value.trim();
  const answer = document.getElementById('forget-answer')?.value.trim();
  const messageEl = document.getElementById('forget-message');

  // Safety check
  if (!username || !answer || !messageEl) {
    console.error("❌ Missing required element(s) on Forget page:", { username, answer, messageEl });
    return;
  }

  const dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
  const userData = dictionary[username];

  if (!username) {
    messageEl.innerText = 'Please enter your username.';
    messageEl.style.color = 'red';
    return;
  }

  if (userData) {
    if (answer === userData.answer) {
      messageEl.innerText = `Your password is: ${userData.password}`;
      messageEl.style.color = 'black';
      messageEl.style.fontWeight = 'bold';
    } else {
      messageEl.innerText = 'Incorrect answer to the security question.';
      messageEl.style.color = 'red';
    }
  } else {
    messageEl.innerText = 'Username not found.';
    messageEl.style.color = 'red';
  }
};


// --- ALERTS FOR NAV LINKS ---
window.first = function () {
  alert('Login to access the Dataverse resources');
};

window.second = function () {
  alert('Login to access the Dataverse resources');
};

// --- OPTIONAL: RESET ALL LOCAL DATA (for testing) ---
window.clearAllUsers = function () {
  localStorage.removeItem('dictionary');
  alert('All stored user data cleared!');
};
