const ShowPets = ({data}) => {
  return (
    <div className="AtvaizduojamiAugintiniai">
      {
        data ?
        data.map((pet, i) => 
          <p key={i}>{pet.id ? pet.id : 'neturi id'} {pet.name}</p>
        ) :
        <p>Loading...</p>
      }
    </div>
  );
}
 
export default ShowPets;