import { css } from "styled-components";

export const COLORS_THEME_VARS = css`
	${({ theme }) => css`
		--background-color: ${theme.COLORS.GRAY_700};
		--text-color: ${theme.COLORS.WHITE};
		--text-color-soft: ${theme.COLORS.GRAY_300};
		--text-color-strong: ${theme.COLORS.GRAY_500};

		--green: ${theme.COLORS.GREEN};
		--cyan: ${theme.COLORS.CYAN};
		--white: ${theme.COLORS.WHITE};
	`}
`;
