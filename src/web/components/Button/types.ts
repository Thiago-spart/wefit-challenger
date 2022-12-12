import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { WithChildren } from "@interfaces/interfaces/withChildren";

export type ButtonSchemaProps = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	WithChildren & {
		schema?: ButtonSchemaProps;
		isFullWidth?: boolean;
		icon?: ReactNode;
		fontSize?: "SM" | "XS";
	};

export interface ButtonStyleProps {
	schema: ButtonSchemaProps;
	isFullWidth?: boolean;
	fontSize: "SM" | "XS";
}
