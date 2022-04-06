import React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

const cardPost = (props) => {
	const { post } = props;
	const featuredImage = {
		data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
		alt: post.featuredImage?.node?.alt || ``,
	};

	return (
		<>
			<a className='block mb-8' href={post.link}>
				<div className='flex items-center -mx-4 -mb-3'>
					<div className='px-4 mb-3'>
						<GatsbyImage
							className='w-16 h-16 object-cover'
							alt={featuredImage.alt}
							image={featuredImage.data}
						/>
					</div>
					<div className='px-4 mb-3'>
						<div className='mb-2 text-indigo-600'>
							<span>{post.date}</span>
						</div>
						<h3 className='text-xl font-heading'>{post.title}</h3>
					</div>
				</div>
			</a>
		</>
	);
};

export default cardPost;
