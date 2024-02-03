import { useState } from "react";

function App() {
  const [times, setTimes] = useState([]);

  function timeParaLi(time, i) {
    return <li key={i}>{time}</li>;
  }

  function addTimes() {
    const auxiliar = [...times, "Fortaleza"];

    setTimes(auxiliar);
  }

  return (
    <div>
      <input type="text" />
      <button onClick={addTimes}>Novo</button>

      <ul>{times.map(timeParaLi)}</ul>
    </div>
  );
}

export default App;

