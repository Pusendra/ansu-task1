import React from "react";
import Home from "../pages/Home";
import Action from "../pages/Action";
import Client from "../pages/Client";
import Company from "../pages/Company";
import User from "../pages/User";
import Credential from "../pages/Credential";
import Admin from "../pages/Admin";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route, Switch } from "react-router-dom";

export default function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ minHeight: "80.5vh" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/action" component={Action} />
      <Route exact path="/credential" component={Credential} />
      <Route exact path="/admin" component={Admin} />
    </Content>
  );
}
