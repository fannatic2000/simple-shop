import { Component } from 'react';

class CartResult extends Component {
  showTotalPrice = cart => {
    let totalPrice = 0;

    if (cart.length > 0) {
      totalPrice = cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0)
    }

    return totalPrice;
  }

  render() {
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalPrice(this.props.cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
