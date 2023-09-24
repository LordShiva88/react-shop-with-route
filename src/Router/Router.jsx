import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import ErrrPage from "../Pages/Error/Errorpage";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Shop from "../Pages/Shop/Shop";
import JobDetails from "../Components/FeaturedJobs/JobDetails";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrrPage></ErrrPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('../Jobs.json')
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/shop',
        element:<Shop></Shop>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../Jobs.json')

      }
    ]
  }
])  

export default Router;