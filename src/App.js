import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home';
import HeaderMenu from './Components/HeaderMenu';
import Category from './Components/Category';
import configStore from './ReduxStore/Store';
import {Provider} from 'react-redux';
import ProductDetails from "./Components/ProductItem/ProductDetails";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    // this.routerRef = React.createRef();
  }

  

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://localhost:3001/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })

  //   if(res.status === 200) {
  //     const { email } = jwt_decode(res.data.accessToken)
  //     const user = {
  //       email,
  //       token: res.data.accessToken,
  //       accessLevel: email === 'admin@example.com' ? 0 : 1
  //     }

  //     this.setState({ user });
  //     localStorage.setItem("user", JSON.stringify(user));
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // logout = e => {
  //   e.preventDefault();
  //   this.setState({ user: null });
  //   localStorage.removeItem("user");
  // };

  // addProduct = (product, callback) => {
  //   let products = this.state.products.slice();
  //   products.push(product);
  //   this.setState({ products }, () => callback && callback());
  // };

  // addToCart = cartItem => {
  //   let cart = this.state.cart;
  //   if (cart[cartItem.id]) {
  //     cart[cartItem.id].amount += cartItem.amount;
  //   } else {
  //     cart[cartItem.id] = cartItem;
  //   }
  //   if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
  //     cart[cartItem.id].amount = cart[cartItem.id].product.stock;
  //   }
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   this.setState({ cart });
  // };

  // removeFromCart = cartItemId => {
  //   let cart = this.state.cart;
  //   delete cart[cartItemId];
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   this.setState({ cart });
  // };

  // clearCart = () => {
  //   let cart = {};
  //   localStorage.removeItem("cart");
  //   this.setState({ cart });
  // };

  // checkout = () => {
  //   if (!this.state.user) {
  //     this.routerRef.current.history.push("/login");
  //     return;
  //   }

  //   const cart = this.state.cart;

  //   const products = this.state.products.map(p => {
  //     if (cart[p.name]) {
  //       p.stock = p.stock - cart[p.name].amount;

  //       axios.put(
  //         `http://localhost:3001/products/${p.id}`,
  //         { ...p },
  //       )
  //     }
  //     return p;
  //   });

  //   this.setState({ products });
  //   this.clearCart();
  // }
  

  render() {
    return (
      // <Context.Provider
      //   value={{
      //     ...this.state,
      //     removeFromCart: this.removeFromCart,
      //     addToCart: this.addToCart,
      //     login: this.login,
      //     addProduct: this.addProduct,
      //     clearCart: this.clearCart,
      //     checkout: this.checkout
      //   }}
      // >
      <Provider store={configStore}>
        <Router ref={this.routerRef}>
        <div className="App">
          <HeaderMenu/>
            <Routes>
              <Route exact path="/" element={<Home />} ></Route>
              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} /> */}
              <Route exact path="/home" element={<Home />} ></Route>
              <Route exact path="/category" element={<Category/>} ></Route>
              <Route exact path="/productdetails" element={<ProductDetails />} ></Route>
            </Routes>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App ;