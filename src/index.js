import React from "react";
import creaeteRoot from "react-dom/client";

import App from "./src/App";

const container = document.getElementById("root");
const root = creaeteRoot(container);

root.render(<App />);
