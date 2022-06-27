const Button = ({type, text}) => {
  const buttonInfo = { }

  switch(type){
    case "Primary":
      buttonInfo.class = 'primary';
      break;
    case "Secondary":
      buttonInfo.class = 'secondary';
      break;
    default:
      buttonInfo.class = 'primary';
      break;
  }

  return (
    <button className={buttonInfo.class}>{text}</button>
  );
}
 
export default Button;