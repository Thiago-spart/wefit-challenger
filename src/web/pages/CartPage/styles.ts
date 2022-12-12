import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const CartFooter = styled.footer`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column-reverse;
	gap: 1.6rem;

	& > a {
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		margin-top: 3rem;
		flex-direction: row;

		& > a {
			width: auto;
		}
	}
`;

export const Total = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;

	span {
		${FONTS.SM}
		color: var(--text-color-soft);
		font-weight: 700;
	}

	strong {
		${FONTS.XL}
		color: var(--background-color);
	}

	@media screen and (min-width: 768px) {
		width: auto;
	}
`;
