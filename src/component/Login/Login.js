import React, { Component } from "react";

class Login extends Component {
  update=()=>{
   alert("Login Succesfull")

  }
  render() {
    return (
      <div className="login-container">
       <h1>Login</h1>
       <form  className="login-form ">
        <label>Username:</label>
        <input className="login-input " type="text" required></input>
        <label>Password:</label>
        <input  className="login-input "type="password" required></input>
        <button  className="login-button" onClick={this.update}>Submit</button>
       </form>
      </div>
    )
  }
}

export default Login;
