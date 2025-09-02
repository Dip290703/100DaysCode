import { createContext, useContext } from "react";
import { products } from "../assets/frontend_assets/assets";

// Corrected context name
 export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};



export const useShop = () => {
    return useContext(ShopContext);
}

export default ShopProvider;


