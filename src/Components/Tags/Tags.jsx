import { useState } from "react";
import { css, styled } from "styled-components";
import { TagsContainer } from "./TagsContainer.styled";

export const Tags = () => {
	const [activeTag, setActiveTag] = useState(0);

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

const Tag = styled.button`
	all: unset;
	text-align: center;
	height: 4rem;
	border-radius: 5rem;
	flex: 1;
	font-size: 2rem;

	${({ activeTag }) =>
		activeTag &&
		css`
			background: ${(props) => props.theme.colors.primary};
		`}
`;
