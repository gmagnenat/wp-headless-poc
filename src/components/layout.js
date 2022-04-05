import React from 'react';

const layout = ({ children }) => {
	return (
		<>
			<section className='py-24'>
				<div className='container px-4 mx-auto'>{children}</div>
			</section>
		</>
	);
};

export default layout;
