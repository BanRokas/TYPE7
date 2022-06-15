const Preke = ({...props}) => {
  console.log(props);
  return (
    <>
      <div> yay prekes... {props.data.title}</div>
    </>
  );
}
 
export default Preke;