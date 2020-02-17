import React from "react";
import "./App.css";
import Menu from "./Menu.js";
import OrderForm from "./OrderForm.js";

function App() {
  return (
    <div className="App">
      <div
        style={{
          flex: 2
        }}
      >
        <Menu />
      </div>

      <div style={{ color: "orange", flex: 1, borderStyle: "double" }}>
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
