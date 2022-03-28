import React, { Component } from "react";

export default class product extends Component {

  state = {
    products: this.props.product
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># { this.state.products.id } </div>
            <h5 className="pt-2 border-top"> { this.state.products.productName } </h5>
            <div>$ {this.state.products.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
