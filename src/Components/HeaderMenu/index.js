//HeaderMenu - this component is used to list the header menu options available for the application

import React from "react";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import { cartListAPI } from "../../Utility/BackendApi";
import axios from 'axios';
import { Link } from "react-router-dom";

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      products: [],
      cartsList: []
    }
  }
  componentDidMount() {
    axios.get(cartListAPI).then(res => {
      this.props.productListsValue(res.data)
      this.setState({ cartsList: res.data })
    }).catch(err => {

    })
  }
  render() {

    return (
      <>
        <nav
          id="header1"
          className="navbar container"
          role="navigation"
          aria-label="main navigation"
          style={{ backgroundColor: "#90ee90" }}
        >
          <div className="navbar-brand">
            <b className="navbar-item is-size-4 ">The Shopping Store</b>
            <label
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={e => {
                e.preventDefault();
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </label>
          </div>
          <div className={`navbar-menu ${this.state.showMenu ? "is-active" : ""
            }`}>
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/" className="navbar-item">
              All Products
            </Link>

            <Link to="/category" className="navbar-item">
              category
            </Link>
            {this.state.user && this.state.user.accessLevel < 1 && (
              <Link to="/add-product" className="navbar-item">
                Add Product
              </Link>
            )}
            <Link to="/cart" className="navbar-item">
              Cart
              <span
                className="tag is-primary"
                style={{ marginLeft: "5px" }}
              >
                {this.props.addToCartCountValue !== undefined ? this.props.addToCartCountValue : 0}
              </span>
            </Link>
            {!this.state.user ? (
              <Link to="/signinsignup" className="navbar-item">
                Sign In
              </Link>
            ) : (
              <Link to="/" onClick={this.logout} className="navbar-item">
                Logout
              </Link>
            )}
          </div>
        </nav>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    productsList: state.productsList,
    addToCartCountValue: state.addToCartCountValue
  }
}

const mapActionToProps = {
  productListsValue
}

export default connect(mapStateToProps, mapActionToProps)(HeaderMenu);

