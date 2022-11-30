import React from "react";
import Content from "./Content";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
