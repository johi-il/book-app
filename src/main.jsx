import React from "react";
import ReactDOM from "react-dom/client";  //this line renders react components to the html page
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(   //the react app will be injected in the div with id root in index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>     // helps identify potential problems in an application by activating additional checks and warnings for its descendants
);





//in order to display in the browser, we need to run the command "npm run dev" in the terminal