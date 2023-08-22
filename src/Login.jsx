import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './features/authSlice';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = Navigate();

  const loginUser = async () => {
    if (email === '') {
      toast.error('Please enter email');
    } else if (password === '') {
      toast.error('Please enter password');
    } else {
      try {
        const response = await axios.post('http://172.18.4.197:4000/user/login', {
          email,
          password,
        });

        if (response.status === 200) {
          const { firstName, Role, email } = response.data;
          sessionStorage.setItem('firstName', firstName);
          sessionStorage.setItem('Role', Role);
          sessionStorage.setItem('email', email);

          dispatch(login());
          toast.success(`Welcome ${firstName} to the application`);
          history.push('/Home');
        } else {
          toast.error('Invalid username or password');
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;
