import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	min-height: 100vh;
	width: 100%;
`;

export const PaddingContainer = styled.section`
	width: 100%;
	padding: 0 1.6rem 1.6rem 1.6rem;

	@media screen and (min-width: 1024px) {
		padding: 2.4rem 24rem;
	}
`;

export const CartContainer = styled.div`
	width: 100%;
	min-height: calc(100vh - 62px);
	background-color: var(--white);
	border-radius: 0.4rem;
	padding: 1.6rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		min-height: auto;
		padding: 6.4rem;
	}
`;
