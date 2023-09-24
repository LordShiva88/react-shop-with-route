import { BsCurrencyDollar } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    job_type,
    job_category,
    location,
    salary,
    image_url,
    title,
    company_name,
    remote_or_onsite,
  } = job;
  return (
      <div className="border p-10 space-y-5">
        <div className="flex justify-center">
          <img src={image_url} className="w-32 h-auto" alt="" />
        </div>
        <h2 className="text-[20px] font-semibold">{title}</h2>
        <h2 className="text-xl">{company_name}</h2>
        <div className="flex gap-6">
          <h2 className="border rounded-lg p-3">{job_type}</h2>
          <h2 className="border rounded-lg p-3">{remote_or_onsite}</h2>
        </div>
        <div className="flex gap-10 text-xl font-semibold">
          <span className="flex items-center">
            <GrLocation className="text-red-500 text-[25px]"></GrLocation>{" "}
            <p>{location}</p>
          </span>
          <span className="flex items-center">
            <BsCurrencyDollar className="text-red-500 text-[25px]"></BsCurrencyDollar>{" "}
            <p>{salary}</p>
          </span>
        </div>
        <Link to={`/job/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>

  );
};

export default Job;
