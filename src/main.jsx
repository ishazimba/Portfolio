import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Use createRoot to mount your app
const root = document.getElementById("root");
const rootElement = <App />;

// Use createRoot to mount your app
const appRoot = createRoot(root);
appRoot.render(rootElement);
