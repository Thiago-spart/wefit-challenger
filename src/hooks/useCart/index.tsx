import React from "react";

import { CartContext } from "src/context/CartContext";
import { marketApi } from "src/services/marketApi";

import type { CartProps } from "src/types/interfaces/cart";

interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartState, setCartState] = React.useState<CartProps>({ items: [] });

	const addToCart = async (productId: number) => {
		const updatedCart = cartState;
		const productExists = cartState.items.find(
			product => product.id === productId,
		);

		const currentAmount = productExists ? productExists.quantity : 0;

		const amount = currentAmount + 1;

		if (productExists) {
			productExists.quantity = amount;
		} else {
			const product = await marketApi.get(`/products/${productId}`);

			const newProduct = {
				...product.data,
				quantity: amount,
			};

			updatedCart.items.push(newProduct);
		}

		setCartState(updatedCart);
	};

	const removeFromCart = (productId: number) => {
		const updatedCart = cartState;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		if (productIndex >= 0) {
			updatedCart.items.splice(productIndex, 1);
			setCartState(updatedCart);
		}
	};

	const increment = (productId: number) => {
		const updatedCart = cartState;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		updatedCart.items[productIndex].quantity++;

		setCartState(updatedCart);
	};

	const decrement = (productId: number) => {
		const updatedCart = cartState;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		const selectedProduct = updatedCart.items[productIndex];

		if (selectedProduct.quantity === 1) {
			removeFromCart(productId);
		} else {
			updatedCart.items[productIndex].quantity--;

			setCartState(updatedCart);
		}
	};

	const resetCart = () => {
		const updatedCart = cartState;

		updatedCart.items = [];

		setCartState(updatedCart);
	};

	return (
		<CartContext.Provider
			value={{
				cart: cartState,
				addToCart,
				removeFromCart,
				decrement,
				increment,
				resetCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = React.useContext(CartContext);

	return context;
};
