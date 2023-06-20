import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export const Tags = () => {
	const { activeTag, setActiveTag } = useContext(StateContext);

	const handleTagClick = (index) => {
		setActiveTag(index);
	};

	return (
		<TagsContainer>
			{["Work", "Short Break", "Long Break"].map((tag, i) => (
				<Tag
					onClick={() => handleTagClick(i)}
					activeTag={activeTag === i}
					key={i}
				>
					{tag}
				</Tag>
			))}
		</TagsContainer>
	);
};

// Stlyes

const Tag = styled.button`
	all: unset;
	text-align: center;
	height: 4rem;
	border-radius: 5rem;
	flex: 1;
	font-size: 2rem;
	cursor: pointer;

	${({ activeTag }) =>
		activeTag &&
		css`
			background: ${(props) => props.theme.colors.primary};
		`}
`;

const TagsContainer = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	height: 5rem;
	width: 40rem;
	margin: 0 auto;
	border-radius: 5rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	animation-duration: 10s;
`;
