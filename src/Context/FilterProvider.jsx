import { createContext, useContext, useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
const FilterContext = createContext();

function FilterProvider({ children }) {
  const filterList = {
    phone: [
      {
        name: "برند محصول",
        hasSub: true,
        subList: ["اپل", "سامسونگ", "شیاومی"],
      },
      {
        name: "رنگ محصول",
        hasSub: true,
        subList: ["ابی", "خاکستری", "مشکی"],
      },
    ],
    laptop: [
      {
        name: "برند محصول",
        hasSub: true,
        subList: ["ایسوس", "لنوو"],
      },
      {
        name: "رنگ محصول",
        hasSub: true,
        subList: ["ابی", "خاکستری", "مشکی"],
      },
    ],
    watch: [
      {
        name: "برند محصول",
        hasSub: true,
        subList: ["سامسونگ", "اپل"],
      },
      {
        name: "رنگ محصول",
        hasSub: true,
        subList: ["سفید", "خاکستری", "مشکی", "طلایی", "قهوه ای", "صورتی"],
      },
    ],
  };
  const productCategory = [
    { id: 1, title: "گوشی", value: "phone" },
    { id: 2, title: "لپ تاپ", value: "laptop" },
    { id: 3, title: "ساعت هوشمند", value: "watch" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("phone");
  const [isModalOpen, setisModalOpen] = useState(false);
  function handleClick() {
    setisModalOpen((prev) => !prev);
  }

  const iconsObj = {
    filter: <CiFilter />,
    sort: <FaSortAmountDownAlt />,
  };

  return (
    <FilterContext.Provider
      value={{
        isModalOpen,
        setisModalOpen,
        handleClick,
        iconsObj,
        filterList,
        productCategory,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("cant access  filter outside this zone");
  return context;
}

export default FilterProvider;
