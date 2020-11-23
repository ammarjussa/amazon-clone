export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      console.log(action.item);
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};
