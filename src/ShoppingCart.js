import React, { Component } from 'react'
import Product from './Product';

class ShoppingCart extends Component {

  constructor(props){
    // console.log("Mounting Phase Shoping Cart:- Constructor()");
    super(props);
    this.state = ({
      products:[]
    });
  }

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

  handleDelete = (product) => {
    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if(window.confirm(`Are Sure You Want To ${product.productName} Delete ?`)){
      allProduct.splice(index,1);
      this.setState({
        products: allProduct
      });
    }
  };

  render() {
    // console.log("Mounting Phase Shoping Cart:- Render()");
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
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount(){
    // console.log("Mounting Phase:- Shoping Cart ComponentDidMount()");
    fetch('http://localhost:5000/products',{method:"GET"})
    .then( (response) => {
      if(response.status){
        let promise2 = response.json();
        promise2.then((prods) => {
          console.log(prods);
          this.setState({
            products: prods
          });
        });
        console.log(this.state.products);
      }
    });
  }

  componentDidUpdate(prevProps,prevState){
    // console.log("Updating Phase:- Shoping Cart ComponentDidUpdate()",prevProps,prevState,this.props,this.state);
  }

  componentDidCatch(error,info){
    // console.log("Error handling phase: ShoppingCart,componentDidCatch() ");
    // localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }
}

export default ShoppingCart;