import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./assets/styles/App.css";


function App() {
  localStorage.setItem("token", "Demo")
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <div className="mainTemplate">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
