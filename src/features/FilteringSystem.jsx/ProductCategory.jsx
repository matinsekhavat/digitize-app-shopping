import { useFilter } from "../../Context/FilterProvider";

function ProductCategory() {
  const { productCategory, setSelectedCategory, selectedCategory } =
    useFilter();

  return (
    <div>
      <span className="font-vazirBold text-orange-500 text-xl">محصولات</span>
      <ul className="flex flex-col gap-2 mt-3">
        {productCategory.map((item) => (
          <li
            className={`cursor-pointer select-none ${
              item.value === selectedCategory ? "text-orange-400" : ""
            }`}
            onClick={() => setSelectedCategory(item.value)}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategory;
