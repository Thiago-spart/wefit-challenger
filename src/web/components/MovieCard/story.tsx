/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { MovieCard } from "./";

const meta: Meta<typeof MovieCard> = {
	title: "Components/MovieCard",
	component: MovieCard,
};

const Template: ComponentStory<typeof MovieCard> = props => (
	<MovieCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
	handleAddProduct: () => {},
	imgAlt: "Some alt description",
	title: "Pele Forever",
	price: 9000,
	productAmount: 2,
	imgLink: "https://www.imagemhost.com.br/images/2022/07/10/the-batman.png",
};

export default meta;
