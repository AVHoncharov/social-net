import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthData, setAuthUserData} from '../../redux/auth-reducer'
import { authApi } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.setAuthData();
  }
      
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthData})(HeaderContainer);
