import React from 'react';

function NikeHero() {
	return (
		<div className='w-full '>
			{/* Hero-Image */}

			{/* Mobile */}
			<div>
				<img
					className='w-full  h-64 md:h-full object-cover object-center  md:px-5 lg:hidden'
					src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_1031,c_limit/7c029d74-8aff-4130-a563-82ee67282c66/nike-just-do-it.jpg'
					alt=''
				/>
			</div>
			<div className='hidden lg:block'>
				<img
					className='w-full'
					src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_1031,c_limit/7c029d74-8aff-4130-a563-82ee67282c66/nike-just-do-it.jpg'
					alt=''
				/>
			</div>

			<div className='mt-5 md:mt-8 md:flex md:flex-col md:justify-center md:items-center'>
				<h1 className='font-Roboto text-4xl md:text-5xl  lg:text-6xl xl:text-7xl text-left tracking-tighter font- italic md:text-center'>
					YOUR NIKE
					<br />
					CONNECTION
				</h1>
				<p className='mt-3 md:mt-2 lg:mt-3 mb-5 md:mb-0 text-base md:text-xl lg:text-xl xl:text-2xl'>
					More sport, more insipiration,more Nike!
				</p>

				<span className='mt-5 md:mt-8 xl:mt-10 px-2 md:px-8 py-2 md:py-2 lg:py-3 w-36 md:w-52 lg:w-56
				inline  text-center text-base bg-gray-900 text-white rounded-full md:text-lg lg:text-xl '>
					<button>Get you Great</button>
				</span>
			</div>
		</div>
	);
}

export default NikeHero;
