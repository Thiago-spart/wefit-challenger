import React from "react";

import type { CartProps } from "src/types/interfaces/cart";

interface ContextData {
	cart: CartProps;
	addToCart: (productId: number) => Promise<void>;
	removeFromCart: (productId: number) => void;
	increment: (productId: number) => void;
	decrement: (productId: number) => void;
	resetCart: () => void;
}

export const CartContext = React.createContext<ContextData>({} as ContextData);
