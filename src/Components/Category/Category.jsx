import { useEffect } from "react";
import { useState } from "react";
import CategoryData from "./CategoryData";


const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center Job Category List">Job Category List</h2>
      <p className="text-xl font-semibold text-center text-gray-500 mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {
          categories.map(category => <CategoryData key={category.id} category={category} ></CategoryData>)
        }
      </div>
    </div>
  );
};

export default Category;