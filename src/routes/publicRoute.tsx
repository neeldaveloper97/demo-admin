import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const PublicRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Redirect to="/home" />
  ) : (
    <Route {...rest}>{children}</Route>
  );
};

export default PublicRoute;


// Notes security stuff we can manage here as well cache & cookies with dynamic data  
// Indexdb 
// Local caheche we can add 