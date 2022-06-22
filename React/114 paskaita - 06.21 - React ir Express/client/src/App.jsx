import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ShowPets from './components/ShowPets';
import AddPet from './components/AddPet';

const App = () => {
  const [data, setData] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    fetch('/api/pets')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  const naujasAugintinis = async e => {
    e.preventDefault();
    const pet = {
      name : e.target.elements.vardas.value,
      dob : e.target.elements.gimimoData.value,
      client_email : e.target.elements.elPastas.value,
      archyvuotas : false
    }
    console.log(pet);
    await fetch('/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(pet)
    })
    .then( () => setData([...data, pet]))
    .then( () => navigate("/showPets", { replace: true }))
    
    // fetch('/api/pets')
    // .then(res => res.json())
    // .then(data => setData(data))
  }

  return (
    <>
      <div>
        <Link to="/addPet"> Add New Pet </Link>
        <Link to="/showPets"> See All Pets </Link>
      </div>
      <Routes>
        <Route path="addPet" element={
          <AddPet 
            naujasAugintinis = { naujasAugintinis }
          />
        }/>
        <Route path="showPets" element={
          <ShowPets 
            data = { data }
          />
        }/>
      </Routes>
    </>
  );
}

export default App;
