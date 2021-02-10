import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/SideBar/Navigation";
import Profile from "./components/Content/Profile/Profile";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersListContainer from "./components/SideBar/Users/UsersListContainer";

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
                //  store={props.store}
                        />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer 
                // store={props.store}
                />}
          />
          <Route
            path="/users"
            render={() => <UsersListContainer
                //  state={props.state.sideBar} 
                 />}
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
