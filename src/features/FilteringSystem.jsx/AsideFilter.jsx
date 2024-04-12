import React from "react";
import { useFilter } from "../../Context/FilterProvider";
import FilterList from "./FilterList";
import ProductCategory from "./ProductCategory";

function AsideFilter() {
  const { filterList, selectedCategory } = useFilter();

  return (
    <div className="hidden md:flex md:flex-col">
      <ProductCategory />
      {filterList[selectedCategory].map((filter) => (
        <FilterList key={crypto.randomUUID()} filter={filter} />
      ))}
    </div>
  );
}

export default AsideFilter;
