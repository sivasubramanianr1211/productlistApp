import React, { Component } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home';
import HeaderMenu from './Components/HeaderMenu';
import SignInSignUp from './Components/SignInSignUp';
import Category from './Components/Category';
import Cart from './Components/Cart';
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
  }

  
  render() {
    return (
      <Provider store={configStore}>
        <Router ref={this.routerRef}>
        <div className="App">
          <HeaderMenu/>
            <Routes>
              <Route exact path="/" element={<Home />} ></Route>
              <Route exact path="/home" element={<Home />} ></Route>
              <Route exact path="/category" element={<Category/>} ></Route>
              <Route exact path="/productdetails" element={<ProductDetails />} ></Route>
              <Route exact path="/signinsignup" element={<SignInSignUp />} ></Route>
              <Route exact path="/cart" element={<Cart />} ></Route>
            </Routes>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App ;