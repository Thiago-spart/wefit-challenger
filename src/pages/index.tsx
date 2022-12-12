import type { FCWithLayout } from "@interfaces/interfaces/layout";

import { Home } from "@pages/Home";

import { HeadTitle } from "@components/HeadTitle";

import { LayoutsEnum } from "@interfaces/enums/layouts";

const Page: FCWithLayout = () => {
	return (
		<>
			<HeadTitle title="Home" />
			<Home />
		</>
	);
};

Page.layout = LayoutsEnum.DEFAULT;

export default Page;
