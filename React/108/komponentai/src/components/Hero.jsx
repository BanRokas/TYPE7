const Hero = ({title, paragraph, buttonText, backgroundImage}) => {
  // const parTwoLiner = [paragraph.slice(0, paragraph.length / 2), paragraph.slice((paragraph.length / 2))];
  return (
    <div className="Hero" style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Hero;