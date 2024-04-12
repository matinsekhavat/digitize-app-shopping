import React, { useEffect } from "react";
import BreadCrumb from "../ui/BreadCrumb";
import ColorGroup from "../ui/ColorGroup";
import DeliveryStatus from "../features/singleProduct/DeliveryStatus";
import ProductPropertyList from "../features/singleProduct/ProductPropertyList";
import AddBasket from "../features/basket/AddBasket";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/apiProducts";
import Spinner from "../ui/Spinner";
import { useBasket } from "../Context/BasketProvider";
function Product() {
  const { category, id } = useParams();
  const { basket } = useBasket();

  const { data, isLoading } = useQuery({
    queryKey: ["singleProdcut", category, id],
    queryFn: getSingleProduct,
  });
  useEffect(() => {
    !isLoading && (document.title = data.name);
  }, [data?.name]);

  if (isLoading) return <Spinner />;

  const isInProduct = basket.some((product) => product.id == id);

  return (
    <div className="container">
      {/* <BreadCrumb /> */}

      {/* Main Wrapper */}

      <div className="flex flex-col items-stretch sm:justify-center lg:flex-row lg:justify-between">
        {/* Right upperside */}
        <div className="flex flex-col items-center gap-4 md:flex-row  justify-between dark:bg-slate-500 rounded-md p-8 ">
          {/* product images  */}
          <div className="flex flex-col items-center md:gap-4">
            {/* Hero image */}
            <div className="md:size-56 rounded-md overflow-hidden">
              <img
                src={data.imageSrc}
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>
          {/* product details */}
          <div className="grow-[0.2]">
            {/* upperside */}
            <div className="md:border-b">
              <div className="hidden md:flex md:items-center">
                <span>تلفن همراه </span>
                <span>اپل</span>
              </div>
              <div className="text-center">
                <p className="font-vazirBold text-lg text-stone-800 mb-1">
                  {data.name}
                </p>
                <p className="font-light text-sm text-stone-600 dark:text-slate-950">
                  Apple iphone 13 128GB
                </p>
              </div>
            </div>

            {/* Lowerside */}
            <div className="mt-8">
              {/* color selection */}
              <div className="flex items-center justify-between">
                <p>انتخاب رنگ:</p>
                <ColorGroup />
              </div>
              <div className="md:hidden">
                <AddBasket
                  price={data.price}
                  data={data}
                  isInProduct={isInProduct}
                />
              </div>

              {/* Delivery status */}
              <div className="md:hidden">
                <DeliveryStatus />
              </div>
              {/* Product property */}
              <ProductPropertyList />
            </div>
          </div>
          <div></div>
          {/* end wrapper */}
        </div>

        <div className="hidden rounded-md md:flex md:items-center md:flex-col md:gap-4    md:justify-between md:self-center  ">
          <Link
            to="/products"
            className="text-blue-500 text-xl transition-all  hover:bg-blue-400 px-4 py-2 rounded-md hover:text-white"
          >
            بازگشت به فروشگاه
          </Link>
          <div className="bg-gray-200 p-4 rounded-md ">
            <DeliveryStatus direction="col" />
            <AddBasket
              price={data.price}
              data={data}
              isInProduct={isInProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
