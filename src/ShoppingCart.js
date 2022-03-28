import React, { Component } from 'react'
import Product from './Product';

export default class ShoppingCart extends Component {

  state = ({
    products: [
      {id:1, productName: "iPhone" , price:999 , quantity: 10},
      {id:2, productName: "iPad" , price:899 , quantity: 13},
      {id:3, productName: "iMac" , price:3999 , quantity: 1},
      {id:4, productName: "Sony Camera" , price:2299 , quantity: 19},
      {id:5, productName: "Dr.Dre Headphones" , price:399 , quantity: 100},
      {id:6, productName: "Sony Bravia TV" , price:1199 , quantity: 33},
    ]
  });

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
              />
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
