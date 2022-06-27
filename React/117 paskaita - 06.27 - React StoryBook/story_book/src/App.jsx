import './App.css';
import Button from './components/Button/Button';

function App() {

  const buttonClick = () => {
    console.log("Me pressed!");
  }

  return (
    <>
      <Button 
        text = "Labas rytas"
        type = "Success"
        onClick = { buttonClick }
      />
    </>
  );
}

export default App;
