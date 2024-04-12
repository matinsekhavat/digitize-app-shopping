function FilterItem({ item }) {
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        <label htmlFor={item} className="cursor-[inherit] select-none">
          {item}
        </label>
        <input type="checkbox" name="" id={item} />
      </div>
    </div>
  );
}

export default FilterItem;
