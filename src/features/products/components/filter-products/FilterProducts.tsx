import { useState } from "react";

import useCategories from "@hooks/useCategories";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface IData {
  activeTab: string;
  selectedTab: (catId: string) => void
}

const FilterProducts = ({ activeTab, selectedTab }: IData) => {
  const [openAccordion, setOpenAccordion] = useState(true);
  const { data: categories } = useCategories();
  return (
    <div className="w-1/6 h-fit p-4">
      <h3 className="text-secondary text-2xl font-medium capitalize mb-4"> filter by </h3>
      <div className="accordion flex flex-col gap-3">
        <div onClick={() => setOpenAccordion(prev => !prev)} className="accordion_header flex justify-between items-center cursor-pointer">
          <h4 className="text-secondary font-medium"> Category </h4>
          {openAccordion ? <FaChevronDown className="transition duration-500" /> : <FaChevronUp className="transition duration-500" /> }
        </div>
        <ul className={`flex flex-col gap-2 transition duration-500 ${openAccordion ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>
          <li onClick={() => selectedTab('')}  className={`text-gray-500 cursor-pointer transition duration-500 ${activeTab === '' ? 'text-secondary font-medium' : ''}`}>All Products</li>
          {categories?.map((category) => (
            <li 
              key={category._id} 
              onClick={() => selectedTab(category._id)} 
              className={`text-gray-500 cursor-pointer transition duration-500 ${activeTab === category._id ? 'text-secondary font-medium' : ''}`}
            > {category.name} </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterProducts;
