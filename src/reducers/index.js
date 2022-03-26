import { combineReducers } from 'redux'
import productList from './productList';
import cart from './cart'

const appReducers = combineReducers({
    productList,
    cart,
})

export default appReducers;