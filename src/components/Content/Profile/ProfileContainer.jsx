import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { setProfile } from "../../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfile(this.props.match.params.userId)
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponentwithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(
  WithUrlDataContainerComponentwithRouter
);
