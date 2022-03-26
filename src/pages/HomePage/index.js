import { Component } from 'react';
import ProductList from '../../components/ProductList';
import Product from '../../components/Product'
import { connect } from 'react-redux';
import { actAddProductInCartRequest, actFetchProductsRequest, actUpdateProductRequest } from '../../actions'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <ProductList>
          {
            this.props.productList.map(product => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={this.props.onAddToCart}
                onUpdateProduct={this.props.onUpdateProduct}
              />
            ))
          }
        </ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product, quantity) => {
      dispatch(actAddProductInCartRequest(product, quantity));
    },
    fetchProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onUpdateProduct: (product, inventory) => {
      dispatch(actUpdateProductRequest(product, inventory))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

