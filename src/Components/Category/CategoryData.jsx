

const CategoryData = ({category}) => {
  const {category_name,logo,availability} = category;
  return (
    <div className="p-10 bg-teal-50 text-center shadow-md">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
        <h2 className="text-2xl font-semibold">{category_name}</h2>
        <p className="text-xl text-center text-gray-500 mt-4">{availability}</p>
    </div>
  );
};

export default CategoryData;