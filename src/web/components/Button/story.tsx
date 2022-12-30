/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
};

const Template: ComponentStory<typeof Button> = props => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	type: "button",
	children: "Click me",
	isFullWidth: false,
	schema: "primary",
	fontSize: "XS",
};

export const Secondary = Template.bind({});
Secondary.args = {
	type: "button",
	children: "Click me",
	isFullWidth: false,
	schema: "secondary",
	fontSize: "XS",
};

export default meta;
