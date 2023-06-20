import { styled } from "styled-components";

export const TagsContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	height: 5rem;
	width: 40rem;
	margin: 0 auto;
	border-radius: 5rem;
	display: flex;
	gap: 1rem;
	align-items: center;
`;
