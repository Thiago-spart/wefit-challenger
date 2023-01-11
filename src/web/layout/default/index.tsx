import type { ReactNode } from "react";
import React from "react";

import { Header } from "@components/Header";

import { useCart } from "src/hooks/useCart";

import * as S from "./styles";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
	const { cart } = useCart();

	return (
		<S.Container>
			<Header cartAmount={cart.items.length} />

			{children}
		</S.Container>
	);
};
