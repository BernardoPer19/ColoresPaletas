import { useState } from "react";
import "./App.css";
import Values from "values.js";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";

function App() {
  const [list, setList] = useState(new Values("red").all(11));
  console.log(list);
  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </div>
  );
}

export default App;
