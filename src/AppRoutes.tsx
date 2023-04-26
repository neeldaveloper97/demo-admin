import React from "react";
import { Switch } from "react-router-dom";
import { AppUrls } from "./AppUrl";

import Home from "./pages/private-pages/home/Home";
import Panels from "./pages/private-pages/panels/Panels";
import Projects from "./pages/private-pages/Projects/Projects";
import Scheduler from "./pages/private-pages/scheduler/Scheduler";
import Surveys from "./pages/private-pages/surveys/Surveys";
import SignIn from "./pages/public-pages/sign-in/SignIn";

import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";

const AppRoutes = () => {
  // For UI Review I added the project path in home 
  return (
    <Switch>
      <PublicRoute path={AppUrls.PublicUrl.SignUp}>
        <SignIn />
      </PublicRoute>
      <PrivateRoute path={AppUrls.Client.Panels}>
        <Panels />
      </PrivateRoute>
      <PrivateRoute path={AppUrls.Client.Schedules}>
        <Scheduler />
      </PrivateRoute>
      <PrivateRoute path={AppUrls.Client.Surveys}>
        <Surveys />
      </PrivateRoute>
      <PrivateRoute path={AppUrls.Client.Project}>
        <Projects />
      </PrivateRoute>
      <PrivateRoute path={AppUrls.Client.Home}>
        <Projects />
      </PrivateRoute>
    </Switch>
  );
};

export default AppRoutes;
