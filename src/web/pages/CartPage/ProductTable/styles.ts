import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const Container = styled.table`
	width: 100%;

	button {
		cursor: pointer;
	}

	thead th {
		${FONTS.SM}

		color: var(--text-color-soft);
		text-align: left;
		padding: 1.2rem;
	}

	tbody td {
		padding: 1.2rem;
		border-bottom: 1px solid #eee;
	}

	strong {
		${FONTS.SM}
		color: var(--background-color);
		display: block;
	}

	span {
		${FONTS.MD}
		color: var(--background-color);
		display: block;
		margin-top: 0.5rem;
		font-weight: 700;
	}

	div {
		display: flex;
		align-items: center;
		gap: 1.1rem;

		input {
			border: 1px solid #ddd;
			border-radius: 0.4rem;
			color: #666;
			padding: 0.6rem;
			width: 5rem;
		}
	}
`;
