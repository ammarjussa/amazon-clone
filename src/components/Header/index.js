import React from 'react';
import './index.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Providers/StateProvider';

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" />
      </Link>
      <div className="search">
        <input type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="nav">
        <Link to="/login">
          <div className="options">
            <span className="one">Hello, Ammar</span>
            <span className="two">SignIn</span>
          </div>
        </Link>
        <div className="options">
          <span className="one">Returns</span>
          <span className="two">& Orders</span>
        </div>
        <div className="options">
          <span className="one">Your</span>
          <span className="two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="basket">
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
