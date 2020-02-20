import React, { Component } from "react";
import "./OrderForm.css";
import { isEmpty } from "lodash";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let totalCost =
      !isEmpty(this.props.orders) &&
      this.props.orders
        .map(order => order.price)
        .reduce((prev, next) => prev + next);

    return (
      <div>
        <div
          className="orderHeader"
          style={{ borderStyle: "double", padding: "30px" }}
        >
          Your Order
        </div>{" "}
        {this.props.orders.map(order => {
          return (
            <div style={{ margin: "30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px"
                }}
              >
                <div>{order.title}</div>
                <div>{order.price}</div>
              </div>
              <button
                className="removeButton"
                onClick={() => this.props.handleRemoveOrder(order)}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div className="total">Total cost: {totalCost}</div>
      </div>
    );
  }
}

export default OrderForm;
