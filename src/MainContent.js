import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    appTitle: "Customers",
    customerCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-256", address: { city: "Pune" } },
      { id: 2, name: "Scott", phone: "113-256", address: { city: "Delhi" } },
      { id: 3, name: "Scott", phone: "333-256", address: { city: "Chennai" } },
      { id: 4, name: "Scott", phone: "", address: { city: "Mumbai" } },
      { id: 5, name: "Scott", phone: "", address: { city: "Banglore" } },
    ],
  };

  // * update the customer count
  // * we need to use arrow function else if we use normal functn then it would point to btn function not global program
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getPhoneNumberToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-danger p-2 text-center"> No Phone </div>
    );
  };

  getCustomerRow = () => {
      return this.state.customers.map((user) => {
      return (
        <tr key={user.id}>
          <td> {user.id} </td>
          <td> {user.name} </td>
          <td> {this.getPhoneNumberToRender(user.phone)} </td>
          <td> {user.address.city} </td>
        </tr>
      );
    })};

  render() {
    return (
      <>
        <h4 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">PHONE-NUMBER</th>
              <th scope="col">ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            { this.getCustomerRow()}
          </tbody>
        </table>
      </>
    );
  }
}
