import './App.css';
import Preke from './components/Preke';
import { useEffect, useState } from 'react';

const App = () => {

  const [prekes, setPrekes] = useState([]);

  useEffect(() => {
    fetch('https://golden-whispering-show.glitch.me')
      .then(res => res.json())
      .then(data => {
        setPrekes(data);
      })
  }, []);

  return (
    <>
      {
        prekes.length === 0 ? 
        <div>Loading...</div> :
        prekes.map((preke) => 
          <Preke 
            key={preke.id}
            data={preke}
          />
        )
      }
    </>
  );
}

export default App;
