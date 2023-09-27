import { BsCurrencyDollar } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
  const {
    id,
    job_type,
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
        <div className="flex lg:flex-row flex-col gap-10 text-xl font-semibold">
          <span className="flex items-center">
            <GrLocation className="text-red-500 text-[25px]"></GrLocation>{" "}
            <p>{location}</p>
          </span>
          <span className="flex items-center">
            <BsCurrencyDollar className="text-red-500 text-[25px]"></BsCurrencyDollar>{" "}
            <p>{salary}</p>
          </span>
        </div>
        <div className="flex justify-center">
        <Link to={`/job/${id}`}>
          <button className="hover:bg-teal-100 bg-teal-200 py-2 rounded-lg px-3 ">View Details</button>
        </Link>
        </div>
      </div>

  );
};
Job.propTypes = {
  job: PropTypes.object.isRequired
};
export default Job;
