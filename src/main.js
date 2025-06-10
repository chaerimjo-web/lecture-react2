import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { worker } from "../../shared/mocks/browser";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
