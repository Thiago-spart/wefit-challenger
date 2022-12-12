import styled from "styled-components";

import { FONTS } from "src/styles/fonts";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding: 1rem 1.1rem;
	background-color: var(--white);
	border-radius: 0.4rem;

	h2 {
		${FONTS.XS}
		font-weight: 700;
		color: var(--background-color);
		margin-top: 0.7rem;
		margin-bottom: 0.2rem;
		text-align: center;
	}

	span {
		${FONTS.MD}
		color: var(--background-color);
		text-align: center;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}
`;

export const IconDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.34rem;
`;
