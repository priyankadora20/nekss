import React, { useState } from 'react';
import axios from 'axios';
import "../style/Login.css"

const SignupPage = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
    const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
   const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
    const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
 
    
  const handleSignup = () => {
    // Perform signup logic here
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
      
      const userData = {
      username,
      password,
          email,
          mobile,
          country,
      gender
    };

    // Make an HTTP POST request to the server endpoint
      axios.post('http://localhost:8080/auth/signup', userData)
        
      .then(response => {
        // Handle the response from the server
          console.log(response.data);
          alert("Thank you for the registration")
      })
          
      .catch(error => {
        // Handle any errors
          console.error(error);
            alert("Error")
      });

    };
    
    

  return (
    <div >
     
          <form >
               <h1>Signup</h1>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Name '
          />
        </label>
        <br />
   
        
        <label>
          Password:
          <input
            type="password"
            value={password}
                      onChange={handlePasswordChange}
                       placeholder='Your Password '
          />
              </label>
             <br />
   
        <label>
          Email:
          <input
            type="email"
            value={email}
                      onChange={handleEmailChange}
                      placeholder='eg:Nek@nek.co.in'
          />
        </label>
        
         
   
        <br />  
        <label>
          Mobile No :
          <input
            type="number"
            value={mobile}
                      onChange={handleMobileChange}
                      placeholder='eg:2535'
          />
        </label>
              <br />
              
       <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={handleCountryChange}
            placeholder='eg:India'
          />
        </label>
              <br />


    <label>Gender:</label>
             <label>
       
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleGenderChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={handleGenderChange}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Unknown"
          checked={gender === 'Unknown'}
          onChange={handleGenderChange}
        />
        Unspecified 
      </label>

                 <br />
    



        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;