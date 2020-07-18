import React from "react";
import { Layout } from "antd";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <div>
      <Footer className="footer">
        <p style={{ textAlign: "center" }}>
          ©2020 Ansu ERP
          <p style={{ float: "right" }}>
            Powered By : Ansu Technology Pvt. Ltd.
          </p>
        </p>
      </Footer>
    </div>
  );
}
