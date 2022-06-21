import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/pets')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }, []);

  return (
    <div>
      {
        data ?
        data.map((pet, i) => 
          <p key={i}>{pet.id} {pet.name}</p>
        ) :
        <p>Loading...</p>
      }
    </div>
  );
}

export default App;
