const Table = ({table}) => {
  console.log(table);

  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(table[0]).map((element, i) => 
              <th key={i}>{element}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          table.map((row, i) =>
            <tr key={i}>
              {
                Object.keys(row).map((element, i) => 
                  <td key={i}>{row[element]}</td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
 
export default Table;