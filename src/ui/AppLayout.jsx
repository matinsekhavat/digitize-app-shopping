import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "../pages/Home";
import Product from "../pages/Product";
import { Outlet, useLocation } from "react-router-dom";
import Products from "../features/products/Products";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
const queryClient = new QueryClient();

function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [location]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] bg-stone-100 dark:bg-slate-800">
        <Header />
        <div className="  px-2 py-4">
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
        <Nav useFor="mobile" />
      </div>
    </QueryClientProvider>
  );
}

export default AppLayout;
