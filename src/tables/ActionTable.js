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
    title: "Client",
    dataIndex: "client",
    key: "client 1",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status 1",
    width: 200,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action 1",
    width: 200,
  },
  {
    title: "Operation",
    dataIndex: "operation",
    key: "operation 2",
    width: 200,
  },
];

const data = [
  {
    sn: "1",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "2",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "3",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "4",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "5",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "6",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "7",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
  },
  {
    sn: "8",
    client: "John Brown",
    status: "Johnny",
    action: "Developer",
    operation: "develop apps",
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
