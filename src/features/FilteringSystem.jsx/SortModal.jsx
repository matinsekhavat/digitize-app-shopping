import React, { useEffect, useRef } from "react";
import FilterList from "./FilterList";
import { useFilter } from "../../Context/FilterProvider";

function SortModal({ setModal, isOpen, setisModalOpen }) {
  const { filterList } = useFilter();
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setisModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div
      ref={modalRef}
      className={`h-[70dvh] overflow-y-scroll fixed bottom-0 right-0 left-0 px-4  py-8 bg-white transition-all duration-300  rounded-t-2xl  z-50 text-orange-400 border-t shadow-2xl shadow-black ${
        !isOpen ? "hidden invisible  " : ""
      }`}
    >
      <p className="font-vazirBold text-orange-500">فیلتر </p>
      {filterList.map((filter) => (
        <FilterList key={crypto.randomUUID()} filter={filter} />
      ))}
    </div>
  );
}

export default SortModal;
