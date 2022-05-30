import React from "react";
import { Navigate } from 'react-router-dom'
import { setSelectedProduct, addToCartCount,addedProductToCart } from '../../ReduxStore/Actions'
import { connect } from "react-redux";

class ProductItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickable: false
    }
  }
  addToCart(product) {
    this.props.addToCartCount(this.props.addToCartCountValue + 1)
    this.props.addedProductToCart(this.props.addedProductToCartValue.push(product))
  }

  redirectToDetailsPage(product) {
    this.setState({ clickable: true })
    this.props.setSelectedProduct(product)
  }
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className=" column is-half">
          <div className="box " >
            <div className="media" >
              <div className="media-left is-clickable" onClick={() => {
                this.redirectToDetailsPage(product)
              }}>
                <figure className="image is-64x64">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </figure>
              </div>
              <div className="media-content">
                <b style={{ textTransform: "capitalize" }} className=" is-clickable" onClick={() => {
                  this.redirectToDetailsPage(product)
                }}>
                  {product.title}{" "}

                </b>
                <div ><b>Price ${product.price}</b></div>
                <div className="is-clickable is-clearfix">
                  <button
                    className="button is-small  is-primary   is-pulled-right"
                    onClick={() =>
                      this.addToCart(product)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.clickable && <Navigate to="/productdetails" />}
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => {
  return {
    getSelectedProduct: state.getSelectedProduct,
    addToCartCountValue: state.addToCartCountValue,
    addedProductToCartValue: state.addedProductToCartValue
  }
}

const mapActionToProps = {
  setSelectedProduct,
  addToCartCount,
  addedProductToCart
}

export default connect(mapStateToProps, mapActionToProps)(ProductItem);
