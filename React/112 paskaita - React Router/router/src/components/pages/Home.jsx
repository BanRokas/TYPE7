import Table from "../common/Table";

const Home = ({table}) => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <div>
        <Table 
          table = {table}
        />
      </div>
    </>
  );
}
 
export default Home;