import React from "react";
import { Outlet } from "react-router-dom";
import Timer from "./pages/timer/Timer";

const Layout = () => {
  return (
    <>
      <Timer />
      <Outlet />
    </>
  );
};

export default Layout;
