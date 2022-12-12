import type { FC } from "react";

import type { LayoutsEnum } from "../enums/layouts";

export interface Layout {
	layout?: LayoutsEnum;
}

export type FCWithLayout = FC & Layout;

export type FCWithGenericLayout<A> = FC<A> & Layout;
