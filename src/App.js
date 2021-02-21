import React from "react";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/SideBar/Navigation";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter, withRouter, HashRouter } from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import UsersListContainer from "./components/SideBar/Users/UsersListContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import store from "./redux/redux-store";
import { withSuspense } from './hoc/WithSuspense';

const DialogsContainer = React.lazy(() =>
  import("./components/Content/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Content/Profile/ProfileContainer")
);


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
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route
            path="/dialogs"
            render={withSuspense(DialogsContainer)}
          />
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
  initialized: state.app.initialized,
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
     <HashRouter>
        <Provider store={store}>
          <AppContainer
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
          />
        </Provider>
      </HashRouter>
  );
};

export default MainApp;
