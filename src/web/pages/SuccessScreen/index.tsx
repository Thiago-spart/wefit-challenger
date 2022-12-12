import { useRouter } from "next/router";

import { Button } from "@components/Button";

import { useCart } from "src/hooks/useCart";

import * as S from "./styles";

export const SuccessScreen = () => {
	const router = useRouter();
	const { resetCart } = useCart();

	const redirectToHome = () => {
		resetCart();
		router.push("/");
	};

	return (
		<S.Container>
			<h2>Compra realizada com sucesso!</h2>

			<S.CustomNextImg
				src="/success.png"
				alt="payment successful"
				width={447}
				height={265}
				priority
			/>

			<Button type="button" fontSize="SM" onClick={redirectToHome}>
				Voltar
			</Button>
		</S.Container>
	);
};
