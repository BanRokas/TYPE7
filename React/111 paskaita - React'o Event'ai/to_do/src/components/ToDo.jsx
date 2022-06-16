const ToDo = ({data, handleDelete}) => {
  const {id, title} = data;
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => handleDelete(id)}>Trinti</button>
    </div>
  );
}
 
export default ToDo;