import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js";
import OrderForm from "./OrderForm.js";
import Button from "./Button.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  handleAddtoOrder = main => {
    this.setState((prevState, props) => {
      return { orders: [...prevState.orders, main] };
    });
  };

  handleRemoveOrder = main => {
    const newOrders = this.state.orders.filter(
      order => order.title !== main.title
    );
    this.setState(prevState => {
      return {
        orders: newOrders
      };
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        {/* <div
          style={{
            flex: 2
          }}
        >
          <Menu handleAddtoOrder={this.handleAddtoOrder} />
        </div>

        <div style={{ flex: 1 }}>
          <OrderForm
            orders={this.state.orders}
            handleRemoveOrder={this.handleRemoveOrder}
          />
        </div> */}
        <Button />
      </div>
    );
  }
}

export default App;
