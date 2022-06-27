const Button = ({text, type, onClick}) => {

  const buttonInfo = {};
  const primary = {
    padding: 10,
    color: 'white',
    backgroundColor: '#c20049',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#c20049',
    borderRadius: 5
  };
  const secondary = {
    padding: 10,
    color: '#c20049',
    backgroundColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#c20049',
    borderRadius: 5
  };
  const success = {
    padding: 10,
    color: 'white',
    backgroundColor: 'green',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green',
    borderRadius: 5
  };

  switch(type){
    case "Primary":
      buttonInfo.class = primary;
      break;
    case "Secondary":
      buttonInfo.class = secondary;
      break;
    case "Success":
      buttonInfo.class = success;
      break;
    default:
      buttonInfo.class = primary;
      break;
  }

  return (
    <button 
      style = { buttonInfo.class }
      onClick = { onClick ? onClick : null }
    >
      {text}
    </button>
  );
}
 
export default Button;