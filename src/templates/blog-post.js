import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

import Seo from '../components/seo';

const BlogPostTemplate = (props) => {
	const post = props.data.post;
	const featuredImage = {
		data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
		alt: post.featuredImage?.node?.alt || ``,
	};
	return (
		<Layout>
			<Seo title={post.title} description={post.description} />
			<section className='pb-24'>
				<div className='container px-4 mx-auto'>
					<div className='mx-w-6xl mx-auto'>
						<div className='py-24 max-w-4xl'>
							<span className='text-indigo-500'>
								Published 02 September 2022
							</span>
							<h2 className='text-4xl md:text-5xl font-heading mt-4 mb-6'>
								{post.title}
							</h2>
							<p>{parse(post.excerpt)}</p>
						</div>
						<GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
						<div className='flex flex-wrap -mx-4'>
							<div className='w-full lg:w-2/3 px-4 mb-12 lg:mb-0'>
								<>{parse(post.content)}</>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostById(
		$id: String!
		$previousPostId: String
		$nextPostId: String
	) {
		post: wpPost(id: { eq: $id }) {
			id
			excerpt
			content
			title
			date(formatString: "MMMM DD, YYYY")
			featuredImage {
				node {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(
								quality: 100
								placeholder: TRACED_SVG
								layout: FULL_WIDTH
							)
						}
					}
				}
			}
		}
		previous: wpPost(id: { eq: $previousPostId }) {
			uri
			title
		}
		next: wpPost(id: { eq: $nextPostId }) {
			uri
			title
		}
	}
`;
