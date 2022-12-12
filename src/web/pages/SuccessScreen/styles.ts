import Image from "next/image";

import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 3.2rem;

	h2 {
		${FONTS.LG}
		color: var(--background-color);
		font-weight: 700;
		text-align: center;
	}
`;

export const CustomNextImg = styled(Image)`
	object-fit: contain;
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 44.7rem;
	}
`;
