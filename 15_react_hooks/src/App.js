import UseMemo from "./component/UseMemo";
import UseCallback1 from "./component/UseCallback1";
import UseCallback2 from "./component/UseCallback2";
import UseReducer from "./component/UseReducer";
import CustomHook from "./component/CustomHook";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <br />
      <UseCallback1 />
      <br />
      <UseCallback2 />
      <br />
      <UseReducer />
      <br />
      <CustomHook />
    </div>
  );
}

export default App;
