import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../../redux/profile-reducer";
import Profile from "./Profile";
import { saveProfile } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { AppStateType } from "../../../redux/redux-store";
import { ProfileType } from "../../../types/types";

// export type MapStatePropsType = ReturnType<typeof mapStateToProps>

export type MapProfileContainerPropsType = {
  profile: ProfileType;
  status: string;
  authorizedUserId: number;
  isAuth: number;
};
export type MapDispatchPropsType = {
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

type PathParamsType = {
  userId: string;
};

type ProfileContainerPropsType = MapProfileContainerPropsType &
  MapDispatchPropsType &
  RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.PureComponent<ProfileContainerPropsType> {
  refreshProfile = () => {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        //todo replace push with redirect
        this.props.history.push("/login");
      }
    }

    if (userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  };

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: ProfileContainerPropsType,
    prevState: ProfileContainerPropsType
  ) {
    debugger;
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    } else if (!this.props.isAuth) {
      this.props.history.push("/login");
    }
  }

  isProfileReady = () => {
    const userIdFromUrl = +this.props.match.params.userId;
    const userIdFromState = this.props.profile?.userId;

    if (userIdFromUrl && userIdFromState) {
      if (userIdFromUrl !== userIdFromState) {
        return false;
      }
    } else if (userIdFromState !== this.props.authorizedUserId) {
      return false;
    }

    return true;
  };
  render() {
    if (!this.isProfileReady()) {
      return <Preloader />;
    }

    return (
      <Profile
        // {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
