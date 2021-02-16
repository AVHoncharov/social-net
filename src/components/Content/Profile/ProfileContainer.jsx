import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { setProfile } from "../../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfile(this.props.match.params.userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponentwithRouter = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setProfile })(
  WithUrlDataContainerComponentwithRouter
);
