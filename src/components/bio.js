import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
	const { author } = useStaticQuery(graphql`
		query BioQuery {
			author: wpUser {
				firstName
				twitter: name
				description
				avatar {
					url
				}
			}
		}
	`);

	const avatarUrl = author?.avatar?.url;

	return (
		<div className='bio'>
			{avatarUrl && (
				<img
					alt={author?.firstName || ``}
					className='mr-3 rounded-full w-16 mt-2'
					src={avatarUrl}
				/>
			)}
			{author?.firstName && (
				<p>
					Written by <strong>{author.firstName}</strong>
					{` `}
					{author?.description || null}
					{` `}
					{author?.twitter && (
						<a href={`https://twitter.com/${author?.twitter || ``}`}>
							You should follow them on Twitter
						</a>
					)}
				</p>
			)}
		</div>
	);
};

export default Bio;
