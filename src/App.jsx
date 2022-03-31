import React, { Component } from 'react'
import jquery from "jquery";
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./NavBar";
// import CustomersList from './CustomersList';
import ShoppingCart from './ShoppingCart';
// import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <CustomersList /> */}
        <ShoppingCart />
        {/* <Login /> */}
      </div>
    )
  }
}
