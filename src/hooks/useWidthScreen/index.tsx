import React from "react";

import type { WindowSizeProps } from "./types";

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
		screenWidth: undefined,
		screenHeight: undefined,
	});
	React.useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};
