import { useState } from "react";
import Job from "./Job";
import PropTypes from 'prop-types';

const FeaturedJobs = ({ jobs }) => {
  const [dataLength, setDataLength] = useState(4);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center Job Category List">Featured Jobs</h2>
      <p className="text-xl font-semibold text-center text-gray-500 mt-4"> Explore thousands of job opportunities with all the information you
          need. Its your future</p>
      <div className="grid md:grid-cols-2 gap-5 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={jobs.length === dataLength ? "hidden" : ""}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="hover:bg-teal-100 bg-teal-200 py-2 rounded-lg px-3 mb-5"
          >
            Show All
          </button>
        </div>
      </div>
      <div className={dataLength === 4 ? "hidden" : ' '}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(4)}
            className="hover:bg-teal-100 bg-teal-200 py-2 rounded-lg px-3 mb-5"
          >
            See Less
          </button>
        </div>
      </div>
    </div>
  );
};
FeaturedJobs.propTypes = {
  jobs: PropTypes.array.isRequired
};
export default FeaturedJobs;
