import React, { useEffect, forwardRef } from 'react';
import { useStateValue } from '../../../Providers/StateProvider';
import './index.scss';

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutImage" src={image} />
        <div className="info">
          <p className="title">{title}</p>
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
