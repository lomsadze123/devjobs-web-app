import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Main from "./components/Main";
import DataType from "./components/DataTypes";
import Filters from "./components/Filters";
import { Route, Routes, useLocation } from "react-router-dom";
import Job from "./components/Job";

const App = () => {
  const [data, setData] = useState<DataType[] | null>(null);
  const [width, setWidth] = useState(false);
  const location = useLocation();

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

    // make responsive better
    const query = window.matchMedia("(min-width: 768px)");
    const handleQuery = (e: MediaQueryListEvent) => {
      setWidth(e.matches);
    };
    query.addEventListener("change", handleQuery);
    setWidth(query.matches);

    return () => {
      query.removeEventListener("change", handleQuery);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F8] overflow-hidden pb-4">
      <Header />
      <div className="px-6 md:p-0">
        {location.pathname === "/" && <Filters width={width} />}
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/job/:id" element={<Job data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
