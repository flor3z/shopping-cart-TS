import { ReactNode, createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextProps = {
  children: ReactNode;
};

type CartContextData = {
  getItemAmount: (id: number) => number;
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext({} as CartContextData);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemAmount = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  return (
    <CartContext.Provider value={{ getItemAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
