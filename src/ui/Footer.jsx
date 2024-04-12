import ContactUs from "./ContactUs";
import Logo from "./Logo";

function Footer() {
  const quickAccess = [
    { id: 1, title: "تلفن همراه", path: "/phone" },
    { id: 2, title: "لپ تاپ", path: "/laptop" },
    { id: 3, title: "ساعت هوشمند", path: "/Watch" },
  ];
  return (
    <footer className="px-4 bg-white pt-4 pb-20 md:pb-4 dark:bg-slate-600 dark:text-slate-200">
      {/* About us description */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        {/* shop  Logo */}
        <div>
          <div className=" relative inline-block">
            <Logo hasPsuedo={true} />
          </div>
          {/* About company description */}
          <p className="text-md sm:text-lg">
            <span className="text-orange-500 font-vazirBold text-xl">
              دیجی‌ تایز{" "}
            </span>
            عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و
            ساعت هوشمند می‌باشد.دیجی تایز افتخار این را داشته که به{" "}
            <span className="text-orange-500 font-vazirBold text-xl">
              ۱۲۲,۲۳۲
            </span>{" "}
            نفر تا به اکنونخدمت رسانی داشته باشد. هم اکنون دیجیتایزی شوید و از
            تخفیفات بلک فرایدی بهره مند شوید.😍
          </p>
        </div>
        {/* Map and contacts  wrapper*/}
        <div className="flex justify-between my-4 md:items-end md:justify-end md:gap-4">
          {/* quick access */}
          <ul className="mt-4  text-slate-800">
            <p className="font-vazirBold text-xl mb-2">محصولات</p>
            <div className="flex flex-col gap-2">
              {quickAccess.map((nav) => (
                <li className=" text-lg dark:text-black " key={nav.id}>
                  {nav.title}
                </li>
              ))}
            </div>
          </ul>

          {/* Map & phone wrapper */}
          <div className="flex flex-col items-end">
            {/* Map banner */}
            <div className="size-[10rem]">
              <img
                src="public/images/map.png"
                alt="shop address"
                className="w-full"
              />
            </div>

            {/* time */}
            <ContactUs />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
