import { Component } from 'react';
// import * as msg from '../constants/Message'

class Product extends Component {

  showRating = (rating) => {
    //init List Element start-0
    const startListEle = [];
    for (let i = 0; i < 5; i++) {
      startListEle.push(<li key={i}><i className="fa fa-star-o"></i></li>);
    }

    // Validate
    if (rating < 0) rating = 0;
    if (rating > 5) rating = 5;

    // Rating
    for (let i = 0; i < rating; i++) {
      startListEle[i] = <li key={i}><i className="fa fa-star"></i></li>;
    }

    return startListEle;
  }

  handleAddToCart = (product) => {
    if (product.inventory > 0) {
      --product.inventory;
      console.log(product.inventory);
      this.props.onAddToCart(product, 1);
      this.props.onUpdateProduct(product, product.inventory);
    }
  }

  render() {
    const { product } = this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image}
              className="img-fluid" alt={product.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {
                this.showRating(product.rating)
              }
            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$ - Tồn kho: {product.inventory}</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.handleAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
