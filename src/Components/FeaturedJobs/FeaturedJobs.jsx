import { useState } from "react";
import Job from "./Job";

const FeaturedJobs = ({ jobs }) => {
  const [dataLength, setDataLength] = useState(4);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={jobs.length === dataLength ? "hidden" : ""}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn mb-5"
          >
            Show All
          </button>
        </div>
      </div>
      <div className={dataLength === 4 ? "hidden" : ' '}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(4)}
            className="btn mb-5"
          >
            See Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
