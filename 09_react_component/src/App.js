import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionComponents from './component/FunctionComponent';
import Prac from './component/Prac';

function App() {
  return ( 
  <div className="App">
    {/* 불러와서 사용하는 방법 1 */}
    <ClassComponent />
    {/* 불러와서 사용하는 방법 2 */}
    <ClassComponent></ClassComponent>

    {/* 함수형 컴포넌트 */}
    <FunctionComponents />
    <Prac />
    
  </div>
  );
}

export default App;
