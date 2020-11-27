import './App.scss';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import { auth } from './firebase';
import { useStateValue } from './Providers/StateProvider';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/payment" component={PaymentPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
