import React, { Component } from 'react'
import jquery from "jquery";
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./NavBar";
import CustomersList from './CustomersList';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NoMatchPage from './NoMatchPage';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={ <Login /> } />
          <Route path="/cart" exact element={ <ShoppingCart /> } />
          <Route path="/customers" exact element={ <CustomersList /> } />
          <Route path="/dashboard" exact element={ <Dashboard /> } />
          <Route path="*" element={ <NoMatchPage /> } />
        </Routes>
      </BrowserRouter>
    )
  }
}
