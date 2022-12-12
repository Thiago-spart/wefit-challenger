import styled from "styled-components";

import type { ButtonStyleProps } from "./types";

import { FONTS } from "src/styles/fonts";

const themeVariations: Record<ButtonStyleProps["schema"], string> = {
	primary: `
		background-color: var(--cyan);
	`,
	secondary: `
		background-color: var(--green);
	`,
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
	${({ fontSize }) => (fontSize === "XS" ? FONTS.XS : FONTS.SM)}
	${({ schema }) =>
		schema ? themeVariations[schema] : themeVariations.primary}

	color: var(--white);
	padding: 1.1rem ${({ isFullWidth }) => (isFullWidth ? "0" : "6rem")};
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;
	width: ${({ isFullWidth }) => isFullWidth && "100%"};
	border-radius: 0.4rem;
	text-align: center;

	cursor: pointer;
	transition: 0.2s;

	&:hover:not(:disabled) {
		filter: brightness(0.8);
	}

	&:disabled {
		cursor: default;
		filter: grayscale(100%);
	}
`;
