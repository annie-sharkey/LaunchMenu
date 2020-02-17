import React from "react";
import "./App.css";
import Menu from "./Menu.js";
import OrderForm from "./OrderForm.js";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: 2
        }}
      >
        <Menu />
      </div>

      <div style={{ flex: 1 }}>
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
