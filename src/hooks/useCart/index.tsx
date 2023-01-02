/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable nonblock-statement-body-position */
import React from "react";
import { useQuery } from "react-query";

import { CartContext } from "src/context/CartContext";
import { fetchProduct, fetchProducts } from "src/services/marketApi/Methods";

import type { CartProps } from "src/types/interfaces/cart";

import { useLocalStorage } from "../useLocalStorage";

interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [localStorageCart, setLocalStorageCart] = useLocalStorage<string>(
		"@wemovies:cart",
		"",
	);

	const [cart, setCart] = React.useState<CartProps>({ items: [] });

	const { refetch } = useQuery({
		queryKey: "products",
		queryFn: fetchProducts,
	});

	const addToCart = async (productId: number) => {
		const updatedCart = cart;
		const productExists = cart.items.find(product => product.id === productId);

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

		setCart(updatedCart);
		refetch();
	};

	const removeFromCart = (productId: number) => {
		const updatedCart = cart;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		if (productIndex >= 0) {
			updatedCart.items.splice(productIndex, 1);
			setCart(updatedCart);
		}

		refetch();
	};

	const increment = (productId: number) => {
		const updatedCart = cart;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		updatedCart.items[productIndex].quantity++;

		setCart(updatedCart);
		refetch();
	};

	const decrement = (productId: number) => {
		const updatedCart = cart;
		const productIndex = updatedCart.items.findIndex(
			product => product.id === productId,
		);

		const selectedProduct = updatedCart.items[productIndex];

		if (selectedProduct.quantity === 1) {
			removeFromCart(productId);
		} else {
			updatedCart.items[productIndex].quantity--;

			setCart(updatedCart);
		}

		refetch();
	};

	const resetCart = () => {
		const updatedCart = cart;

		updatedCart.items = [];

		setCart(updatedCart);
		refetch();
	};

	React.useEffect(() => {
		if (localStorageCart && localStorageCart !== "") {
			setCart(JSON.parse(localStorageCart));
		}
	}, []);

	React.useEffect(() => {
		setLocalStorageCart(JSON.stringify(cart));
	}, [cart, localStorageCart, setLocalStorageCart]);

	return (
		<CartContext.Provider
			value={{
				cart,
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
