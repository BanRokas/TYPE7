import Card from "./Card";

const Content = ({title, paragraph, image1, imgText1, image2, imgText2}) => {
  return (
    <div style={{backgroundColor: `rgb(202, 221, 228)`}}>
      <div className="Content_Hero">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="Content_Cards">
        <Card
          image={image1}
          imageText={imgText1}
        />
        <Card
          image={image1}
          imageText={imgText1}
        />
        <Card
          image={image1}
          imageText={imgText1}
        />
        <Card
          image={image2}
          imageText={imgText2}
        />
        <Card
          image={image2}
          imageText={imgText2}
        />
        <Card
          image={image2}
          imageText={imgText2}
        />
      </div>
    </div>
  );
}
 
export default Content;