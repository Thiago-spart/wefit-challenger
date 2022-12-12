import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";

import { queryClient } from "src/services/queryClient";
import { LayoutWrapper } from "src/web/layout/wrapper";

import { CartContextProvider } from "src/hooks/useCart";

import { GlobalStyle } from "./styles";
import theme from "src/styles/theme";

export const App = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CartContextProvider>
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
			</CartContextProvider>
			<GlobalStyle theme={theme} />
		</QueryClientProvider>
	);
};
