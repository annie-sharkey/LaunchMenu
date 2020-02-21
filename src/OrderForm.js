import React, { Component } from "react";
import "./OrderForm.css";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          title: "Main Course 1",
          description: "Nice description woot 1",
          price: 10
        },
        {
          title: "Main Course 2",
          description: "Nice description woot 2",
          price: 15
        },
        {
          title: "Main Course 3",
          description: "Nice description woot 3",
          price: 10
        }
      ]
    };
  }
  render() {
    let totalCost = this.state.orders
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
        {this.state.orders.map(order => {
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
              <button className="removeButton">Remove</button>
            </div>
          );
        })}
        <div className="total">Total cost: {totalCost}</div>
      </div>
    );
  }
}

export default OrderForm;

// 1.
// render() {
//   let totalCost = this.state.orders
//     .map(order => order.price)
//     .reduce((prev, next) => prev + next);

//   return (
//     <div>
//       <div
//         className="orderHeader"
//         style={{ borderStyle: "double", padding: "30px" }}
//       >
//         Your Order
//       </div>{" "}
//       <div>
//         {this.state.orders.map(order => {
//           return order.title;
//         })}
//       </div>
//       <div className="total">Total cost: {totalCost}</div>
//     </div>
//   );
// }
// }

// export default OrderForm;
