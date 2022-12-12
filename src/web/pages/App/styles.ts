import { createGlobalStyle } from "styled-components";

import { COLORS_THEME_VARS } from "src/styles/colors";
import { FONTS, FONT_FAMILY } from "src/styles/fonts";

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
    margin: 0;
    padding: 0;
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    ${FONT_FAMILY}
		${FONTS.MD}
		-webkit-font-smoothing: antialiased;
		background: var(--background-color);
    color: var(--text-color);
  }

	a {
		color: var(--text-color);
		text-decoration: none;
	}

	button, input, textarea {
		${FONTS.MD}
		background: transparent;
    color: var(--text-color);
		border: transparent;
	}

	ul {
		list-style: none;
	}

	:root {
		${COLORS_THEME_VARS}
	}

	#root, #__next {
		isolation: isolate;
	}

	@media (max-width: 768px) {
    html {
      font-size: 60%;
    }
  }

	@media (max-width: 425px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 375px) {
    html {
      font-size: 55%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 52.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 50%;
    }
  }
`;
