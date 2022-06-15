import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  // let counter = 0;
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Render'intas counter kintamasis.");
  }, []);

  const mygtukoNuspaudimas = () => {
    // counter++;
    setCounter(counter + 1);
  }

  const mygtukoNuspaudimas2 = () => {
    setCounter2(counter2 + 1);
  }

  return (
    <>
      <div>
        <h1>Paspaudei 1 mygtuką {counter} kartų.</h1>
        <button onClick={mygtukoNuspaudimas}>Pirmas</button>
      </div>
      <div>
        <h1>Paspaudei 2 mygtuką {counter2} kartų.</h1>
        <button onClick={mygtukoNuspaudimas2}>Antras</button>
      </div>
    </>
  );
}

export default App;
