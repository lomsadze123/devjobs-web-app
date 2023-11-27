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
  const [search, setSearch] = useState({
    title: "",
    location: "",
    fullTime: false,
  });
  const location = useLocation();
  const [mode, setMode] = useState("light");
  const storage = localStorage.getItem("mode") ?? "light";

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

    setMode(storage);

    // make responsive better
    const handleQuery = () => {
      setWidth(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleQuery);
    return () => {
      window.removeEventListener("resize", handleQuery);
    };
  }, []);

  const handleMode = () => {
    const updateMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", updateMode);
    setMode(updateMode);
  };

  return (
    <div
      className={`min-h-screen ${
        mode === "light" ? "bg-[#F4F6F8]" : "bg-[#121721]"
      } overflow-hidden pb-4 md:pb-8`}
    >
      <Header handleMode={handleMode} mode={mode} />
      <div className="px-6 md:p-0">
        {location.pathname === "/" && (
          <Filters width={width} setSearch={setSearch} mode={mode} />
        )}
        <Routes>
          <Route
            path="/"
            element={<Main data={data} search={search} mode={mode} />}
          />
          <Route path="/job/:id" element={<Job data={data} mode={mode} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
