import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import FeaturedPost from '../components/featuredPost';
import CardPost from '../components/cardPost';
import Seo from '../components/seo';

// markup
const IndexPage = ({ data }) => {
	const {
		title: siteTitle,
		description: siteDescription,
		url: siteUrl,
	} = data.wp.generalSettings;

	const featuredPost = data.allWpPost?.nodes[0];

	return (
		<Layout>
			<Seo title='test' description='test' />
			<div className='flex flex-wrap -mx-4 mb-20 items-center'>
				<div className='w-full md:w-1/2 px-4 mb-6 mb:mb-0'>
					<Link to='/'>
						<h2 className='text-5xl md:text-6xl font-heading'>{siteTitle}</h2>
					</Link>
				</div>
				<div className='w-full md:w-1/2 px-4'>
					<p className='max-w-lg leading-8'>{siteDescription}</p>
				</div>
			</div>
			<div className='flex flex-wrap -mx-4'>
				{/* col left */}
				<div className='w-full md:w-1/2 px-4 mb-16 lg:mb-0'>
					<FeaturedPost featuredPost={featuredPost} />
				</div>
				{/* col right */}
				<div className='w-full md:w-1/2 px-4'>
					{data.allWpPost?.nodes?.slice(1).map((post) => (
						<CardPost post={post} key={post.id} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allWpPost(sort: { fields: [date] }) {
			nodes {
				id
				title
				slug
				excerpt
				link
				featuredImage {
					node {
						localFile {
							childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									formats: [WEBP]
									width: 500
								)
							}
						}
					}
				}
				author {
					node {
						name
					}
				}
			}
		}
		wp {
			generalSettings {
				description
				title
				url
			}
		}
	}
`;
