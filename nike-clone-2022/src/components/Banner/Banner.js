import React from 'react';

function Banner() {
	return (
		<div className='bg-gray-200'>
			<p className='p-4 sm:p-3 lg:p-2 text-center text-base sm:text-sm md:text-base lg:text-xl' >
				New drops every Friday, only on the Nike App.{' '}
				<span className='underline'>Shop</span>
			</p>
		</div>
	);
}

export default Banner;
