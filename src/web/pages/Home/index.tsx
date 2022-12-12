/* eslint-disable multiline-ternary */
import { useQuery } from "react-query";

import { fetchProducts } from "src/services/marketApi/Methods";

import { Loading } from "@components/Loading";
import { MovieCard } from "@components/MovieCard";

import { useCart } from "src/hooks/useCart";

import type { CartItemsAmount } from "./types";

import * as S from "./styles";

export const Home = () => {
	const { addToCart, cart } = useCart();

	const { isLoading, data, refetch } = useQuery({
		queryKey: "products",
		queryFn: fetchProducts,
	});

	const handleAddProduct = (productId: number) => {
		addToCart(productId);

		refetch();
	};

	const cartItemsAmount = cart.items.reduce((sumAmount, product) => {
		const newSumAmount = { ...sumAmount };
		newSumAmount[product.id] = product.quantity;

		return newSumAmount;
	}, {} as CartItemsAmount);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<S.Container>
					{data?.map(movie => (
						<MovieCard
							key={movie.id}
							productAmount={cartItemsAmount[movie.id] || 0}
							imgLink={movie.image}
							price={movie.price}
							title={movie.title}
							imgAlt={movie.title}
							handleAddProduct={() => handleAddProduct(movie.id)}
						/>
					))}
				</S.Container>
			)}
		</>
	);
};
