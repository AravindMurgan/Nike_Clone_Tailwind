import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ShoeData } from '../../ShoeData/ShoeData';

function DontMiss() {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 4, itemsToScroll: 2 },
		{ width: 1450, itemsToShow: 5 },
		{ width: 1750, itemsToShow: 6 },
	];

	return (
		<div className='w-full mt-8 md:mt-10 xl:mt-12  '>
			<h1 className='text-2xl md:text-3xl xl:text-4xl mb-5'>Dont Miss</h1>
			<div className='relative  aspect-w-7 aspect-h-8 sm:aspect-w-6 sm:aspect-h-4 
				md:aspect-w-12 md:aspect-h-6 lg:aspect-w-12 lg:aspect-h-6'>
				<img
					className='object-cover object-left'
					src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_1237,c_limit/858d69b9-2fe7-49f5-8dc3-83e834f8b9f2/nike-just-do-it.jpg'
					alt=''
				/>

				<div className=' absolute top-60 left-7 sm:top-44 sm:left-16 md:top-40 md:left-12 lg:top-48 lg:left-12 xl:top-96'>
					<p className='text-base md:text-lg xl:text-2xl text-white mb-2 font-medium'>
						Nike App Exclusive
					</p>
					<h3 className='font-Roboto text-4xl sm:text-4xl md:text-5xl  tracking-tighter font- italic text-white'>
						NIKE METCON 7
					</h3>
					<p className='text-base md:text-lg xl:text-2xl  text-white font-medium'>
						The smartest Metcon ever
					</p>

					<button className='inline mt-8 mr-5  w-36 md:w-52 lg:w-56  
							md:px-8 py-2 md:py-2 lg:py-3 md:text-lg lg:text-xl 
							text-base bg-white text-black rounded-full'
					>
						Learn More
					</button>

				</div>
			</div>
			<Carousel className='mt-14' breakPoints={breakPoints}>
				{ShoeData.map((data, idx) => (
					<div className='container mr-3' key={data.id}>
						<img src={data.url} alt={data.name} />
						<div className='flex justify-between p-3'>
							<p>{data.name} </p>
							<p>{data.price} </p>
						</div>
						<p className='px-3 text-gray-500'>{data.type} </p>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default DontMiss;
