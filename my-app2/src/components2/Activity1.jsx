import React, { useState, useEffect } from 'react';

function LoginPage() {
  // State hooks for username, password, and login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  
  // Predefined correct credentials
  const correctUsername = 'Harshit';
  const correctPassword = '123';

  // useEffect to validate username when it changes
  useEffect(() => {
    if (username === correctUsername && password === correctPassword) {
      setLoginStatus('Login Successful!');
    } else if (username !== correctUsername && username !== '') {
      setLoginStatus('Incorrect Username');
    } else if (password !== correctPassword && password !== '') {
      setLoginStatus('Incorrect Password');
    }
  }, [username, password]); // Trigger effect on username or password change

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      alert('Login Successful!');
      // You can redirect to another page or do something after successful login
    } else {
      alert('Login Failed. Check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>{loginStatus}</p> 
      </div>
    </div>
  );
}

export default LoginPage;
