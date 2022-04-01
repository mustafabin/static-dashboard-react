import "../style/App.css";
import Side from "./side.jsx";
import Stats from "./stats.jsx";
import Graph from "./graph.jsx";
function App() {
  return (
    <div className="main">
      <Side />
      <div className="flex-container">
        <div className="statContainer">
          <Stats title={"Reviews"} mainVal={"1,281"} subvalues={[]} />
          <Stats title={"Average Rating"} mainVal={"4.6"} subvalues={[]} />
          <Stats
            title={"Sentiment Analysis"}
            mainVal={""}
            subvalues={[960, 122, 321]}
          />
        </div>
        <div className="GraphContainer">
          <div className="vistorText">
            <p>Website Visitors</p>
            <h2>821</h2>
          </div>
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
