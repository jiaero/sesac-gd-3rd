import { Component } from "react";

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);

    // handleClick이라는 함수의 this를 함수 자체의 this가 아닌
    // 클래스 자체를 의미하는 this로 바인딩(묶어줌)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: "So Happy ! 😄 😆 😊",
  };

  // 함수 선언문을 사용해 메서드를 정의
  // 함수 내부의 this는 클래스의 this와 다른 자체적인 this가 됨
  handleClick() {
    this.setState({ msg: "Too sad , , 🥺 😢 😭" });
  }
  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 이벤트</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>emotion 🔄</button>

        <br />

        <input
          type="text"
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
