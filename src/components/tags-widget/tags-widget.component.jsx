import React from 'react';

import {
	TagsWidgetContainer,
	TagsList,
	TagContainer,
	Tag
} from './tags-widget.styles';

const TagsWidget = ({ tags = [] }) => (
	<TagsWidgetContainer>
		<TagsList>
			{tags.map((tag, key) => (
				<TagContainer key={key}>
					<Tag to={`/blogs/${tag}`}>{tag}</Tag>
				</TagContainer>
			))}
		</TagsList>
	</TagsWidgetContainer>
);

export default TagsWidget;
