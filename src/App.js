import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
