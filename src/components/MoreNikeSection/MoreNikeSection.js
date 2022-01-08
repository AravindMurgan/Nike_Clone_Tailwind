import React from 'react';

function MoreNikeSection() {
	return (
		<div className='w-full mt-14  md:mt-16 md:mb-14 xl:mb-16 md:align-middle'>
			<h1 className='text-3xl mb-5'>More Nike</h1>

			{/* Image-Section */}
			<div className='flex flex-col md:flex-row  '>
				<div className=' relative sm:mr-3 '>
					<img
						className='w-full '
						src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_402,c_limit/6581f3a5-db55-4a35-8e89-dec548f219b1/nike-just-do-it.jpg'
						alt='Womens'
					/>

					<span className='absolute bottom-8 left-5  inline-block text-xl mt-2 
						rounded-full bg-white text-black px-5 py-2 min-width-full'>
						<button>Women's</button>
					</span>
				</div>
				<div className=' mt-5 md:mt-0  relative sm:mr-3 '>
					<img
						className='w-full '
						src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_402,c_limit/ea7e8ed9-8f3b-4fcf-a7b5-07a66517e8ac/nike-just-do-it.jpg'
						alt='Womens'
					/>
					<span className='absolute bottom-8 left-5  inline-block text-xl mt-5 
					`	rounded-full bg-white text-black px-5 py-2 min-width-full'>
						<button>Men's</button>
					</span>
				</div>
				<div className=' mt-5 md:mt-0 relative'>
					<img
						src='https://static.nike.com/a/images/f_auto/dpr_2.0/w_402,c_limit/8e988906-9cdb-43fb-86b9-cef27dcf47a1/nike-just-do-it.jpg'
						className='w-full'
						alt='kids'
					/>
					<span className='absolute bottom-8 left-5  inline-block text-xl mt-5 
						rounded-full bg-white text-black px-5 py-2 min-width-full'>
						<button>Kids</button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default MoreNikeSection;
