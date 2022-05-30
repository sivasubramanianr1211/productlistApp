import React from "react";
import ProductItem from "../ProductItem";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import { productListAPI } from "../../Utility/BackendApi";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Home from '../Home'



// import withContext from "../withContext";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupedArray: [],
            categories: [],
            categoryModeOn:false,
            selectedCategory:""
        }
    }
    componentDidMount() {
        console.log(this.props.productsList)
        this.groupCategory(this.props.productsList)
    }

    groupCategory(dataValue) {
        let data = dataValue
        let result = data.reduce(function (r, a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
        }, Object.create(null));
        console.log(result)
        this.setState({ groupedArray: result })
        this.setState({ categories: Object.keys(result) })

    }

    categorySelected(category){
        console.log(category)
        // return <Redirect to="/" />
        this.setState({categoryModeOn:true,selectedCategory:category})
    }
    render() {

        let { groupedArray, categories } = this.state;
        return (
            <>
            <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">My Cart</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Clear cart
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">No item in cart!</div>
          </div>
        )}
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

export default connect(mapStateToProps, mapActionToProps)(Cart);

