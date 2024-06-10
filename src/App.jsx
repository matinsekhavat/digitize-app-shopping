import AppLayout from "./ui/AppLayout";
import FilterProvider from "./Context/FilterProvider";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Product from "./pages/Product";
import Products from "./features/products/Products";
import Checkout from "./pages/Checkout";
import BasketProvider from "./Context/BasketProvider";
import NotFind from "./pages/NotFind";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => alert("فیچر های پروژه در دست توسعه میباشد."), []);
  return (
    <BrowserRouter>
      <FilterProvider>
        <BasketProvider>
          <Toaster />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:category/:id" element={<Product />} />
              <Route path="/checkout" index element={<Checkout />} />
              <Route path="*" element={<NotFind />} />
            </Route>
          </Routes>
        </BasketProvider>
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
