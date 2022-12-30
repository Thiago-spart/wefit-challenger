/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Loading } from "./";

const meta: Meta<typeof Loading> = {
	title: "Components/Loading",
	component: Loading,
};

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Primary = Template.bind({});
Primary.args = {};

export default meta;
