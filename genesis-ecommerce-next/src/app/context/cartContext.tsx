"use client";
import React, { createContext, useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string | null | undefined;
  quantity: number;
}

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  decreaseQuantity: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: (item: Omit<CartItem, "quantity">) => {},
  decreaseQuantity: (itemId: number) => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("@GenesisShop:cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@GenesisShop:cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    console.log(item);

    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === itemId) {
              const newQuantity = item.quantity - 1;
              if (newQuantity > 0) {
                return { ...item, quantity: newQuantity };
              } else {
                return null;
              }
            }
            return item;
          })
          .filter((item) => item !== null) as CartItem[]
    );
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
