/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Header } from "./";

const meta: Meta<typeof Header> = {
	title: "Layout/Header",
	component: Header,
};

const Template: ComponentStory<typeof Header> = props => <Header {...props} />;

export const Default = Template.bind({});
Default.args = {
	cartAmount: 1,
};

export default meta;
