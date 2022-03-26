import * as Types from '../constants/ActionTypes'

const initialState = [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS_IN_CART:
            state = action.cart;
            return [...state];
            
        case Types.ADD_TO_CART:
            var isExisted = false;
            
            for(let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    state[i].quantity += action.quantity;
                    isExisted = true;
                    break;
                }
            }

            let newState = [...state];

            if (!isExisted) {
                newState = [
                    ...state,
                    {
                        product: action.product,
                        quantity: action.quantity,
                    }
                ]
            }

           
            return newState;

        case Types.DELETE_PRODUCT_IN_CART:
            for(let i = 0; i < state.length; i++) {
                if(state[i].id === action.id) {
                    state.splice(i, 1);
                    break;
                }
            }

            
            return [...state];

        case Types.UPDATE_PRODUCT_IN_CART:
            for(let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    state[i].quantity = action.quantity;
                    break;
                }
            }
            
            return [...state];
        default:
            return state;
    }
}

export default cart;