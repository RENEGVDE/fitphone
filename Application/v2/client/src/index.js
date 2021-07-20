import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import NavBar from './components/navbar'
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    {/* <NavBar/> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
