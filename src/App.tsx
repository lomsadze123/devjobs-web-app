import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Main from "./components/Main";
import DataType from "./components/DataTypes";
import Filters from "./components/Filters";

const App = () => {
  const [data, setData] = useState<DataType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.log("Fetching error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F8] overflow-hidden pb-4">
      <Header />
      <div className="px-6 md:p-0">
        <Filters />
        <Main data={data} />
      </div>
    </div>
  );
};

export default App;
