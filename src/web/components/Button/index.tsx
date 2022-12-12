import type { ButtonProps } from "./types";

import * as S from "./styles";

export const Button = ({
	schema = "primary",
	isFullWidth,
	children,
	type,
	icon,
	fontSize = "XS",
	...rest
}: ButtonProps) => {
	return (
		<S.ButtonStyle
			fontSize={fontSize}
			type={type}
			schema={schema}
			isFullWidth={isFullWidth}
			{...rest}
		>
			{icon}
			{children}
		</S.ButtonStyle>
	);
};
