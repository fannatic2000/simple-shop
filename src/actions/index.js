import * as Types from '../constants/ActionTypes'
import callApi from '../utils/apiCaller'

// Cart
export const actDeleteProductInCartRequest = (id) => {
    return (dispatch) => {
        callApi(`cart/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(deleteProductInCart(id))
            })
    }
}

export const actAddProductInCartRequest = (product, quantity) => {
    return (dispatch) => {
        callApi(`cart`, 'GET', null)
            .then(res => {
                let endpoint = 'cart';
                let method = 'POST';
                let data = {
                    product,
                    quantity
                };

                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].product.id === product.id) {
                        method = 'PUT';
                
                        data = {
                            product,
                            quantity: res.data[i].quantity += quantity
                        }

                        endpoint = `cart/${res.data[i].id}`;
                
                        break;
                    }
                }

                callApi(endpoint, method, data)
                    .then(res => {
                        dispatch(addToCart(product, quantity));
                    })
            })

    }
}

export const actUpdateProductInCartRequest = (cartItem) => {
    return (dispatch) => {
        callApi(`cart/${cartItem.id}`, 'PUT', cartItem)
            .then(res => {
                dispatch(updateProductInCart(cartItem.product, cartItem.quantity));
            })
    }
}


export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const deleteProductInCart = (id) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        id,
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}

export const actFetchProductsInCartRequest = () => {
    return (dispatch) => {
        callApi('cart', 'GET', null)
            .then(res => {
                dispatch(actFetchProductsInCart(res.data));
            })
    }
}

export const actFetchProductsInCart = cart => ({
    type: Types.FETCH_PRODUCTS_IN_CART,
    cart,
})

// Product List
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null)
            .then(res => {
                dispatch(actFetchProducts(res.data));
            })
    }
}

export const actFetchProducts = products => ({
    type: Types.FETCH_PRODUCTS,
    products,
})


export const actUpdateProductRequest = (product, inventory) => {
    product.inventory = inventory;
    return (dispatch) => {
        callApi(`products/${product.id}`, 'PUT', product)
            .then(res => {
                dispatch(updateProduct(product.id, inventory));
            })
    }
}

export const updateProduct = (id, inventory) => {
    return {
        type: Types.UPDATE_PRODUCT,
        id,
        inventory
    }
}

// Message
export const changeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message,
    }
}
