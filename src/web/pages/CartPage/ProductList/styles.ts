import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const Container = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	gap: 1.6rem;
`;

export const ProductListItem = styled.li`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.6rem;

	& > img {
		width: 6.4rem;
		height: 8.2rem;
	}

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	button {
		cursor: pointer;
	}
`;

export const TitleDiv = styled.div`
	font-weight: 700;
	color: var(--background-color);

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.6rem;
	width: 100%;

	h4 {
		${FONTS.SM}
	}

	span {
		${FONTS.MD}
	}
`;

export const SubtotalDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	div:first-child {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		input {
			border: 1px solid #ddd;
			border-radius: 0.4rem;
			color: var(--background-color);
			padding: 0.35rem 1.2rem;
			width: 5rem;
		}
	}

	div:last-child {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column;

		h4 {
			${FONTS.XS}
			font-weight: 700;
			color: var(--text-color-soft);
		}

		span {
			${FONTS.MD}
			font-weight: 700;
			color: var(--background-color);
		}
	}
`;
