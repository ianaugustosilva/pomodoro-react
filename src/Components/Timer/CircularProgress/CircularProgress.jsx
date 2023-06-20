import { useState } from "react";
import { styled } from "styled-components";
import ClockTimer from "./ClockTimer/ClockTimer";

const CircularProgress = () => {
	const [progress, setProgress] = useState(55);

	return (
		<OuterCircle progress={progress}>
			<InnerCircle>
				<ClockTimer />
			</InnerCircle>
		</OuterCircle>
	);
};

export default CircularProgress;

export const OuterCircle = styled.div`
	width: 35rem;
	height: 35rem;

	border-radius: 50%;
	display: grid;
	place-items: center;
	background: conic-gradient(
		${(props) => props.theme.colors.primary} ${({ progress }) => progress}%,
		transparent ${({ progress }) => progress}%
	);
`;

export const InnerCircle = styled.div`
	width: 33rem;
	height: 33rem;
	background: ${(props) => props.theme.colors.secondary};
	border-radius: 50%;
	display: grid;
	place-items: center;
`;
