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
      <div>
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

  onLoginClick = async () => {

    var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,{method:'GET'});
    var body = await response.json();

    if(body.length > 0){
      this.setState({
        message: <span className='text-success'> Successfully LoggedIn</span>
      })
      this.props.updateIsLoggedInStatus(true);
    }
    else{
      this.setState({
        message: <span className='text-danger'> Invalid Login, please try again</span>
      })
    }
  };
}
