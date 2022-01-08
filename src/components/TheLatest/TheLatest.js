import React from 'react';

function TheLatest() {
	return (
		<div className='mt-14 md:mt-16 md:mb-14 xl:mb-16 md:align-middle w-full'>
			{/* Latest-1 */}
			<div>
				<h1 className='text-2xl md:text-3xl xl:text-4xl mb-5'>The Latest</h1>
				<div className='aspect-w-7 aspect-h-8 sm:aspect-w-6 sm:aspect-h-4 md:aspect-w-12 md:aspect-h-6 lg:aspect-w-12 lg:aspect-h-6 '>
					<img
						className='object-cover '
						src='https://static.nike.com/a/images/f_auto/dpr_1.1/w_1115,c_limit/5201e4af-b3b4-4091-8219-5adb361d1c02/nike-just-do-it.jpg'
						alt='latestSection'
					/>
				</div>
			</div>

			{/* Latest-2 */}
			<div className='mt-8 md:mt-12 w-full flex flex-col md:justify-center md:items-center'>
				<h3 className='font-Roboto  text-4xl md:text-5xl  lg:text-6xl xl:text-7xl
				text-left tracking-tighter italic sm:text-center '>
					<span>NIKE MOVEMENT </span>
					<br className='leading-5' />
					<span>CHALLENGE STARTS NOW</span>
				</h3>

				<div className='mt-8 md:mt-10 xl:mt-12 '>
					<p className='text-base text-left sm:text-center  md:text-xl lg:text-xl xl:text-2xl'>
						Complete weekly challenges on NRC or NTC Apps from now till 8th
						<br />
						August to acccess the Champions Locker.
					</p>
					<p className='text-base text-left sm:text-center  md:text-xl lg:text-xl xl:text-2xl leading-9'>
						Member-only products and content await on the Nike App
					</p>
				</div>

				<div className='flex justify-start sm:justify-center items-center sm:mt-3 md:mt-5 xl:mt-7  w-full'>
					<span>
						<button className='inline mt-8 mr-5  w-36 md:w-52 lg:w-56  
							md:px-8 py-2 md:py-2 lg:py-3 md:text-lg lg:text-xl 
							text-base bg-gray-900 text-white rounded-full  '>
							Start a Run
						</button>
					</span>
					<span>
						<button className='inline mt-8  w-36 md:w-52 lg:w-56  md:px-8 py-2 md:py-2 lg:py-3 text-base bg-gray-900 text-white rounded-full md:text-lg lg:text-xl '>
							Start a Workout
						</button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default TheLatest;
