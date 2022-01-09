import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/alertifyjs/build/css/alertify.min.css";
import "../node_modules/alertifyjs/build/css/themes/default.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
