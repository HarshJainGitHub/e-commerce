import React, { Component } from 'react'
import Product from './Product';

export default class ShoppingCart extends Component {

  state = ({
    products: [
      {id:1, productName: "iPhone" , price:999 , quantity: 0},
      {id:2, productName: "iPad" , price:899 , quantity: 0},
      {id:3, productName: "iMac" , price:3999 , quantity: 0},
      {id:4, productName: "Sony Camera" , price:2299 , quantity: 0},
      {id:5, productName: "Dr.Dre Headphones" , price:399 , quantity: 0},
      {id:6, productName: "Sony Bravia TV" , price:1199 , quantity: 0},
    ]
  });

  handleIncrement = (product, maxValue) => {

    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if(allProduct[index].quantity < maxValue){
      allProduct[index].quantity++;
      this.setState({
        products:allProduct
      })
    }
  };

  handleDecrement = (product) => {

    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if(allProduct[index].quantity !== 0){
      allProduct[index].quantity--;
      this.setState({
        products: allProduct
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h4 className='m-2'>Shopping Cart</h4>
          <div className='row'>
            {this.state.products.map((prod) =>
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
