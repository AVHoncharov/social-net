import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Content/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Avatar />
        <Navigation />
        <div className="wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.appState.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.appState.profilePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
