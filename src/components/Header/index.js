import React from 'react';
import './index.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
  return (
    <div className="header">
      <img src="https://lh3.googleusercontent.com/proxy/stKCeULcj-SGr-jmT5juPLmj2ex3X1WDYhkT7PcxEgBHhsaBcESFeC4bMSuYxDBpohvNHZz_qBu1_nb37XixOV2KLl3DNUXyQCuO9DcpVnwPCbzjzEeCMBtz2R2zwZnfACMeaDpr_DwLkCS1Feg" />
      <div className="search">
        <input type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="nav">
        <div className="options">
          <span className="one">Hello, Ammar</span>
          <span className="two">SignIn</span>
        </div>
        <div className="options">
          <span className="one">Returns</span>
          <span className="two">& Orders</span>
        </div>
        <div className="options">
          <span className="one">Your</span>
          <span className="two">Prime</span>
        </div>

        <div className="basket">
          <ShoppingBasketIcon />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
