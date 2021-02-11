import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../../redux/profile-reducer";
import Profile from "./Profile";
import { profileApi } from "./../../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    profileApi.getProfile(this.props.match.params.userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponentwithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponentwithRouter
);
