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
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "User name",
    dataIndex: "username",
    key: "username",
    width: 200,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
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
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "2",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "3",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "4",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "5",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "6",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
  {
    sn: "7",
    name: "John Brown",
    username: "Johnny",
    role: "Developer",
    action: "develop apps",
  },
];
export default class UserTable extends Component {
  render() {
    return (
      <div className="table">
        <Table columns={columns} dataSource={data} style={{ width: "100%" }} />
      </div>
    );
  }
}

export { data };
