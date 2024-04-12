import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || []);
    return basket;
  });
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  function increaseProductQuantity(id) {
    const newBasket = basket.map((product) =>
      product.id == id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setBasket(newBasket);
  }
  const decreaseProductQuantity = (id) => {
    const newBasket = basket
      .map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 0 ? product.quantity - 1 : 0,
            }
          : product
      )
      .filter((product) => product.quantity > 0);

    setBasket(newBasket);
  };

  function removeProduct(id) {
    const newBasket = basket.filter((product) => product.id != id);
    setBasket(newBasket);
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) throw new Error("useBasket is outof zone");
  return context;
}

export { useBasket };
export default BasketProvider;
