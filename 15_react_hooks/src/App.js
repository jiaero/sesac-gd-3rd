import UseMemo from "./components/UseMemo";
import UseCallback1 from "./components/UseCallback1";
import UseCallback2 from "./components/UseCallback2";
import UseReducer from "./components/UseReducer";
import CustomHook from "./components/CustomHook";

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
