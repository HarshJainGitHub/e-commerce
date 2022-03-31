import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state ={
      email:"",
      password:"",
      message:""
    }
  }

  render() {
    return (
      <div className='col-lg-9'>
        <h4 className='mt-1 p-2 border-bottom'>Login</h4>
        <div className="form-group form-row mt-1 p-2">
          <label className="col-lg-4">Email:</label>
          <input type="email" className='form-control' value={this.state.email} onChange={ (event) => this.setEmail(event) } />
        </div>
        <div className="form-group form-row mt-1 p-2">
          <label className="col-lg-4">Password:</label>
          <input type="password" className='form-control' value={this.state.password} onChange={ (event) => this.setPassword(event) } />
        </div>
        <div className="text-right">
          {this.state.message}
          <button className='btn btn-primary' type="submit" onClick={this.onLoginClick}>Submit</button>
        </div>
      </div>
    )
  }

  setEmail = (event) => {
    let emailValue = event.target.value;
    this.setState({
        email:emailValue
    })
  };

  setPassword = (event) => {
    let passwordValue = event.target.value;
    this.setState({
      password:passwordValue
    });
  }

  onLoginClick = () => {
    console.log("login Clicked",this.state);

    if(this.state.email === 'admin@gmail.com' && this.state.password === 'admin@123'){
      this.setState({
        message: <span className='text-success'> Successfully LoggedIn</span>
      })
    }
    else{
      this.setState({
        message: <span className='text-danger'> Invalid Login, please try again</span>
      })
    }
  };
}