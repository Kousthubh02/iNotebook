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
      localStorage.setItem('token', json.authToken);
      navigate("/");
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="container d-flex inline-block justify-content-center align-items-center" onSubmit={handleSubmit} style={{ height: "100vh" }}>
      <div className="container py-4 shadow rounded-3" style={{ width: "fit-content" }}>
        <h1 className='text-center my-3'>Login</h1>
        <label htmlFor="email" className='form-label usr '>Email:</label>
        <div className="container d-flex justify-content-center align-items-center">
          <input type="text" className='mx-2 mb-2 form-control' value={credentials.email} placeholder='Enter your email' name="email" onChange={onChange} />
        </div>
        <label htmlFor="password" className='form-label mt-2 pass'>Password:</label>
        <div className="container d-flex justify-content-center align-items-center">
          <input type="password" className='mx-2 mb-2 form-control' value={credentials.password} placeholder='Enter your password' name="password" onChange={onChange} />
        </div>
        <div className="container d-flex justify-content-center my-2">
          <button type='submit' className='btn btn-outline-primary btn-lg'>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
