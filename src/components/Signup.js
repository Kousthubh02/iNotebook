import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const host = "http://localhost:5000";

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password, email } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/login");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <form
        className="container d-flex inline-block justify-content-center align-items-center"
        onSubmit={handleSubmit}
        style={{ height: "100vh" }}
      >
        <div className="container py-4 shadow rounded-3" style={{ width: '25rem' }}>
          <h1 className='my-4 text-center'>SignUp</h1>
          <label htmlFor="email" className='form-label usr'>Name:</label>
          <div className="container d-flex justify-content-center align-items-center">
            <input
              type="text"
              className='mx-4 mb-2 form-control'
              value={credentials.name}
              minLength={5}
              required
              placeholder='Enter your name'
              name="name"
              onChange={onChange}
            />
          </div>
            <label htmlFor="email" className='form-label usr'>Email:</label>
          <div className="container d-flex justify-content-center align-items-center">
            <input
              type="text"
              className='mx-4 my-2 form-control'
              value={credentials.email}
              required
              minLength={6}
              placeholder='Enter your email'
              name="email"
              onChange={onChange}
            />
          </div>
            <label htmlFor="password" className='form-label  pass'>Password:</label>
          <div className="container d-flex justify-content-center align-items-center">
            <input
              type="password"
              className='mx-4 my-2 form-control'
              value={credentials.password}
              minLength={5}
              required
              placeholder='Enter your password'
              name="password"
              onChange={onChange}
            />
          </div>
            <label htmlFor="confirmPassword" className='form-label pass'>Confirm Password:</label>
          <div className="container d-flex justify-content-center align-items-center">
            <input
              type="password"
              className='mx-4 my-2 form-control'
              value={credentials.cpassword}
              required
              placeholder='Enter your password again'
              name="cpassword"
              onChange={onChange}
            />
          </div>
          <div className="container d-flex justify-content-center my-2">
            <button type='submit' className='btn btn-outline-primary btn-lg'>SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
