import Card from "./Card";

const Content = ({title, paragraph, cardsInfo}) => {
  return (
    <div style={{backgroundColor: `rgb(202, 221, 228)`}}>
      <div className="Content_Hero">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="Content_Cards">
        {
          cardsInfo.map((cardInfo, i) => 
            <Card
              key={i}
              image={cardInfo.image}
              imageText={cardInfo.text}
            />
          )
        }
      </div>
    </div>
  );
}
 
export default Content;