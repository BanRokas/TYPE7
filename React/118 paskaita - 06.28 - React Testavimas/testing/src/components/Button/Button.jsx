import { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("Press here");

  const dummyFunction = () => {
    setValue("You clicked");
  }

  return (
    <button onClick={ dummyFunction } title="dummyButton">
      { value }
    </button>
  );
}
 
export default Button;