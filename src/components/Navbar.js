import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import logo from "../images/logo.png";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

export default class Navbar extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu
            theme="dark"
            style={{ background: "#3f74a2", color: "#fff" }}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1" className="long-item-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
            </Menu.Item>
            <Menu.Item key="2" className="long-item">
              <Link to="/user">User</Link>
            </Menu.Item>
            <Menu.Item key="3" className="long-item">
              <Link to="/client">Client</Link>
            </Menu.Item>
            <Menu.Item key="4" className="long-item">
              <Link to="/company">Company</Link>
            </Menu.Item>
            <Menu.Item key="5" className="long-item">
              <Link to="/action">Action</Link>
            </Menu.Item>
            <Menu.Item key="6" className="long-item">
              <Link to="/credential">Credential</Link>
            </Menu.Item>
            <Menu.Item key="7" style={{ float: "right" }}>
              <Link to="/admin">
                {`Admin `}
                <DownOutlined />
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
