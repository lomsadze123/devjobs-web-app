import React, { useState } from "react";
import location from "../assets/other/icon-location.svg";
import filterIcon from "../assets/other/icon-filter.svg";

const Filters = ({
  width,
  setSearch,
}: {
  width: boolean;
  setSearch: React.Dispatch<
    React.SetStateAction<{
      title: string;
      location: string;
      fullTime: boolean;
    }>
  >;
}) => {
  const [popup, setPopup] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    fullTime: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch((prevSearch) => ({
      ...prevSearch,
      title: filters.title,
    }));
    setSearch((prevSearch) => ({
      ...prevSearch,
      location: filters.location,
    }));
    setSearch((prevSearch) => ({
      ...prevSearch,
      fullTime: filters.fullTime,
    }));
    setPopup(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 pl-6 pr-4 bg-white text-veryDarkBlue mt-[-40px] rounded-md md:mx-6 lg:mx-auto max-w-[1115px] md:flex md:items-center md:justify-center md:px-6 md:py-0"
    >
      <div className="flex flex-row-reverse justify-center items-center md:flex-row md:gap-4 md:border-r-[1px] md:border-[rgba(110, 128, 152, 0.2)] md:w-[301px] md:py-7">
        <div className="p-[10px] bg-purple md:bg-white rounded md:p-0">
          <svg
            className="p-[2px] md:p-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
              fill={!width ? "white" : "#5964E0"}
            />
          </svg>
        </div>
        <img
          onClick={() => setPopup(true)}
          className="w-[19.968px] h-auto mr-6 md:hidden"
          src={filterIcon}
          alt="filter icon"
        />
        <input
          onChange={(e) =>
            setFilters((prevFilter) => ({
              ...prevFilter,
              title: e.target.value,
            }))
          }
          className="outline-0 w-full"
          type="text"
          placeholder="Filter by title…"
        />
      </div>
      <div
        className={`${
          !width && popup
            ? "fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.2)] flex flex-col justify-center items-center w-full"
            : "hidden md:block md:w-[551px]"
        }`}
      >
        <div className="bg-white rounded-md pb-6 md:flex md:items-center md:p-0">
          <div className="flex gap-4 p-6 border-b-[1px] border-[rgba(110, 128, 152, 0.2)] md:pr-0 md:border-0 md:border-r-[1px] md:py-[27px] md:pl-[23px]">
            <img src={location} alt="location icon" />
            <input
              onChange={(e) =>
                setFilters((prevFilter) => ({
                  ...prevFilter,
                  location: e.target.value,
                }))
              }
              className="outline-0 max-w-[320px] w-[70vw] md:w-full"
              type="text"
              placeholder="Filter by location…"
            />
          </div>
          <div className="flex gap-3 p-6 md:p-0 md:w-[176px] md:pl-8">
            <input
              onChange={(e) =>
                setFilters((prevFilter) => ({
                  ...prevFilter,
                  fullTime: e.target.checked,
                }))
              }
              className="appearance-none w-6 h-6 bg-withOpacity checked:bg-purple checked:after:content-['✔']
              checked:after:text-white checked:after:ml-[6.5px] cursor-pointer"
              type="checkbox"
            />
            <h3>
              Full Time <span className="md:hidden"> Only</span>{" "}
            </h3>
          </div>
          <div className="px-6 w-full md:p-0 md:ml-[26px] md:w-[19%]">
            <button
              className="w-full bg-purple rounded-[5px] py-4 text-white md:max-w-[123px] md:px-2 hover:bg-[#939BF4]"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filters;
