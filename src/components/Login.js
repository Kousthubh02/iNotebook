import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const host = "http://localhost:5000";
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="container d-flex inline-block justify-content-center align-items-center" onSubmit={handleSubmit} style={{ height: "100vh" }}>
      <div className="container text-center py-4 shadow rounded-3" style={{ width: "fit-content" }}>
        <h1>Login</h1>
        <div className="container d-flex justify-content-center align-items-center">
          <label htmlFor="email" className='form-label mx-2 usr'>Email:</label>
          <input type="text" className='mx-2 my-2 form-control' value={credentials.email} placeholder='Enter your email' name="email" onChange={onChange} />
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <label htmlFor="password" className='form-label mx-2 pass'>Password:</label>
          <input type="password" className='mx-2 my-2 form-control' value={credentials.password} placeholder='Enter your password' name="password" onChange={onChange} />
        </div>
        <div className="container d-flex justify-content-center my-2">
          <button type='submit' className='btn btn-outline-primary btn-lg'>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
