import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import CommonHeader from "../components/common-header/CommonHeader";
import SideMenu from "../components/side-menu/SideMenu";
import { RootState } from "../redux/store";

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = localStorage.getItem("token");
  const { slider } = useSelector(
    (state: RootState) => state.user
  );

  return isAuthenticated ? (
    <React.Fragment>
      <CommonHeader />
      <div className={slider === true ? "sidebarMenu" : "sidebarMenu"}>
        <SideMenu menuIcon={!slider} />
      </div>
      <Route {...rest}>{children}</Route>
    </React.Fragment>
  ) : (
    <Redirect to="/sign-in" />
  );
};

export default PrivateRoute;
