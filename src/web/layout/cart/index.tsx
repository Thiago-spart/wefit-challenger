import type { ReactNode } from "react";
import React from "react";

import { Header } from "@components/Header";

import { useCart } from "src/hooks/useCart";

import * as S from "./styles";

interface Props {
	children: ReactNode;
}

export const CartLayout: React.FC<Props> = ({ children }) => {
	const { cart } = useCart();

	return (
		<S.Container>
			<Header cartAmount={cart.items.length} />

			<S.PaddingContainer>
				<S.CartContainer>{children}</S.CartContainer>
			</S.PaddingContainer>
		</S.Container>
	);
};
