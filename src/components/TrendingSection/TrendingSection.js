import React from 'react';

function TrendingSection() {
	return (
		<div className='mt-14  md:mt-16 md:mb-14 xl:mb-16 md:align-middle'>
			<h1 className='text-2xl md:text-3xl xl:text-4xl mb-3 md:mb-8'>
				Trending
			</h1>

			{/* Trending-Section */}
			<div className='flex flex-col sm:flex-row '>
				<div className='mb-5 sm:mr-4 md:mr-6 xl:mr-8 relative  '>
					<img src='https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/14b2fe0e-4059-4ac7-beb0-7c6820f90993/nike-just-do-it.jpg'
						alt='trendSection' />

					<div className='absolute bottom-6 left-3 md:bottom-5 md:left-5 lg:bottom-7 lg:left-7 xl:bottom-9 xl:left-9 '>
						<h3 className='text-lg sm:text-sm md:text-lg lg:text-2xl font-medium'>
							Suit Up for the Jam --- Now Available Only on the Nike App{' '}
						</h3>
						<span className='px-3 py-2 md:px-4 md:py-2 mt-4 md:mt-5 min-width-full 
						inline-block text-base sm:text-sm md:text-lg lg:text-xl  rounded-full bg-black text-white '>
							<button>Learn More</button>
						</span>
					</div>
				</div>

				<div className='relative'>
					<img
						src='https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/b8583010-9026-45c4-8637-1753af418565/nike-just-do-it.jpg'
						alt='trendSection'
					/>
					<div className='absolute bottom-6 left-3 md:bottom-10 md:left-8 lg:bottom-16 lg:left-10  '>
						<h3 className='text-lg sm:text-sm md:text-lg lg:text-2xl font-medium text-white'>
							Rawdacious Pack
						</h3>
						<span className='px-3 py-2 md:px-8 md:py-2 mt-4 md:mt-5 
						min-width-full inline-block text-base sm:text-sm md:text-lg lg:text-xl 
						rounded-full bg-white text-black '>
							<button>Shop</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrendingSection;
