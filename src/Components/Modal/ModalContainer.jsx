import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../StateProvider";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ModalContainer = ({ onClose }) => {
	const {
		workTime,
		setWorkTime,
		shortBreakTime,
		setShortBreakTime,
		longBreakTime,
		setLongBreakTime,
	} = useContext(StateContext);

	return (
		<Container>
			<ModalContent
				initial={{ y: "-100vh", scale: 0.9 }}
				animate={{ y: 0, scale: 1 }}
				exit={{ y: "-100vh", scale: 0 }}
			>
				<ModalHeader>
					<ModalTitle>Settings</ModalTitle>
					<ModalCloseButton onClick={onClose}>
						<FaWindowClose fontSize='3rem' />
					</ModalCloseButton>
				</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={{
							work: workTime / 60,
							short: shortBreakTime / 60,
							long: longBreakTime / 60,
						}}
						onSubmit={(values) => {
							setWorkTime(values.work * 60);
							setShortBreakTime(values.short * 60);
							setLongBreakTime(values.long * 60);
							onClose();
						}}
					>
						<Form>
							<InputWrapper>
								<FormControl>
									<label htmlFor='work'>Work break</label>
									<Field name='work' min='1' max='60' />
								</FormControl>
								<FormControl>
									<label htmlFor='short'>Short break</label>
									<Field name='short' min='1' max='3' />
								</FormControl>
								<FormControl>
									<label htmlFor='long'>Long break</label>
									<Field name='long' min='1' max='120' />
								</FormControl>
							</InputWrapper>
							<ButtonWrapper>
								<ApplyButton type='submit'> Apply </ApplyButton>
							</ButtonWrapper>
						</Form>
					</Formik>
				</ModalBody>
			</ModalContent>
		</Container>
	);
};

export default ModalContainer;

const Container = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	z-index: 150;
`;
const ModalContent = styled(motion.div)`
	width: 60rem;
	height: 40rem;
	background-color: white;

	@media (max-width: 600px) {
		width: 90%;
		padding: 1rem;
	}
`;
const ModalHeader = styled.div`
	color: black;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
`;
const ModalTitle = styled.h3`
	font-size: 3rem;
`;
const ModalCloseButton = styled.button`
	cursor: pointer;
`;
const ModalBody = styled.div``;

const InputWrapper = styled.div`
	display: flex;
	padding: 1rem;
	gap: 2rem;
`;
const FormControl = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	color: black;
	gap: 0.7rem;
	label {
		font-size: 2rem;
	}
	input {
		width: 100%;
		font-size: 2rem;
		padding: 1rem;
		border-radius: 1rem;
		border: 1px solid black;
		background-color: #ead8fc;
	}
`;

const ApplyButton = styled.button`
	font-size: 3rem;
	all: unset;
	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.colors.primary};
	padding: 2rem 6rem;
	cursor: pointer;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 2rem;
`;
