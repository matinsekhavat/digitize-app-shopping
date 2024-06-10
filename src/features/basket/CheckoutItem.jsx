import { IoCloseSharp } from "react-icons/io5";
import { e2p } from "../../utils/numConvertor";
import { useBasket } from "../../Context/BasketProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function CheckoutItem({ product }) {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    useBasket();

  return (
    <div className="flex  justify-between py-2  px-2 min-h-24">
      {/* right side */}
      <div className="flex gap-4">
        {/* product image */}
        <div className="size-20">
          <img src={product.imageSrc} alt="" className="h-full" />
        </div>
        {/* product name & price */}
        <div className="flex flex-col justify-between">
          <Link to={`/product/${product.category}/${product.id}`}>
            {product.name}
          </Link>
          <span className="text-orange-500 dark:text-slate-950 font-vazirBold text-xl">
            {e2p(product.price)}
          </span>
        </div>
      </div>
      {/* Left side */}
      <div className="flex flex-col justify-between items-end">
        <button
          onClick={() => {
            removeProduct(product.id);
            toast.success("محصول با موفقیت از سبد شما حذف شد");
          }}
          className="flex justify-center items-center text-3xl text-red-500  rounded-full"
        >
          <IoCloseSharp />
        </button>

        {/* Buttons */}
        <div className="flex items-center gap-2 h-max text-xl">
          <button
            onClick={() => increaseProductQuantity(product.id)}
            className="text-white  size-6 bg-red-400 rounded-full flex justify-center items-center"
          >
            +
          </button>
          <span>{product?.quantity}</span>
          <button
            onClick={() => decreaseProductQuantity(product.id)}
            className="text-white text-xl size-6 bg-red-400 rounded-full flex justify-center items-center"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
