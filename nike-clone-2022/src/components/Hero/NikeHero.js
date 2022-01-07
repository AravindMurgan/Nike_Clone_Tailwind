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

			<div className=' bg-red-300 mx-auto md:flex md:flex-col md:justify-center md:items-center'>
				<h1 className='font-Roboto text-5xl text-left tracking-tighter font- italic md:text-center md:text-5xl lg:text-6xl xl:text-7xl'>
					YOUR NIKE
					<br />
					CONNECTION
				</h1>
				<p className='text-base mt-7 md:text-xl lg:text-xl xl:text-2xl'>
					More sport, more insipiration,more Nike!
				</p>

				<span className='inline mt-8  w-36 md:w-52 lg:w-56  md:px-8 py-2 md:py-2 lg:py-3 text-center text-base bg-gray-900 text-white rounded-full md:text-lg lg:text-xl '>
					<button>Get you Great</button>
				</span>
			</div>

			<div className='bg-yellow-300 mt-9 pl-2/3'  >
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae amet repellendus eligendi, odio praesentium maiores porro neque vitae nesciunt accusantium.</p>
			</div>
		</div>
	);
}

export default NikeHero;
