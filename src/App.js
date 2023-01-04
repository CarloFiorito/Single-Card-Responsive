import "./App.css";
import BottomCard from "./components/BottomCard/BottomCard";
import TopCard from "./components/TopCard/TopCard";

function App() {
  return (
    <div className="App">
      <div className="wrapperCard">
        <TopCard />
        <BottomCard />
      </div>
    </div>
  );
}

export default App;
