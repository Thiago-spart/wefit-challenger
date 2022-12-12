/* eslint-disable no-nested-ternary */
/* eslint-disable multiline-ternary */
import Link from "next/link";

import { useQuery } from "react-query";

import { fetchProducts } from "src/services/marketApi/Methods";

import { Button } from "@components/Button";

import { useCart } from "src/hooks/useCart";
import { useWindowSize } from "src/hooks/useWidthScreen";

import { convertNumberToRealCurrency } from "@utils/convertNumberToRealCurrency";

import * as S from "./styles";

import { EmptyCartContent } from "./EmptyCartContent";
import { ProductList } from "./ProductList";
import { ProductTable } from "./ProductTable";

export const CartPage = () => {
	const { cart, removeFromCart, increment, decrement } = useCart();

	const { screenWidth } = useWindowSize();
	const isMobileViewPort = Number(screenWidth) < 768;

	const cartFormatted = cart.items.map(product => ({
		...product,
		priceFormatted: convertNumberToRealCurrency(product.price),
		subTotal: convertNumberToRealCurrency(product.price * product.quantity),
	}));

	const total = convertNumberToRealCurrency(
		cart.items.reduce((sumTotal, product) => {
			return sumTotal + product.price + product.quantity;
		}, 0),
	);

	const handleProductIncrement = (productId: number) => {
		increment(productId);
	};

	const handleProductDecrement = (productId: number) => {
		decrement(productId);
	};

	const handleRemoveProduct = (productId: number) => {
		removeFromCart(productId);
	};

	return (
		<>
			{cart.items.length < 1 ? (
				<EmptyCartContent />
			) : isMobileViewPort ? (
				<>
					<ProductList
						products={cartFormatted}
						handleProductDecrement={handleProductDecrement}
						handleProductIncrement={handleProductIncrement}
						handleRemoveProduct={handleRemoveProduct}
					/>
					<S.CartFooter>
						<Link href="/success">
							<Button
								type="button"
								fontSize="SM"
								isFullWidth={isMobileViewPort}
							>
								Finalizar pedido
							</Button>
						</Link>

						<S.Total>
							<span>TOTAL</span>
							<strong>{total}</strong>
						</S.Total>
					</S.CartFooter>
				</>
			) : (
				<>
					<ProductTable
						products={cartFormatted}
						handleProductDecrement={handleProductDecrement}
						handleProductIncrement={handleProductIncrement}
						handleRemoveProduct={handleRemoveProduct}
					/>

					<S.CartFooter>
						<Link href="/success">
							<Button type="button">Finalizar pedido</Button>
						</Link>

						<S.Total>
							<span>TOTAL</span>
							<strong>{total}</strong>
						</S.Total>
					</S.CartFooter>
				</>
			)}
		</>
	);
};
