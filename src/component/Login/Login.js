import React, { Component } from "react";

class Login extends Component {
  update=()=>{
   alert("Login Succesfull")

  }
  render() {
    return (
      <>
       <h1>Login</h1>
       <form >
        <label>Username:</label>
        <input type="text" required></input>
        <label>Password:</label>
        <input type="password" required></input>
        <button onClick={this.update}>Submit</button>
       </form>
      </>
    )
  }
}

export default Login;
