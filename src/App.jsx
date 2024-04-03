import Table from "./components/Table";
import Tablee from "./components/Tablee";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[1000px] h-[400px] overflow-auto p-4">
        <Table />
        {/* <Tablee /> */}
      </div>
    </div>
  );
};

export default App;
