import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
