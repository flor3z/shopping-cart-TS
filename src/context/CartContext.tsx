import { ReactNode, createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextProps = {
  children: ReactNode;
};

type CartContextData = {
  openCart: () => void;
  closeCart: () => void;
  cartAmount: number;
  cartItems: CartItem[];
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

  const cartAmount = cartItems.reduce(
    (curQuantity, item) => item.quantity + curQuantity,
    0
  );

  const getItemAmount = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCart = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCart = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  return (
    <CartContext.Provider
      value={{
        getItemAmount,
        increaseCart,
        decreaseCart,
        removeItem,
        cartItems,
        cartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
