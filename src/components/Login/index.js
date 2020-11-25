import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';
import { db, auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert('Signed Up Successfully');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" />
      </Link>
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Fake Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button className="register" onClick={Register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
