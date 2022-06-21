import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  return (
    <div>
      {
        data ?
        data.pets.map((pet, i) => 
          <p key={i}>{pet}</p>
        ) :
        <p>Loading...</p>
      }
    </div>
  );
}

export default App;
