import { Avatar, Button, Col, Layout, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  selectCurrentUserLogin,
  selectIsAuth,
} from "../../redux/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/auth-reducer";

export const Header: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectCurrentUserLogin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { Header } = Layout;

  return (
    <Header className="header">
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/users">Users</Link>
            </Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Col>

        {isAuth ? (
          <>
            <Col span={1}>
              <Avatar
                alt={login || ""}
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Col>
            <Col span={5}>
              <Button onClick={handleLogout}>Logout</Button>
            </Col>
          </>
        ) : (
          <>
            <Col span={6}>
              (
              <Button>Login
                <Link to={"/login"}></Link>
              </Button>
              )
            </Col>
          </>
        )}
      </Row>
    </Header>
  );
  // <div className={style.header}>
  //     <div className={style.loginBlock}>
  //         {props.isAuth
  //         ? <div>{props.login} - <button onClick={handleLogout}>Logout</button></div>
  //         : <NavLink to={'/login'}>Login</NavLink>}
  //     </div>
  // </div>;
};
