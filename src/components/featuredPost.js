import React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import Bio from '../components/bio';

const featuredPost = (props) => {
	const featuredPost = props.featuredPost;
	const featuredImage = {
		data: featuredPost.featuredImage?.node?.localFile?.childImageSharp
			?.gatsbyImageData,
		alt: featuredPost.featuredImage?.node?.alt || ``,
	};

	return (
		<>
			<a href={featuredPost?.link} className='block max-w-lg mx-auto'>
				<div className='relative mb-12' style={{ height: '264px' }}>
					<div
						className='absolute left-0 bottom-0 -ml-6 -mb-6 w-full bg-indigo-600'
						style={{ height: '264px' }}
					></div>
					<GatsbyImage
						className='relative w-full h-full object-cover'
						image={featuredImage.data}
						alt={featuredImage.alt}
					></GatsbyImage>
				</div>
				<div className='mb-4 text-indigo-600'>
					<span>6 min read</span>
					<span className='mx-2'>–</span>
					<span>10 July 2022</span>
				</div>
				<h2 className='text-4xl leading-8 mb-6 font-heading'>
					{featuredPost?.title}
				</h2>
				<>{parse(featuredPost?.excerpt)}</>
				<div className='flex items-center'>
					<Bio />
				</div>
			</a>
		</>
	);
};

export default featuredPost;
