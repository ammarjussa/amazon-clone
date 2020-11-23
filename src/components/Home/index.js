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
          id="122312"
          title="The lean startup is my lean startup bla bla"
          price={19.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product
          id="121312"
          title="The lean startup is my lean startup bla bla"
          price={23.65}
          rating={5}
        />
      </div>
      <div className="row">
        <Product
          id="1243312"
          title="The lean startup is my lean startup bla bla"
          price={6.99}
          rating={2}
        />
        <Product
          id="12254312"
          title="The lean startup is my lean startup bla bla"
          price={34.7}
          rating={4}
        />
        <Product
          id="12231256"
          title="The lean startup is my lean startup bla bla"
          price={23.6}
          rating={4}
        />
      </div>
      <div className="row">
        <Product
          id="122323112"
          title="The lean startup is my lean startup bla bla"
          price={9.99}
          rating={3}
        />
      </div>
    </div>
  );
};

export default Home;
