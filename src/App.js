import "./App.css";
import { useState } from "react";
import Button from "./contents/components/Buttons/Button";
import Display from "./contents/components/Display/Display";

function App() {
  const [counter, setCounter] = useState(0); //initialized the {counter} to 0 and makes {setCounter} available

  //incrementCounter function is passed to the component via the onClickFuntion prop... see Button.js
  const incrementCounter = (g) => setCounter(counter + g);

  return (
    <div className="App">
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
}

export default App;
