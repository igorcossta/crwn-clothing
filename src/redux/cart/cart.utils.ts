import { CartItem } from './cart.interface';

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, cartItemToAdd];
};
