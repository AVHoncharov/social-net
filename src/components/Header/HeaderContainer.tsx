import React from "react";
import { connect } from "react-redux";
import Header, { MapDispatchHeaderPropsType, MapHeaderPropsType } from "./Header";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapHeaderPropsType & MapDispatchHeaderPropsType> {


  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<MapHeaderPropsType, MapDispatchHeaderPropsType, {}, AppStateType >(mapStateToProps, { logout })(
  HeaderContainer
);
