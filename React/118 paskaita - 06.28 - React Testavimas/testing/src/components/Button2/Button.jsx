import { useState } from "react";

const Button = () => {
  
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  
  return (
    <div>
      <button 
        data-testid="button"
        onClick={ () => {
          setShowAnotherButton(true);
        }}
      >
        Click me for more of me
      </button>
      {
        showAnotherButton ? 
        <button data-testid="button">More of me</button> :
        null
      }
    </div>
  );
}
 
export default Button;