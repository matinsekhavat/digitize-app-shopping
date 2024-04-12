import React, { useState } from "react";
import { getProduct } from "../services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "../Context/FilterProvider";

function Pagination() {
  const { selectedCategory } = useFilter();
  const perPage = 6;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => getProduct(selectedCategory, perPage),
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / perPage);
  console.log(data);
  const btnArray =
    !isLoading && Array.from({ length: totalPages }, (_, i) => i);
  console.log(btnArray);
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex items-center gap-2">
        {btnArray.map((item) => (
          <p key={crypto.randomUUID()}>{item + 1}</p>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
