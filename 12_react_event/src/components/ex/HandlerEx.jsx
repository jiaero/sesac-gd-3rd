import React, { Component } from "react";

export default class HandlerEx extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    value: "Hello World !",
  };

  handleClick() {
    this.setState({ value: "Goodbye World !" });
  }
  render() {
    return (
      <>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>클릭</button>
      </>
    );
  }
}
