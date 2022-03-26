import { Component } from 'react';
import * as Msg from '../../constants/Message'

class CartItem extends Component {
  showSubTotal = (price, quantity) => {
    return price * quantity;
  }
  
  handleDelete = (id, product, quantity) => {
    this.props.onDeleteProductInCart(id);
    this.props.onUpdateProduct(product, quantity + product.inventory);
  }

  handleUpdateQuantity = (cartItem, quantity, inventory) => {
    if (quantity < 1 || inventory < 0) return;

    cartItem.product.inventory = inventory;
    cartItem.quantity = quantity;
    this.props.onUpdateProductInCart(cartItem);
    this.props.onUpdateProduct(cartItem.product, inventory);
  }

  render() {
    const { id ,product, quantity } = this.props.item;
    return (
      <tr>
        <th scope="row">
          <img src={product.image}
            alt={product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{product.name}</strong>
          </h5>
        </td>
        <td>{product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.handleUpdateQuantity(this.props.item, quantity - 1, product.inventory + 1)}
            >
                                                
              <a>—</a>
            </label>
            <label 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.handleUpdateQuantity(this.props.item, quantity + 1, product.inventory - 1)}  
            >
                                                
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(product.price, quantity)}$</td>
        <td>
          <button 
            type="button" 
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            onClick={() => this.handleDelete(id, product, quantity)}
            title="" data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
