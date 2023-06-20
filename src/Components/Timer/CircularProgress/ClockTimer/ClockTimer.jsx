import styled from "styled-components";
import { useEffect, useState } from "react";

const ClockTimer = () => {
	const [time, setTime] = useState(10);

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive && time > 0) {
			const interval = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [isActive, time]);

	const toggleClock = () => {
		setIsActive(!isActive);
	};

	const getTime = (time) => {
		const min = Math.floor(time / 60);
		const sec = time % 60;

		return `${min < 10 ? "0" + min : min} :${sec < 10 ? "0" + sec : sec}`;
	};

	return (
		<ClockContainer>
			<TimerText>{getTime(time)}</TimerText>
			<StartStopButton onClick={toggleClock}>
				{isActive ? "Pause" : "Start"}
			</StartStopButton>
		</ClockContainer>
	);
};

export default ClockTimer;

const ClockContainer = styled.div`
	display: grid;
	place-items: center;
`;

const TimerText = styled.h3`
	font-size: 10rem;
`;

const StartStopButton = styled.button`
	all: unset;
	text-align: center;
	font-size: 3rem;
	text-transform: uppercase;
	letter-spacing: 1rem;
`;
