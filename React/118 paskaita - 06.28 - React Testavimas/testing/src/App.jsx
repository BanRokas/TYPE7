import './App.css';
import { useEffect, useState, useRef } from 'react';
import Button from './components/Button/Button';
import Search from './components/Search/Search';
import Button2 from './components/Button2/Button';
import Input from './components/Input/Input';

function App() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <>
      <div className="app">
        <Button />
        <Search />
      </div>
      <hr />
      <div className="app2">
        <Input showDiv = { showDiv } />
        <Button2 />
      </div>
    </>
  );
}

export default App;
