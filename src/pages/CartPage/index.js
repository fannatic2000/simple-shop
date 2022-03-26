import { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../../components/Cart'
import CartItem from '../../components/CartItem';
import CartResult from '../../components/CartResult';
import * as Msg from '../../constants/Message';
import { actDeleteProductInCartRequest, actUpdateProductInCartRequest, actUpdateProductRequest, actFetchProductsInCartRequest } from '../../actions'

class CartPage extends Component {
  componentWillMount() {
    this.props.fetchCart();
  }

  showCartItem = (cart) => {
    let result = <tr><td className="text-center" colSpan="6"> {Msg.MSG_CART_EMTY} </td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
            onUpdateProductInCart={this.props.onUpdateProductInCart}
            onUpdateProduct={this.props.onUpdateProduct}
          />
        )
      })
    }

    return result;
  }

  render() {
    return (
      <div className="container">
        <Cart>
          {this.showCartItem(this.props.cart)}

          <CartResult cart={this.props.cart} />
        </Cart>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCart: () => {
      dispatch(actFetchProductsInCartRequest());
    },
    onDeleteProductInCart: (id) => {
      dispatch(actDeleteProductInCartRequest(id));
    },
    onUpdateProductInCart: (cartItem) => {
      dispatch(actUpdateProductInCartRequest(cartItem))
    },

    onUpdateProduct: (product, inventory) => {
      dispatch(actUpdateProductRequest(product, inventory))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
