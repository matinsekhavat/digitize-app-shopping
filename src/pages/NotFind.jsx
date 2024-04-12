// import NotFound from "./public/images/404.webp";
import { useNavigate } from "react-router-dom";
function NotFind() {
  const navigate = useNavigate();
  return (
    <div className=" container flex flex-col items-center gap-4 md:flex-row ">
      <div className="basis-1/2">
        <img src="/public/images/404.webp" alt="" />
      </div>
      <div className="text-center">
        <p>صفحه مورد نظر شما یا یافت نشد یا در حال توسعه میباشد</p>
        <button
          onClick={() => navigate("/products")}
          className="px-4 my-2 py-2 bg-purple-400 rounded-md font-vazirBold text-white"
        >
          بازگشت به فروشگاه
        </button>
      </div>
    </div>
  );
}

export default NotFind;
