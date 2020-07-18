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
    title: "Contact",
    dataIndex: "contact",
    key: "contact 1",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    width: 200,
  },
  {
    title: "Pan.No",
    dataIndex: "panno",
    key: "panno 2",
    width: 200,
  },
  {
    title: "Issue Date",
    dataIndex: "issuedate",
    key: "issuedate 2",
    width: 200,
  },
  {
    title: "Logo",
    dataIndex: "logo",
    key: "logo 2",
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
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "2",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "3",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "4",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "5",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "6",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "7",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
  },
  {
    sn: "8",
    name: "John Brown",
    contact: "9804724140",
    address: "nepal",
    panno: "202578-16",
    issuedate: "2055-05-16",
    logo: "logo",
    action: "hero",
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
