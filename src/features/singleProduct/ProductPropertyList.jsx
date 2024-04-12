import ProductPropertyItem from "./ProductPropertyItem";

function ProductPropertyList() {
  return (
    <div className="mt-2">
      <p className="font-vazirBold">ویژگی های کالا:</p>
      <ul className="flex flex-col gap-2">
        <ProductPropertyItem />
        <ProductPropertyItem />
        <ProductPropertyItem />
      </ul>
    </div>
  );
}

export default ProductPropertyList;
