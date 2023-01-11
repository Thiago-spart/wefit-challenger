import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./story";

const { Default } = composeStories(stories);

describe("Header component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Default cartAmount={1} />);

		expect(container).toMatchSnapshot();
	});

	it("link on logo should redirect to home page", () => {
		render(<Default cartAmount={5} />);

		const linkElement = screen.getByRole("link", { name: "WeMovies" });

		expect(linkElement).toHaveAttribute("href", "/");
	});

	it("link on cart should redirect to Cart page", () => {
		render(<Default cartAmount={5} />);

		const linkElement = document.querySelector("[href='/cart']");

		expect(linkElement).toHaveAttribute("href", "/cart");
	});

	it("should have the correct amount of items", () => {
		const { container, getByText } = render(<Default cartAmount={5} />);

		expect(getByText("5 itens", container)).toBeTruthy();
	});
});
