const ShowPets = ({data, archyvuotiAugintini}) => {
  return (
    <div className="AtvaizduojamiAugintiniai">
      {
        data ?
        data.map((pet, i) => 
          <div id={pet.id} key={i} style={{display: "flex"}}>
            <p>{pet.id ? pet.id : 'neturi id'} {pet.name}</p>
            <button onClick = { archyvuotiAugintini }>Trinti</button>
          </div>
        ) :
        <p>Loading...</p>
      }
    </div>
  );
}
 
export default ShowPets;