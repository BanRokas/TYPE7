import './App.css';
import Preke from './components/Preke';
import { useEffect, useState } from 'react';

import loading from './images/Loading_icon.gif';

const App = () => {

  const [prekes, setPrekes] = useState(null);

  const deletePreke = (id) => {
    setPrekes(prekes.filter(preke => preke.id !== id));
    // delete from JSON server
  }

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
        prekes ? 
        prekes.map((preke) => 
          <Preke 
            key={preke.id}
            data={preke}
            deleteFunction={deletePreke}
          />
        ) :
        <img 
          src={loading}
          alt="loading..."
          className="loading" 
        />
      }
    </>
  );
}

export default App;
