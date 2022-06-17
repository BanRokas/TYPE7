const ToDo = ({data, handleDelete, eilesNr}) => {
  const {id, title} = data;
  return (
    <div>
      <h1><span>{eilesNr}</span>{title}</h1>
      <button onClick={() => handleDelete(id)}>Trinti</button>
    </div>
  );
}
 
export default ToDo;