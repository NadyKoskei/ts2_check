import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";
import Counter from "./Counter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h2>Greeting Example</h2>
      <Greeting name="TypeScript" />

      <hr style={{ margin: "2rem 0" }} />

      <h2>Counter Example</h2>
      <Counter />
    </div>
  </React.StrictMode>,
);
