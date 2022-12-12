import type { FCWithLayout } from "@interfaces/interfaces/layout";

import { CartPage } from "@pages/CartPage";

import { HeadTitle } from "@components/HeadTitle";

import { LayoutsEnum } from "@interfaces/enums/layouts";

const Page: FCWithLayout = () => {
	return (
		<>
			<HeadTitle title="Cart" />
			<CartPage />
		</>
	);
};

Page.layout = LayoutsEnum.CART;

export default Page;
