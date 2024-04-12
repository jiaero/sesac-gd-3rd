import { useState } from "react";

export default function Prac1() {
  // 현재 입력되어있는 사용자의 데이터
  // 서버에서 받아왔다는 전제 하에 작성되어 있음
  // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);

  // inputUser state 추가 -> 사용자가 입력한 자신의 이름을 저장하는 state
  // 이름을 작성하는 input에 value로 inputUser가 들어가 있음
  // 이름을 작성하는 input에 onChange 속성으로 setInputUser를 사용해서
  // 해당 input의 value로 업데이트 됨
  const [inputUser, setInputUser] = useState("");

  // inputEmail state는 사용자가 입력한 자신의 메일 주소를 저장하는 state
  // 메일을 작성하는 input에 value로 inputEmail이 들어가 있음
  // 메일을 작성하는 input에 onchange 속성으로 onChangeEmail 함수 연결
  // onChangeEmail 함수는 setInputEmail에 현재 이벤트가 발생한 요소의 value를
  // 전달해서 inputEmail이라는 state의 값으로 업데이트함
  const [inputEmail, setInputEmail] = useState("");

  // nextId라는 state는 data state의 각 요소에 들어가는 값 중 하나
  // data state는 객체의 배열로, 각 객체에는 id, user, email이 포함됨
  // user, email은 사용자에게 입력을 받아야 함
  // 하지만 id값의 경우 사용자가 모름
  // 그렇게 때문에 data.length -> data 배열의 길이에 1을 더해 직접 id값을 만듦
  const [nextId, setNextId] = useState(data.length + 1);

  // 사용자의 이름을 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결되어 있으며 해당 함수가 실행될 때 
  // 해당 이벤트가 발생한 input의 value를 inputUser state의 값으로 업데이트 함
  const onChangeUser = (e) => setInputUser(e.target.value);

  // onChangeEmail 함수 설명
  // 사용자의 email을 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결되어 있으며 해당 함수가 실행될 때
  // 해당 이벤트가 발생한 input의 value를 inputEmail state의 값으로 업데이트 함
  // e : event 객체 -> react synthetic event 객체
  // e.target : 현재 이벤트가 발생한 요소 -> input
  // e.tatget.value : 현재 이벤트가 발생한 input 요소의 value 속성값
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // eventClick 함수 설명
  // email을 입력받는 input에 onKeyDown 속성과 등록 버튼의 onClick 속성에서 사용됨
  // 새로운 데이터를 data state에 추가, input 2개(user, email)를 초기화, nextId state를 업데이트함
  const eventClick = () => {
    const nextData = [
      ...data,
      {
        // nextId를 사용해 새로운 사용자 데이터 추가
        id: nextId,

        // inputUser와 inputEmail이 비어 있을 경우 빈 문자열 사용
        user: inputUser || "",
        email: inputEmail || "",
      },
    ];

    // data 상태를 nextData 배열로 업데이트 함
    setData(nextData);

    // nextId를 1씩 더해 다음 사용자 ID를 업데이트 함
    setNextId(nextId + 1);

    // inputUser 를 초기화해 인풋창을 비움
    setInputUser("");

    // inputEmail 를 초기화해 인풋창을 비움
    setInputEmail("");
  };

  // Enter 키를 눌렀을 때 eventClick 함수를 호출함
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  // 사용자의 데이터를 제거하는 함수
  const onRemoveData = (id) => {
    const nextData = data.filter((item) => item.id !== id);
    setData(nextData);
  };

  // 데이터의 키를 item.id로 설정하고, onDoubleClick를 통해 onRemoveData 함수를 호출해 데이터를 삭제함
  const dataList = data.map((item) => (
    <tr key={item.id} onDoubleClick={() => onRemoveData(item.id)}>
      <td>{item.user}</td>
      <td>{item.email}</td>
    </tr>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
        onKeyDown={onKeyDownEnter}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />
      {/* 등록 버튼을 클릭하면 eventClick 함수 호출 */}
      <button onClick={eventClick}>등록</button>

      <table>
        <thead>
          <tr>
            <th>사용자</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>{dataList}</tbody>
      </table>
    </div>
  );
}
