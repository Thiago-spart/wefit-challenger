import type { ReactNode } from "react";
import React from "react";

import { Header } from "@components/Header";

import * as S from "./styles";

interface Props {
	children: ReactNode;
}

export const CartLayout: React.FC<Props> = ({ children }) => {
	return (
		<S.Container>
			<Header />

			<S.PaddingContainer>
				<S.CartContainer>{children}</S.CartContainer>
			</S.PaddingContainer>
		</S.Container>
	);
};
