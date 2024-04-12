import AsideFilter from "../features/FilteringSystem.jsx/AsideFilter";

function Aside() {
  // Desktop mode include filtering system and etc
  return (
    <aside className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-red-800 min-h-[600px] sticky top-0 dark:text-slate-50 ">
      <AsideFilter />
    </aside>
  );
}

export default Aside;
