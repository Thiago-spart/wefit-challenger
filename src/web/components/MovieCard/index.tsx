import Image from "next/image";

import { Button } from "@components/Button";

import { convertNumberToRealCurrency } from "@utils/convertNumberToRealCurrency";

import type { MovieCardProps } from "./types";

import * as S from "./styles";

export const MovieCard = ({
	imgAlt,
	imgLink,
	price,
	title,
	productAmount,
	handleAddProduct,
}: MovieCardProps) => {
	return (
		<S.Container>
			<Image alt={imgAlt} src={imgLink} width={147} height={188} priority />

			<h2>{title}</h2>
			<span>{convertNumberToRealCurrency(price)}</span>

			<Button
				onClick={handleAddProduct}
				type="button"
				schema={productAmount >= 1 ? "secondary" : "primary"}
				isFullWidth
				icon={
					<S.IconDiv>
						<Image
							src="/shopping-cart.svg"
							alt="add item to cart"
							width={14}
							height={14}
						/>
						{productAmount}
					</S.IconDiv>
				}
			>
				ADICIONAR AO CARRINHO
			</Button>
		</S.Container>
	);
};
