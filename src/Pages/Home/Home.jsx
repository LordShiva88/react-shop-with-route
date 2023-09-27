import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import FeaturedJobs from "../../Components/FeaturedJobs/FeaturedJobs";
import { Helmet } from "react-helmet";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto">
        <Category></Category>
        <FeaturedJobs jobs={jobs}></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
