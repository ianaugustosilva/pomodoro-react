import { styled } from "styled-components";

export const TagButton = styled.button`
	all: unset;
	text-align: center;
	height: 4rem;
	border-radius: 5rem;
	flex: 1;
	font-size: 2rem;
	background-color: ${(props) => props.theme.colors.primary};
`;
