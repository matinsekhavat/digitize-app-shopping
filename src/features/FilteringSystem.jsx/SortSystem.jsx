import React, { useState } from "react";

import SortModal from "./SortModal";
import { useFilter } from "../../Context/FilterProvider";
// Filtering system based on status. etc: most expensive
function SortSystem({ icon }) {
  const { iconsObj, handleClick, isModalOpen, setisModalOpen } = useFilter();
  return (
    <>
      <div
        className="flex container items-center px-4 py-2 bg-white gap-2 md:hidden rounded-md grow text-lg cursor-pointer hover:bg-slate-100 transition-colors hover:ring-2 ring-slate-300 "
        onClick={handleClick}
      >
        <span className="text-orange-500">{iconsObj[icon]}</span>
        <span className="text-base">جدیدترین محصول</span>
      </div>

      <SortModal isOpen={isModalOpen} setisModalOpen={setisModalOpen} />
    </>
  );
}

export default SortSystem;
