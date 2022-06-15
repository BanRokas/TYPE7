const Preke = ({data, deleteFunction}) => {
  const {id, image, price, title} = data;
  return (
    <div className="preke">
      <img src={image} alt={title}/>
      <h1> {title}</h1>
      <p> {price} </p>
      <button onClick={() => deleteFunction(id)}>Trinti</button>
    </div>
  );
}

export default Preke;