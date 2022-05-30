//Cart page - this component is used for showing the products which are added in the cart

import React from "react";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupedArray: [],
      categories: [],
      categoryModeOn: false,
      selectedCategory: "",
      cartList: [],
      checkout: false
    }
  }

  componentDidMount() {
    const unique = this.removeDup(this.props.addedProductToCartValue)
    console.log(unique)
    this.setState({ cartList: unique })
  }

  removeDup(val) {
    var obj = {};
    for (var i = 0; i < val.length; i++)
      obj[val[i]["id"]] = val[i];
    val = [];
    for (var key in obj)
      val.push(obj[key]);
    return val
  }

  render() {
    let { cartList } = this.state;
    return (
      <>
        <div className="hero is-primary">
          <div className="hero-body container">
            <h4 className="title">My Cart</h4>
          </div>
        </div>
        <br />
        <div className="container">
          {cartList.length ? (
            <div className="column columns is-multiline">
              {cartList.map(e => (
                <>
                  {console.log('///')}
                  <CartItem
                    cartItem={e}
                  />
                </>
              ))}
              <div className="column is-12 is-clearfix">
                <br />
                <div className="is-pulled-right">
                  <button
                    className="button is-warning "
                  >
                    Clear cart
                  </button>{" "}
                  <button
                    className="button is-success"
                    onClick={() => { this.setState({ checkout: true }) }}
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
    productsList: state.productsList,
    addedProductToCartValue: state.addedProductToCartValue
  }
}

const mapActionToProps = {
  productListsValue
}

export default connect(mapStateToProps, mapActionToProps)(Cart);

