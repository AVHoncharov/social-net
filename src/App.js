import React from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/SideBar/Navigation";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersListContainer from "./components/SideBar/Users/UsersListContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';


class App extends React.Component {
  componentDidMount() {
     this.props.initializeApp();
  }

  render() {

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Avatar />
        <Navigation />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersListContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

