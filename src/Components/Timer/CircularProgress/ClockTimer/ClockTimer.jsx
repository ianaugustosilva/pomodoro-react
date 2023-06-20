import styled from "styled-components";
import { useEffect, useContext } from "react";
import { StateContext } from "../../../StateProvider";

const ClockTimer = () => {
	const { time, setTime, isActive, setIsActive, initTime } =
		useContext(StateContext);

	useEffect(() => {
		if (isActive && time > 0) {
			const interval = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [isActive, setTime, time]);

	const toggleClock = () => {
		setIsActive(!isActive);
	};

	const resetTimer = () => {
		setTime(initTime);
		setIsActive(false);
	};

	console.log(typeof time);
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
			{time === 0 && <ResetButton onClick={resetTimer}>RESET</ResetButton>}
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
	cursor: pointer;
`;

const ResetButton = styled(StartStopButton)`
	color: red;
`;
