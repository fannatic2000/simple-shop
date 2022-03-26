import * as Types from '../constants/ActionTypes'

const initialState = [];

const productList = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.UPDATE_PRODUCT:
            for(let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    state[i].inventory = action.inventory
                    break;
                }
            }
            
            return [...state];
        default:
            
            return state;
    }
}

export default productList;