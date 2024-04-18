import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Box from "./components/Box";
import AgeProvider from "./components/provider/AgeProvider";
import Profile from "./components/provider/Profile";
import UserProvider from "./components/provider/UserProvider";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="App">
        <h1>context api</h1>
        <div>
          전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해 사용
        </div>

        {/* <ThemeContext.Provider value={isDark: isDark, setIsDark: setIsDark }> */}
        {/* // 위와 같이 key 와 value 가 같은 경우 🔽 이렇게 보낼 수 있음 */}
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          {/* 이 내부에 작성된 컴포넌트만 ThemeContext가 관리하는 값에 접근할 수 있음 */}
          <Box />
        </ThemeContext.Provider>

        {/* 
        ThemeContext.Provider 내부에 작성되어 있지 않기 때문에
        해당 context의 value에 접근해 사용할 수 없음
        isDark 사용하는 곳 부터 에러 발생
        context api 사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는
        재사용성이 떨어짐 -> context api 사용하기 전 해당 사항 고려 필요
      */}
        {/* <Box /> */}

        <AgeProvider>
          <UserProvider>
          <Profile />
          </UserProvider>
        </AgeProvider>
      </div>
    </>
  );
}

export default App;
