import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Jeff",
  };

  render() {
    return (
      <div className="qntyPicker">
        <button onClick={this.decrease} className="btn btn-sm btn-primary mr-3">
          -
        </button>
        <label className="qnt">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-primary">
          +
        </button>
        <button className="btn btn-sm btn-primary">Add to cart</button>
      </div>
    );
  }

  decrease = () => {
    let qnty = this.state.quantity - 1;
    if (qnty === 0) qnty = 1;
    this.setState({ quantity: qnty });
  };
  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
}

export default QuantityPicker;
