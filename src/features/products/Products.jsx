import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import Aside from "../../ui/Aside";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useFilter } from "../../Context/FilterProvider";
import { getProduct } from "../../services/apiProducts";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import ProductCategory from "../FilteringSystem.jsx/ProductCategory";

function Products() {
  const { selectedCategory } = useFilter();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: getProduct,
  });
  useEffect(() => {
    document.title = selectedCategory;
  }, [selectedCategory]);

  return (
    <div className=" flex flex-col  lg:grid lg:min-h-dvh lg:grid-cols-[15rem_1fr] px-2 gap-4">
      {/* Aside col */}
      <div className="dark:text-white lg:hidden">
        <ProductCategory />
      </div>
      <div className="hidden lg:block">
        <Aside />
      </div>
      {/* Main col */}
      <section className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {isLoading && <Spinner />}
          {data?.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
        {/* <Pagination /> */}
      </section>
    </div>
  );
}

export default Products;
