import React from 'react';
import './index.scss';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img
          className="main_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
        />
      </div>

      <div className="row">
        <Product
          title="The lean startup is my lean startup bla bla"
          price="19.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product />
      </div>
      <div className="row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="row">
        <Product />
      </div>
    </div>
  );
};

export default Home;
