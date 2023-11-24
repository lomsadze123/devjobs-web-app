import { useParams } from "react-router-dom";
import { WithNull } from "./Main";
import Logos from "./Logos";

const Job = ({ data }: WithNull) => {
  const { id } = useParams();
  const numberId = !!id && parseFloat(id);

  if (numberId && data !== null) {
    return (
      <section>
        <div className="bg-white flex gap-[27px] flex-col items-center md:flex-row pb-8 mt-[-17px] rounded-md mb-6">
          <div className="text-center flex flex-col md:flex-row items-center mt-[-26px] gap-6">
            <img
              src={Logos[data[numberId - 1].company.toLowerCase()]}
              alt={data[numberId - 1].company}
            />
            <div>
              <h2 className="text-xl">{data[numberId - 1].company}</h2>
              <p>
                {data[numberId - 1].company.toLowerCase().split(" ").join("")}
                .com
              </p>
            </div>
          </div>
          <a
            className="py-3 px-5 text-purple rounded-[5px] bg-purple bg-opacity-[0.1]"
            href=""
          >
            Company Site
          </a>
        </div>
        <article className="bg-white py-10 px-6 rounded-md mb-20">
          <div className="text-darkGrey flex flex-col gap-[54px] md:flex-row mb-8">
            <div>
              <ul className="flex gap-8">
                <li>{data[numberId - 1].postedAt}</li>
                <li className="list-disc">{data[numberId - 1].contract}</li>
              </ul>
              <h2 className="text-veryDarkBlue my-2 text-xl">
                {data[numberId - 1].position}
              </h2>
              <h3 className="text-purple text-sm">
                {data[numberId - 1].location}
              </h3>
            </div>
            <a
              className="w-full text-center py-[14px] bg-purple text-white rounded-[5px]"
              href=""
            >
              Apply Now
            </a>
          </div>
          <div className="text-darkGrey leading-[26px]">
            <p>{data[numberId - 1].description}</p>
            <h3 className="mt-10 mb-[28px] text-veryDarkBlue text-xl">
              Requirements
            </h3>
            <p className="mb-8">{data[numberId - 1].requirements.content}</p>
            <ul className="flex flex-col gap-2 mb-10">
              {data[numberId - 1].requirements.items.map((req, index) => (
                <li className="list-disc ml-4 pl-5" key={index}>
                  {req}
                </li>
              ))}
            </ul>
            <h3 className="text-xl text-veryDarkBlue mb-[28px]">
              What You Will Do
            </h3>
            <p>{data[numberId - 1].role.content}</p>
            <ol className="flex flex-col gap-2 list-decimal ml-4 mt-8">
              {data[numberId - 1].role.items.map((item, index) => (
                <li className="mr-[28px] pl-5 marker:font-bold" key={index}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </article>
        <div className="fixed left-0 w-full bg-white bottom-0 text-center p-4">
          <a
            className="w-[90%] text-center py-[14px] bg-purple text-white rounded-[5px] inline-block"
            href=""
          >
            Apply Now
          </a>
        </div>
      </section>
    );
  }
};

export default Job;
