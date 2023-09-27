import image from "../../assets/WhatsApp_Image_2023-06-05_at_20.34.44-removebg-preview (1).png";
const Banner = () => {
  return (
    <div className="mb-10 bg-[#9873FF0A]">
      <div className="flex flex-col lg:flex-row-reverse container mx-auto items-center justify-between">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            One Step Closer To Your Dream Job
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="flex-1">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
