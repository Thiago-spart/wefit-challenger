import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 70vh;
`;

export const Loading = styled.span`
	width: 83px;
	height: 83px;
	border-radius: 50%;
	display: inline-block;
	position: relative;

	background: conic-gradient(
		from 90deg at 50% 50%,
		rgba(128, 128, 128, 0.0001) -46.17deg,
		#e6e6e6 313.55deg,
		rgba(128, 128, 128, 0.0001) 313.83deg,
		#e6e6e6 673.55deg
	);

	animation: rotating 1s linear infinite;

	&:after {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 79px;
		height: 79px;
		border-radius: 50%;
		background: var(--background-color);
	}

	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
