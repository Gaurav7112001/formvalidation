

import { useState } from 'react'
import './App.css'

function App() {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Username validation
    if (!formdata.username.trim()) {
      errors.username = 'Username is required';
      formIsValid = false;
    }

    // Email validation
    if (!formdata.email.trim()) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      errors.email = 'Invalid email format';
      formIsValid = false;
    }

    // Password validation
    if (!formdata.password) {
      errors.password = 'Password is required';
      formIsValid = false;
    }

    // Confirm Password validation
    if (!formdata.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
      formIsValid = false;
    } else if (formdata.password !== formdata.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      formIsValid = false;
    }

    setErrors(errors);
    setFormValid(formIsValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (formValid) {
      console.log('Form submitted:', formdata);
    } else {
      console.log('Form errors:', errors);
    }
  };

  return (
    <div className="container">
      <h2>Form validations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            type="text"
            autoComplete="off"
            name="username"
            value={formdata.username}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            autoComplete="off"
            name="email"
            value={formdata.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            type="password"
            autoComplete="off"
            name="password"
            value={formdata.password}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            onChange={handleChange}
            type="password"
            autoComplete="off"
            name="confirmPassword"
            value={formdata.confirmPassword}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
