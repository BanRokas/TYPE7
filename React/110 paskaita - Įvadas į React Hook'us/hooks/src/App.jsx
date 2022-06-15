import './App.css';
import Preke from './components/Preke';
import { useEffect, useState } from 'react';

import loading from './images/Loading_icon.gif';

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
        <img 
          src={loading}
          alt="loading..."
          className="loading" 
        /> :
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
