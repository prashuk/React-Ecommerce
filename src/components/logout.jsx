import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    // localStorage.removeItem("token"); // move to authServices logout
    auth.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
