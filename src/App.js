import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
