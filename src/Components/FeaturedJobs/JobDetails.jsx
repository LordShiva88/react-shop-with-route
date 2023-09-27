import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    responsibilities,
    education_qualification,
    experiences,
    contact_information,
    title,
    salary,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(id)
    toast("You have applied successfully!");
  };

  const { email, phone, website, address } = contact_information;
  return (
    <div>
      <div className="mx-auto">
        <h1 className="text-4xl text-center font-bold py-20 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
          Job Details
        </h1>
      </div>
      <div className="container mx-auto my-10">
        <div className="flex gap-4 md:grid-cols-4">
          <div className="md:col-span-3">
            <h2 className="text-xl text-gray-500">
              {" "}
              <span className="text-black font-medium">Job Description: </span>
              {job_description}
            </h2>
            <h2 className="text-xl text-gray-500">
              {" "}
              <span className="text-black font-medium">
                Education_qualification:{" "}
              </span>
              {education_qualification}
            </h2>
            <h2 className="text-xl text-gray-500">
              {" "}
              <span className="text-black font-medium">Responsibilities: </span>
              {responsibilities.map((respon, id) => (
                <li key={id}>{respon}</li>
              ))}
            </h2>
            <h2 className="text-xl text-gray-500">
              {" "}
              <span className="text-black font-medium">Experiences:: </span>
              {experiences.map((experience, id) => (
                <li key={id}>{experience}</li>
              ))}
            </h2>
          </div>
          <div className="lg:w-1/4 w-full">
            <div className=" shadow lg:bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-6">
              <h2 className="text-xl font-bold">Job Details</h2>
              <hr />
              <div>
                <h2 className="text-xl text-gray-500">Salary: {salary}</h2>
                <h2 className="text-xl text-gray-500">
                  {" "}
                  <span className="text-black font-medium">Job Title: </span>
                  {title}
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold">Contact Information</h2>
                <hr />
                <h2 className="text-xl text-gray-500">
                  {" "}
                  <span className="text-black font-medium">Email: </span>
                  {email}
                </h2>
                <h2 className="text-xl text-gray-500">
                  {" "}
                  <span className="text-black font-medium">Phone: </span>
                  {phone}
                </h2>
                <h2 className="text-xl text-gray-500">
                  {" "}
                  <span className="text-black font-medium">Website: </span>
                  {website}
                </h2>
                <h2 className="text-xl text-gray-500">
                  {" "}
                  <span className="text-black font-medium">Address: </span>
                  {address}
                </h2>
              </div>
            </div>

            <button onClick={handleApplyJob} className="btn">
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
