import { Link } from "react-router-dom";
import DataType from "./DataTypes";
import Logos from "./Logos";
import { useState } from "react";

export interface WithNull {
  data: DataType[] | null;
}

interface AddTypes extends WithNull {
  search: {
    title: string;
    location: string;
    fullTime: boolean;
  };
}

const Main = ({ data, search }: AddTypes) => {
  const [load, setLoad] = useState(6);
  const check =
    search.title.length > 0 ||
    search.location.length > 0 ||
    search.fullTime === true;

  return (
    <main>
      <div className="mt-[57px] flex justify-center gap-[49px] md:gap-x-[30px] flex-wrap max-w-[1217px] mx-auto">
        {data?.slice(0, check ? 30 : load).map(
          (items) =>
            items.position.toLowerCase().includes(search.title.toLowerCase()) &&
            items.location
              .toLowerCase()
              .includes(search.location.toLowerCase()) &&
            (!search.fullTime || items.contract === "Full Time") && (
              <Link to={`/job/${items.id}`} key={items.id}>
                <div className="bg-white text-darkGrey pl-6 pb-9 rounded-md w-[350px] group">
                  <img
                    className="w-[50px] h-auto inline-block mt-[-27.5px]"
                    src={Logos[items.company.toLowerCase()]}
                    alt=""
                  />
                  <ul className="flex gap-8 mt-6">
                    <li>{items.postedAt}</li>
                    <li className="list-disc">{items.contract}</li>
                  </ul>
                  <h2 className="text-veryDarkBlue my-[10px] text-xl group-hover:text-darkGrey">
                    {items.position}
                  </h2>
                  <p>{items.company}</p>
                  <h3 className="text-purple mt-10 text-sm">
                    {items.location}
                  </h3>
                </div>
              </Link>
            )
        )}
      </div>
      {load < 30 && !check && (
        <button
          onClick={() => setLoad(load + 6)}
          className="py-4 px-[30px] bg-purple rounded-[5px] max-w-[141px] w-full mx-auto text-white block mt-8 md:mt-[56px] md:hover:bg-[#939BF4]"
        >
          Load More
        </button>
      )}
    </main>
  );
};

export default Main;
