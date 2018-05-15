import React, { Component } from 'react'
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify App</h1>
          <p>Time to get your expenses under control </p>
          <button onClick={this.props.startLogin}>Login</button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {
      dispatch(startLogin())
    }
  }
};
export default connect(null, mapDispatchToProps)(LoginPage);