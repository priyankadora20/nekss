import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
      

    const userData = {
      username,
      password,
    };

      axios.post('http://localhost:8080/auth/login', userData)
  .then(response => {
    console.log(response.data);
    console.log("success");
      alert("Welcome");
      window.location.href = '/dashboard';
  })
  .catch(error => {
    console.error(error);
    alert("Error");
  });
      
  };

  return (
    <div>
     
          <form>
              
               <h1>Login</h1>
        <label>
          Username:
          <input
            type="text"
            value={username}
                      onChange={handleUsernameChange}
                            placeholder='Name '
          />
        </label>
    
        <label>
          Password:
          <input
            type="password"
            value={password}
                      onChange={handlePasswordChange}
                            placeholder='Password '
          />
        </label>
      
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;