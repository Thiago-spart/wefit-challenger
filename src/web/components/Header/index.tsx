import Image from "next/image";
import Link from "next/link";

import type { HeaderProps } from "./types";

import * as S from "./styles";

export const Header = ({ cartAmount }: HeaderProps) => {
	return (
		<S.Container>
			<S.Logo href="/" aria-details="Logo">
				WeMovies
			</S.Logo>

			<Link href="/cart">
				<S.CartDiv>
					<div>
						<h4>Meu Carrinho</h4>
						<span aria-label="Items on your cart">
							{cartAmount === 1 ? `${cartAmount} item` : `${cartAmount} itens`}
						</span>
					</div>

					<Image alt="market cart" src="/cart.svg" width={32} height={32} />
				</S.CartDiv>
			</Link>
		</S.Container>
	);
};
