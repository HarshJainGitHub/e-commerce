import React, { Component } from "react";

export default class product extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-6">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted"># {this.props.id}</div>
              <h5 className="pt-5 border-top"> {this.props.productName} </h5>
              <div> $ {this.props.price} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
