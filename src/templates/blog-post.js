import React from 'react';
import Share from '../components/Share';

const BlogPost = ({ data }) => {
	// destructure and get our variables
	const {
		post: {
			html,
			frontmatter: { title, tags },
			fields: { slug },
		},
		site: {
			siteMetadata: { url },
		},
	} = data;
	return (
		<div className="blog-post">
			<h1 className="title is-1">{title}</h1>
			<div className="content" dangerouslySetInnerHTML={{ __html: html }} />
			<Share
				socialConfig={{
					config: {
						url: `${url}${slug}`,
						title,
					},
				}}
				tags={tags}
			/>
		</div>
	);
};