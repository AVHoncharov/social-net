import React, { FC } from "react";
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
import store, { AppStateType } from "./redux/redux-store";
import { withSuspense } from "./hoc/WithSuspense";
import Preloader from "./components/common/Preloader/Preloader";
import { Switch } from "react-router";
import { Redirect } from "react-router";

const DialogsContainer = React.lazy(() =>
  import("./components/Content/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Content/Profile/ProfileContainer")
);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void
}
const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhadledErrors = (e: PromiseRejectionEvent) => {
    console.error('Some error ocured');
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  }
  componentWillUnmount(){
    window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Avatar />
        <Navigation />
        <div className="wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={()=> <SuspendedProfile/>}
            />
            <Route path="/dialogs" render={()=> <SuspendedDialogs/>} />
            <Route path="/users" render={() => <UsersListContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginContainer />} />

            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // store={store}
        />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
