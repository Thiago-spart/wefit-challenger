import Link from "next/link";

import { Button } from "@components/Button";

import * as S from "./styles";

export const EmptyCartContent = () => {
	return (
		<S.Container>
			<h2>Parece que não há nada por aqui :(</h2>

			<S.CustomNextImg
				src="/empty-cart.png"
				alt="empty cart"
				width={447}
				height={265}
				priority
			/>

			<Link href="/">
				<Button type="button" fontSize="SM">
					Voltar
				</Button>
			</Link>
		</S.Container>
	);
};
