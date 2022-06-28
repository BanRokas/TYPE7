import { useState } from "react";

const Input = ({ showDiv }) => {
  
  const [searchWord, setSearchWord] = useState('');

  return (
    <div>
      <input 
        type="text"
        data-testid="searchBar"
        placeholder="Search..."
        onChange={ e => {
          setSearchWord(e.target.value);
        }}
      />

      <h1 data-testid="displaySearch"> { searchWord } </h1>

      {
        showDiv ?
        <div data-testid="divWeWantToShow">
          Hello fella programers and gamers. How're ya doing today? :)
        </div> :
        null
      }

    </div>
  );
}
 
export default Input;