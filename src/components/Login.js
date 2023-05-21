import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login functionality here
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform login actions

    // Redirect to the home page or any other desired page after successful login
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin}>Log in</button>
      </form>
    </div>
  );
};

export default Login;