import Image from "next/image";
import Link from "next/link";

import { useCart } from "src/hooks/useCart";

import * as S from "./styles";

export const Header = () => {
	const { cart } = useCart();
	const cartSize = cart.items.length;

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
							{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
						</span>
					</div>

					<Image alt="market cart" src="/cart.svg" width={32} height={32} />
				</S.CartDiv>
			</Link>
		</S.Container>
	);
};
