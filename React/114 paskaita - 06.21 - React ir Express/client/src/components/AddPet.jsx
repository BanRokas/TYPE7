const AddPet = ({ naujasAugintinis }) => {
  return (
    <div className="SukurtiNaujaAugintini">
      <form onSubmit={ naujasAugintinis }>
        <input type="text" name="vardas" placeholder="Augintinio vardas..."/>
        <input type="date" name="gimimoData" placeholder="Augintinio gimimo data..." />
        <input type="text" name="elPastas" placeholder="Šeimininko el. paštas..." />
        <input type="submit" />
      </form>
    </div>
  );
}
 
export default AddPet;