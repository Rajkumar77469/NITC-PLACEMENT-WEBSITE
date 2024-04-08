import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-fluid  mt-4 layout">{children}</div>
    </>
  );
};

export default Layout;
