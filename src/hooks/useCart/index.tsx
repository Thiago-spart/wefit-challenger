import React from "react";
import { useQuery } from "react-query";

import { CartContext } from "src/context/CartContext";
import { fetchProduct, fetchProducts } from "src/services/marketApi/Methods";

import type { CartProps } from "src/types/interfaces/cart";

interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartState, setCartState] = React.useState<CartProps>({ items: [] });

	const { refetch } = useQuery({
		queryKey: "products",
		queryFn: fetchProducts,
	});

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
			const product = await fetchProduct(productId);

			const newProduct = {
				...product,
				quantity: amount,
			};

			updatedCart.items.push(newProduct);
		}

		setCartState(updatedCart);
		refetch();
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

		refetch();
	};

	const increment = (productId: number) => {
		const updatedCart = cartState;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		updatedCart.items[productIndex].quantity++;

		setCartState(updatedCart);
		refetch();
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

		refetch();
	};

	const resetCart = () => {
		const updatedCart = cartState;

		updatedCart.items = [];

		setCartState(updatedCart);
		refetch();
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
