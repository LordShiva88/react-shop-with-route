import { getStroedJobApplication } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";

import AppliedDetails from "./AppliedDetails";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  useEffect(() => {
    const appliedJobLS = getStroedJobApplication();
    if (jobs.length > 0) {
      const filterJob = jobs.filter((job) => appliedJobLS.includes(job.id));
      setAppliedJob(filterJob);
      setDisplayJob(filterJob);
    }
  }, [jobs]);

  const handleJoBFilter = filter => {
    if(filter === 'all'){
      setDisplayJob(appliedJobs)
    }else if(filter === 'Remote'){
      const all = jobs.filter((job) => job.remote_or_onsite === "Remote")
      setDisplayJob(all)
    }else if(filter === 'Onsite'){
      const all = jobs.filter((job) => job.remote_or_onsite === "Onsite")
      setDisplayJob(all)
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Career Hub | Applied Job</title>
      </Helmet>
      <div className="bg-[#9873FF0A]">
        <h1 className="md:text-5xl text-2xl font-bold text-center py-32">
          Applied Jobs
        </h1>
      </div>

      <div className="container mx-auto">


        <div className="dropdown mt-5">
          <label tabIndex={0} className="btn m-1">
            Sort By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() =>handleJoBFilter('all')}>All</button>
            </li>
            <li>
              <button  onClick={() =>handleJoBFilter('Remote')}>Remote</button>
            </li>
            <li>
              <button onClick={() =>handleJoBFilter('Onsite')}>Onsite</button>
            </li>
          </ul>
        </div>

        <div className="container mx-auto flex flex-col gap-5 m-10">
          {displayJob.map((job) => (
            <AppliedDetails key={job.id} job={job}></AppliedDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
