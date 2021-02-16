import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponentwithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(
  WithUrlDataContainerComponentwithRouter
);
