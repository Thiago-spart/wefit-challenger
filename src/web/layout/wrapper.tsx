import type { NextPage } from "next";

import type { ReactNode } from "react";

import { LayoutsEnum } from "src/types/enums/layouts";

import type { Layout } from "src/types/interfaces/layout";

import { CartLayout } from "./cart";
import { DefaultLayout } from "./default";
import { NoneLayout } from "./none";

interface Props {
	children: ReactNode & { type: Layout };
}

interface PropsWithChildren {
	children: ReactNode;
}

const getLayout = (layout?: LayoutsEnum): React.FC<PropsWithChildren> => {
	switch (layout) {
		case LayoutsEnum.NONE:
			return NoneLayout;
		case LayoutsEnum.CART:
			return CartLayout;
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: NextPage<Props> = ({ children }) => {
	const LayoutComponent = getLayout(children.type.layout);

	return <LayoutComponent>{children}</LayoutComponent>;
};
