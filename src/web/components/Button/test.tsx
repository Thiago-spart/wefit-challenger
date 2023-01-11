import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

import * as stories from "./story";

const { Primary, Secondary } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Primary />);

		expect(container).toMatchSnapshot();
	});

	it("should be clicked", () => {
		const onClickMock = jest.fn();
		render(<Primary onClick={onClickMock} />);

		const buttonElement = screen.getByText("Click me");

		fireEvent.click(buttonElement);

		expect(onClickMock).toBeCalled();
	});

	it("shouldn't be clickable when disabled", () => {
		const onClickMock = jest.fn();
		render(<Primary disabled onClick={onClickMock} />);

		const buttonElement = screen.getByText("Click me");

		fireEvent.click(buttonElement);

		expect(onClickMock).not.toHaveBeenCalled();
	});

	it("should render the secondary variation", () => {
		const { container } = render(<Secondary />);

		expect(container).toMatchSnapshot();
	});
});
