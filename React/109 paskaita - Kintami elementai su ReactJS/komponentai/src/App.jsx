import './App.css';
import Hero from './components/Hero';
import Content from './components/Content';

import bgImage from './images/tetris.png'
import img1 from './images/happyPotato.PNG'
import img2 from './images/fontEnd_vs_backEnd.jpg'

function App() {
  const cards = [
    {
      image: img1,
      text: "Labas rytas"
    }, {
      image: img1,
      text: "Labas rytas"
    }, {
      image: img1,
      text: "Labas rytas"
    }, {
      image: img2,
      text: "Blogas vakaras"
    }, {
      image: img2,
      text: "Blogas vakaras"
    }, {
      image: img2,
      text: "Blogas vakaras"
    }
  ];
  return (
    <>
      <Hero 
        title="Pavadinimas"
        paragraph="vienas dudele trys keturi"
        buttonText="Press me"
        backgroundImage={bgImage}
      />
      <Content 
        title="Content pavadinimas"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente obcaecati ratione inventore aliquid non sit accusamus provident dicta officia numquam, animi, impedit deleniti temporibus explicabo molestiae. Doloribus soluta inventore, vel in molestias quis repellendus facere numquam neque. Saepe quam esse odio, quis, reiciendis autem neque assumenda ullam animi alias velit."
        cardsInfo={cards}
      />
    </>
  );
}

export default App;
