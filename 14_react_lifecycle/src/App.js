import ClassLifeCycle from "./component/ClassLifeCycle";
import FuncLifeCycle from "./component/FuncLifeCycle";
import PracContainer from "./component/PracContainer";
import PracFakePost from "./component/PracFakePost";

function App() {
  return (
    <div className="App">
      <ClassLifeCycle />
      <FuncLifeCycle />

      <PracContainer>
        <PracFakePost />
      </PracContainer>
    </div>
  );
}

export default App;
