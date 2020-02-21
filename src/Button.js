import React, { Component } from "react";

//Goal: every time we increase
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleButtonClick = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick()}>Click me!</button>
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}

export default Button;

//1.  class Button extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     render() {
//       return (
//         <div>
//           <button onClick={() => console.log("clicked")}>Click me!</button>
//         </div>
//       );
//     }
//   }

//   export default Button;
