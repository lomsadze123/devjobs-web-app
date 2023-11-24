import { Link } from "react-router-dom";
import DataType from "./DataTypes";
import Logos from "./Logos";

export interface WithNull {
  data: DataType[] | null;
}

const Main = ({ data }: WithNull) => {
  return (
    <main>
      <div className="mt-[57px] flex justify-center gap-[49px] md:gap-[30px] flex-wrap max-w-[1217px] mx-auto">
        {data?.map((items) => (
          <Link to={`/job/${items.id}`} key={items.id}>
            <div className="bg-white text-darkGrey pl-6 pb-9 rounded-md w-[350px]">
              <img
                className="w-[50px] h-auto inline-block mt-[-27.5px]"
                src={Logos[items.company.toLowerCase()]}
                alt=""
              />
              <ul className="flex gap-8 mt-6">
                <li>{items.postedAt}</li>
                <li className="list-disc">{items.contract}</li>
              </ul>
              <h2 className="text-veryDarkBlue my-[10px] text-xl">
                {items.position}
              </h2>
              <p>{items.company}</p>
              <h3 className="text-purple mt-10 text-sm">{items.location}</h3>
            </div>
          </Link>
        ))}
      </div>
      <button className="py-4 px-[30px] bg-purple rounded-[5px] max-w-[141px] w-full mx-auto text-white block mt-8 md:mt-[56px]">
        Load More
      </button>
    </main>
  );
};

export default Main;
