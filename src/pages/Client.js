import React from "react";
import ClientTable from "../tables/ClientTable";
import { Layout } from "antd";

import { Button } from "antd";

export default function Client() {
  const { Sider, Content } = Layout;
  return (
    <div>
      <Layout className="function-info">
        <Sider style={{ background: "#ffffff", textAlign: "center" }}>
          <h1>User</h1>
        </Sider>
        <Content className="content-user">
          <Button
            type="primary"
            shape="round"
            size="large"
            className="button button1"
          >
            Add Client
          </Button>
        </Content>
      </Layout>
      <ClientTable />
    </div>
  );
}
