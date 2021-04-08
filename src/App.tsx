import React, { FC } from "react";
import "./App.css";
// import Avatar from "./components/Avatar/Avatar";
import Navigation from "./components/SideBar/Navigation";
// import Footer from "./components/Footer/Footer";
import {
  Route,
  BrowserRouter,
  withRouter,
  HashRouter,
  NavLink as Link,
} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import store, { AppStateType } from "./redux/redux-store";
import { withSuspense } from "./hoc/WithSuspense";
import Preloader from "./components/common/Preloader/Preloader";
import { Switch } from "react-router";
import { Redirect } from "react-router";
import { UsersPage } from "./components/SideBar/Users/UsersPage";
import { LoginPage } from "./components/Login/LoginPage";
import "antd/dist/antd.css";
import { Avatar, Button, Col, Row } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Header } from "./components/Header/Header";

const DialogsContainer = React.lazy(
  () => import("./components/Content/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Content/Profile/ProfileContainer")
);

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};
const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhadledErrors = (e: PromiseRejectionEvent) => {
    console.error("Some error ocured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  }
  componentWillUnmount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogs">Messages</Link>
                  </Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                  <Menu.Item key="5">
                    {" "}
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Redirect exact from="/" to="/profile" />
                <Route
                  path="/profile/:userId?"
                  render={() => <SuspendedProfile />}
                />
                <Route path="/dialogs" render={() => <SuspendedDialogs />} />
                <Route path="/users" render={() => <UsersPage />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={() => <LoginPage />} />

                <Route
                  path="*"
                  render={() => (
                    <div>
                      <Button type="primary">ok</Button>
                      404 NOT FOUND
                    </div>
                  )}
                />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Samurai Network ©2020 Created by alex.goncharov.vlad@gmail.com
        </Footer>
      </Layout>

      //   <div className="wrapper">
      //     <HeaderContainer />
      //     <Avatar />
      //     <Navigation />
      //     <div className="wrapper-content">
      //       <Switch>
      //         <Redirect exact from="/" to="/profile" />
      //         <Route
      //           path="/profile/:userId?"
      //           render={()=> <SuspendedProfile/>}
      //         />
      //         <Route path="/dialogs" render={()=> <SuspendedDialogs/>} />
      //         <Route path="/users" render={() => <UsersPage />} />
      //         <Route path="/news" render={() => <News />} />
      //         <Route path="/music" render={() => <Music />} />
      //         <Route path="/settings" render={() => <Settings />} />
      //         <Route path="/login" render={() => <LoginPage />} />

      //         <Route path="*" render={() => <div>
      //           <Button type="primary">ok</Button>
      //           404 NOT FOUND
      //           </div>} />
      //       </Switch>
      //     </div>

      //     <Footer />
      //   </div>
      // );
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
