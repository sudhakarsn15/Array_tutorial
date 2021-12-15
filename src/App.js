import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Hello CodeSandbox</h1>
      <h2>https://javascript.info/array</h2>
      <ArrayTutotial />
    </div>
  );
}

function ArrayTutotial() {
  return (
    <>
      <h1>Arrays</h1>
      <p>Declaration</p>
      <code>
        let arr = new Array(); <br /> let arr = [];
      </code>
      <p>Methods pop/push, shift/unshift</p>
    </>
  );
}
