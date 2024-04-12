import React from "react";
import SortSystem from "../features/FilteringSystem.jsx/SortSystem";
import SingleProduct from "../features/products/SingleProduct";
import Products from "../features/products/Products";

function Home() {
  return (
    <section>
      {/* filter system in Mobile design */}
      <div className="flex items-center gap-2">
        <SortSystem icon={"sort"} />
        <SortSystem icon={"filter"} />
      </div>
      {/* Products */}

      {/* <div className="grid grid-cols-2 gap-2">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div> */}
      <Products />
    </section>
  );
}

export default Home;
