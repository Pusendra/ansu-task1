import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "S.N",
    dataIndex: "sn",
    key: "sn",
    width: 80,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username 1",
    width: 200,
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password 1",
    width: 200,
  },
  {
    title: "User Group",
    dataIndex: "usergroup",
    key: "usergroup 1",
    width: 200,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action 2",
    width: 200,
  },
];

const data = [
  {
    sn: "1",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },

  {
    sn: "2",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "3",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "4",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "5",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "6",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "7",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
  {
    sn: "8",
    username: "John Brown",

    password: "Developer",
    usergroup: "develop apps",
    action: "one",
  },
];
export default class ClientTable extends Component {
  render() {
    return (
      <div className=" table">
        <Table columns={columns} dataSource={data} style={{ width: "100%" }} />
      </div>
    );
  }
}
export { data };
