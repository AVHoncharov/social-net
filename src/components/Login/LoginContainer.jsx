import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { login } from './../../redux/auth-reducer';

class LoginContainer extends React.Component {
    componentDidMount() {
      this.props.login();
  }
      
  render() {
    return (
      <Login {...this.props}/>
    );
  }
}
const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapsStateToProps,{login})(LoginContainer);
