import './App.css';
import frontVsBack from './images/fontEnd_vs_backEnd.jpg';
import Hero from './components/Hero';

// function importAll(r) {
//   const values = r.keys().map(r);
//   const toReturn = {};
//   r.keys().forEach((img, i) => {
//     toReturn[img.split('.')[1].slice(1)] = values[i];
//   });
//   return toReturn;
// }
// const images = importAll(require.context('./images/mainPage', false, /\.(webp|PNG|png|jpe?g|svg)$/));

const App = () => {
  return (
    <>
      <div>
        <Hero 
          title="Labas rytas"
        />
      </div>

      <div>
        <img
          src={frontVsBack}
          alt='backEndVsFrontEnd'
        />
      </div>

      <div>

      </div>
    </>
  );
}

export default App;
