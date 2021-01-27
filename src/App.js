import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/SideBar/Navigation";
import Profile from "./components/Content/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import Friends from "./components/SideBar/Friends/FriendsList";

function App(props) {
  return (
      <div className="wrapper">
        <Header />
        <Avatar />
        <Navigation />
        <div className="wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile 
                            profilePage={props.appState.profilePage}
                            dispatch={props.dispatch}
                            />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.appState.dialogsPage} />}
          />
          <Route
            path="/friends"
            render={() => <Friends state={props.appState.sideBar} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
