module.exports = {
	siteMetadata: {
		title: `new`,
		titleTemplate: `%s · The Real Hero`,
		siteUrl: `http://localhost:8000`,
		description:
			'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
		url: 'https://www.doe.com',
		image: '/snap.jpg',
		twitterUsername: '@magnenatg',
	},
	plugins: [
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: 'https://gwm.cloud29.ch/graphql',
			},
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `gatsby-wp-2`,
				short_name: `gatsby-gm`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`DM Serif Display`],
				display: 'swap',
			},
		},
	],
};
