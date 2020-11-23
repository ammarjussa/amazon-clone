import React from 'react';
import './index.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../Providers/StateProvider';

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const calculateValue = () => {
    let total_sum = 0;
    for (let i = 0; i < basket.length; i++) {
      total_sum += basket[i].price;
    }

    return total_sum;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateValue()}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
