import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./story";

const { Primary } = composeStories(stories);

describe("Loading component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Primary />);

		expect(container).toMatchSnapshot();
	});
});
