import React, { Component } from "react";
import CredentialTable from "../tables/CredentialTable";
import { Layout } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import ExportJsonExcel from "js-export-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import pdf from "../images/icons/pdf.png";
import csv from "../images/icons/csv.png";
import excel from "../images/icons/excel.png";

import { data } from "../tables/CredentialTable";
export default class User extends Component {
  state = { data: data };

  downloadExcel = () => {
    const data = this.state.data ? this.state.data : ""; //tabular data
    var option = {};
    let dataTable = [];
    if (data) {
      for (let i in data) {
        if (data) {
          let obj = {
            SN: data[i].sn,
            Username: data[i].username,
            Password: data[i].password,
            Usergroup: data[i].usergroup,
            Action: data[i].action,
          };
          dataTable.push(obj);
        }
      }
    }
    option.fileName = "Organization Information";
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: "sheet",
        sheetFilter: ["SN", "Username", "Password", "Usergroup", "Action"],
        sheetHeader: ["SN", "Username", "Password", "Usergroup", "Action"],
      },
    ];

    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  };

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Organization Report";
    const headers = [["SN", "Username", "Password", "Usergroup", "Action"]];

    const data = this.state.data.map((elt) => [
      elt.sn,
      elt.name,
      elt.username,
      elt.role,
      elt.action,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  render() {
    console.log(this.state);
    const { Sider, Content } = Layout;
    const { Search } = Input;

    return (
      <>
        <Layout className="function-info">
          <Sider
            style={{
              background: "#ffffff",
              textAlign: "center",
            }}
          >
            <h1>User</h1>
          </Sider>
          <Content className="content-user">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="button button1"
            >
              Add Credential
            </Button>
          </Content>
        </Layout>
        <Layout style={{ background: "#fff" }}>
          <Content
            style={{ background: "#fff", height: "3rem" }}
            className="btn-content"
          >
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: 200 }}
            />

            <Button
              onClick={() => this.exportPDF()}
              className="second-user-header-height"
            >
              <img
                onClick={() => this.exportPDF()}
                src={pdf}
                alt=""
                style={{ height: "100%" }}
                className="icon"
              />
            </Button>
            <Button className="second-user-header-height">
              <CSVLink data={this.state.data}>
                <img
                  src={csv}
                  alt=""
                  style={{ height: "100%" }}
                  className="icon"
                />
              </CSVLink>
            </Button>
            <Button
              onClick={this.downloadExcel}
              className="second-user-header-height"
            >
              <img
                onClick={this.downloadExcel}
                src={excel}
                alt=""
                style={{ height: "100%" }}
                className="icon"
              />
            </Button>
          </Content>
        </Layout>
        <CredentialTable />
      </>
    );
  }
}
