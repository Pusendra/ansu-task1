import React from "react";
import Home from "./pages/Home";
import Action from "./pages/Action";
import Client from "./pages/Client";
import Company from "./pages/Company";
import User from "./pages/User";
import Credential from "./pages/Credential";
import Admin from "./pages/Admin";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { Layout } from "antd";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
