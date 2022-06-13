const Card = ({image, imageText}) => {
  return (
    <div className="Card">
      <img 
        src={image}
        alt={imageText}
      />
      <p>{imageText}</p>
    </div>
  );
}
 
export default Card;