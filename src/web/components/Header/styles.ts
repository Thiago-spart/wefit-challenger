import Link from "next/link";

import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	padding: 1.8rem 1rem;

	@media screen and (min-width: 1024px) {
		padding: 2.45rem 24rem;
	}
`;

export const Logo = styled(Link)`
	${FONTS.LG}
	font-weight: 700;
	transition: 0.2s;

	&:hover {
		filter: brightness(0.8);
	}
`;

export const CartDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.93rem;
	transition: 0.2s;

	span {
		${FONTS.XS}
		font-weight: 600;
		color: var(--text-color-soft);
	}

	h4 {
		${FONTS.SM}
		font-weight: 600;
		display: none;
	}

	& > div {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column;
	}

	&:hover {
		filter: brightness(0.8);
	}

	@media screen and (min-width: 768px) {
		& > div h4 {
			display: flex;
		}
	}
`;
