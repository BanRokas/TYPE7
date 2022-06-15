const Preke = ({data}) => {
  const {id, image, price, title} = data;
  console.log(image);
  return (
    <div className="preke">
      <img src={image} alt={title}/>
      <h1> {title}</h1>
      <p> {price} </p>
    </div>
  );
}
 
export default Preke;