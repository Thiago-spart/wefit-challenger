import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
	gap: 1.6rem;

	padding: 0 1.6rem 1.6rem 1.6rem;

	@media screen and (min-width: 1024px) {
		padding: 2.4rem 24rem;
	}
`;
