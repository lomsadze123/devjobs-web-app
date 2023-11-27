import { useParams } from "react-router-dom";
import { WithNull } from "./Main";
import Logos from "./Logos";

const Job = ({ data, mode }: WithNull) => {
  const { id } = useParams();
  const numberId = !!id && parseFloat(id);

  if (numberId && data !== null) {
    return (
      <section className="max-w-[730px] md:mx-auto">
        <div
          className={`${
            mode === "light" ? "bg-white" : "bg-veryDarkBlue"
          } flex gap-[27px] flex-col items-center md:flex-row pb-8 mt-[-17px] rounded-md mb-6 md:p-0 md:justify-between md:pr-[43px]`}
        >
          <div className="text-center md:text-left flex flex-col md:flex-row items-center mt-[-26px] gap-6 md:m-0 md:gap-10">
            <img
              className="md:h-[140px]"
              src={Logos[data[numberId - 1].company.toLowerCase()]}
              alt={data[numberId - 1].company}
            />
            <div>
              <h2
                className={`text-xl mb-[6px] ${
                  mode === "light" ? "text-veryDarkBlue" : "text-white"
                }`}
              >
                {data[numberId - 1].company}
              </h2>
              <p className="text-darkGrey">
                {data[numberId - 1].company.toLowerCase().split(" ").join("")}
                .com
              </p>
            </div>
          </div>
          <a
            className={`py-3 px-5 ${
              mode === "light" ? "text-purple " : "text-white"
            } rounded-[5px] bg-purple bg-opacity-[0.1] hover:bg-opacity-[0.3512]`}
            href={data[numberId - 1].website}
            target="_blank"
            rel="noreferrer noopener"
          >
            Company Site
          </a>
        </div>
        <article
          className={`${
            mode === "light" ? "bg-white" : "bg-veryDarkBlue"
          } py-10 px-6 rounded-md mb-20 md:py-12 md:px-11`}
        >
          <div
            className={`${
              mode === "light" ? "text-darkGrey" : "text-[#9DAEC2]"
            } flex flex-col gap-[54px] md:flex-row mb-8 md:items-center md:justify-between md:mb-11`}
          >
            <div>
              <ul className="flex gap-8">
                <li>{data[numberId - 1].postedAt}</li>
                <li className="list-disc">{data[numberId - 1].contract}</li>
              </ul>
              <h2
                className={`text-veryDarkBlue my-2 text-xl ${
                  mode === "light" ? "text-veryDarkBlue" : "text-white"
                }`}
              >
                {data[numberId - 1].position}
              </h2>
              <h3 className="text-purple text-sm">
                {data[numberId - 1].location}
              </h3>
            </div>
            <a
              className="w-full text-center py-[14px] bg-purple text-white rounded-[5px] max-w-[141px] hover:bg-[#939BF4]"
              href={data[numberId - 1].apply}
              target="_blank"
              rel="noreferrer noopener"
            >
              Apply Now
            </a>
          </div>
          <div className="text-darkGrey leading-[26px]">
            <p>{data[numberId - 1].description}</p>
            <h3
              className={`mt-10 mb-[28px] ${
                mode === "light" ? "text-veryDarkBlue" : "text-white"
              } text-xl`}
            >
              Requirements
            </h3>
            <p className="mb-8">{data[numberId - 1].requirements.content}</p>
            <ul className="flex flex-col gap-2 mb-10">
              {data[numberId - 1].requirements.items.map((req, index) => (
                <li
                  className="list-disc ml-4 pl-5 marker:text-purple"
                  key={index}
                >
                  {req}
                </li>
              ))}
            </ul>
            <h3
              className={`text-xl ${
                mode === "light" ? "text-veryDarkBlue" : "text-white"
              } mb-[28px]`}
            >
              What You Will Do
            </h3>
            <p>{data[numberId - 1].role.content}</p>
            <ol className="flex flex-col gap-2 list-decimal ml-4 mt-8">
              {data[numberId - 1].role.items.map((item, index) => (
                <li
                  className="mr-[28px] pl-5 marker:font-bold marker:text-purple"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </article>
        <div
          className={`fixed left-0 w-full ${
            mode === "light" ? "bg-white" : "bg-veryDarkBlue"
          } bottom-0 text-center p-4 md:flex md:justify-center md:gap-[349px] md:px-10 md:items-center`}
        >
          <div className="hidden md:block text-left text-darkGrey">
            <h3
              className={`text-xl mb-1 ${
                mode === "light" ? "text-veryDarkBlue" : "text-white"
              }`}
            >
              {data[numberId - 1].position}
            </h3>
            <p>So Digital Inc.</p>
          </div>
          <a
            className="w-[90%] text-center py-[14px] bg-purple text-white rounded-[5px] inline-block md:max-w-[141px] hover:bg-[#939BF4]"
            href={data[numberId - 1].apply}
            target="_blank"
            rel="noreferrer noopener"
          >
            Apply Now
          </a>
        </div>
      </section>
    );
  }
};

export default Job;
