import { Tags } from "./Components/Tags/Tags";
import styled from "styled-components";
import Timer from "./Components/Timer/Timer";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => {
		setIsOpen(false);
	};
	const onOpen = () => {
		setIsOpen(true);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} />
			<Title>Pomodoro Timer</Title>
			<Tags />
			<Timer />
			<CogIcon onClick={onOpen}>
				<FaCog />
			</CogIcon>
		</>
	);
}

export default App;

const Title = styled.h1`
	font-size: 6rem;
	padding: 2rem 0;
	text-align: center;
`;

const CogIcon = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	font-size: 4rem;
`;
