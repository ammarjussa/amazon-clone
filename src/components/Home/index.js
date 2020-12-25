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
          title="Make up kit"
          price={19.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product
          id="121312"
          title="Elephant"
          price={23.65}
          rating={5}
          image="https://m.media-amazon.com/images/I/41-7l-po+EL._AC_SY200_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="1243312"
          title="Shirt"
          price={6.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg"
        />
        <Product
          id="12254312"
          title="X-box Controller"
          price={34.7}
          rating={4}
          image="https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg"
        />
        <Product
          id="12231256"
          title="Cat food"
          price={23.6}
          rating={4}
          image="https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="122323112"
          title="Play Station 4"
          price={79.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
