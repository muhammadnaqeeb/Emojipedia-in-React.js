import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);