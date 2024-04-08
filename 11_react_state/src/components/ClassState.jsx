/*
import { Component } from "react";

export default class ClassState extends Component {
  // constructor(props) {
  //     // 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
  //     super(props)  // Components 클래스에서 props를 상속

  //     this.state = {
  //         banana: '바나나',
  //     };
  // }

  // 현재 클래스형 컴포넌트에서 state를 사용하는 방법
  // constructor 생성자 함수를 작성하는 대신 state만 바로 작성
  // constructor 생성자 함수를 작성하지 않으면 자동으로 아래의 코드가 실행됨
  // constructor(props) {
  //     super(props);
  // }
  state = {
    banana: "바나나", // banana라는 state를 선언하고 해당 state의 값으로 '바나나'를 저장
  };

  render() {
    const { banana } = this.state;
    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용하기</h2>
        <button onClick={() => this.setState({banana: 'apple'})}>영어로 변경</button>
        <div>{this.state.banana}</div>
        <div>{banana}</div>
      </>
    );
  }
}
*/

import React, { Component } from "react";

class NumberCounter extends Component {
  state = {
    number: 0,
  };

  increaseByTwo = () => {
    this.setState((prevState) => ({
      number: prevState.number + 2,
    }));
  };

  decreaseByOne = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h2>클래스형 숫자 카운터</h2>
        <div>값: {number}</div>
        <button onClick={this.increaseByTwo}>+2</button>
        <button onClick={this.decreaseByOne}>-1</button>
      </div>
    );
  }
}

export default NumberCounter;
