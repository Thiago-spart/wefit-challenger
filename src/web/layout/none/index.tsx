import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const NoneLayout: React.FC<Props> = ({ children }) => <>{children}</>;
