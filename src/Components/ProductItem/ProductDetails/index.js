import React from "react";
import { setSelectedProduct } from '../../../ReduxStore/Actions'
import { connect } from "react-redux";


class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProduct: {}
    }
  }
  componentDidMount() {
    console.log('lol', this.props.getSelectedProduct)
    this.setState({ selectedProduct: this.props.getSelectedProduct !== undefined ? this.props.getSelectedProduct : {} })
  }
  render() {
    const { selectedProduct } = this.state;

    return (
      <div class="card mt-6 is-fullheight" >
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </figure>
            </div>
            <div class="media-content">
              <h1 class="title is-1">{selectedProduct.title}</h1>
              <p class="title is-3">{selectedProduct.description}</p>
              <b class="title is-2">${selectedProduct.price}</b>
              <div className="is-clearfix">
                <button
                  className="button is-large  is-primary   is-pulled-right"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    getSelectedProduct: state.getSelectedProduct
  }
}

const mapActionToProps = {
  setSelectedProduct
}

export default connect(mapStateToProps, mapActionToProps)(ProductDetails);
