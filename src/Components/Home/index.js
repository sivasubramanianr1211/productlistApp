//Home - this function is used for rendring all the products

import React from "react";
import ProductItem from "../ProductItem";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import { productListAPI } from "../../Utility/BackendApi";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      products: []
    }
  }
  componentDidMount() {
    if(this.props.categoryModeOn !== undefined && this.props.categoryModeOn === true){
      this.setState({
        products: this.props.filterdata !== undefined ? this.props.filterdata : []
      })
    }else{
      axios.get(productListAPI).then(res => {
        this.props.productListsValue(res.data)
        this.setState({products:res.data})
      }).catch(err => {
  
      })
    }
    
  }
  render() {

    let {products} = this.state;
    return (
      <>
        <div className="hero is-primary">
          <div className="hero-body container">
          {this.props.categoryModeOn !== undefined && this.props.categoryModeOn === true ?
            <h4 className="title">{this.props.selectedCategory}</h4>
            : <h4 className="title">All Products</h4>
            }
          </div>
        </div>
        <br />
        <div className="container">
          <div className="column columns is-multiline">
            {products && products.length ? (
              products.map((product, index) => (
                <ProductItem
                  product={product}
                  key={index}
                // addToCart={props.context.addToCart}
                />
              ))
            ) : (
              <div className="column">
                <span className="title has-text-grey-light">
                  No products found!
                </span>
              </div>
            )}
          
          </div>
        </div>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    productsList: state.productsList
  }
}

const mapActionToProps = {
  productListsValue
}

export default connect(mapStateToProps, mapActionToProps)(Home);

