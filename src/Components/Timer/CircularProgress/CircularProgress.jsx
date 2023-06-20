import { useState } from "react";
import { styled } from "styled-components";

const CircularProgress = () => {
	const [progress, setProgress] = useState(55);

	return (
		<OuterCircle progress={progress}>
			<InnerCircle></InnerCircle>
		</OuterCircle>
	);
};

export default CircularProgress;

export const OuterCircle = styled.div`
	width: 35rem;
	height: 35rem;
	background: #b34444;
	border-radius: 50%;
	display: grid;
	place-items: center;
	background: conic-gradient(
		red ${({ progress }) => progress}%,
		transparent ${({ progress }) => progress}%
	);
`;

export const InnerCircle = styled.div`
	width: 32rem;
	height: 32rem;
	background: #fff;
	border-radius: 50%;
	display: grid;
	place-items: center;
`;
