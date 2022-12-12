import type { FCWithLayout } from "@interfaces/interfaces/layout";

import { SuccessScreen } from "@pages/SuccessScreen";

import { HeadTitle } from "@components/HeadTitle";

import { LayoutsEnum } from "@interfaces/enums/layouts";

const Page: FCWithLayout = () => {
	return (
		<>
			<HeadTitle title="Cart" />
			<SuccessScreen />
		</>
	);
};

Page.layout = LayoutsEnum.CART;

export default Page;
