import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';

function BottomNavSection() {
	const section1 = [
		'FIND A STORE',
		'BECOME A MEMBER',
		'SIGN UP FOR EMAIL',
		'STUDENT DISCOUNTS',
		'SEND US A FEEDBACK',
	];

	const section2 = [
		'Order Status',
		'Delivery',
		'Returns',
		'Payment Options',
		'Contact Us on Nike.com inquiries',
		'Contact Us On All Other Inquiries',
	];

	const section3 = ['News', 'Careers', 'Investors', 'Sustainability'];

	return (
		<footer className='flex flex-col sm:mt-20 bg-black w-full p-10 '>
			{/* Nike Information */}
			<div className='flex flex-col md:flex md:flex-row'>
				{/* general-info */}
				<div className='w-full md:w-2/5 flex flex-col md:flex-row md:justify-between '>
					{/* section-1 */}
					<div className='md:mr-10 lg:mr-24 xl:mr-32 border-b border-white border-solid md:border-0 ' >
						{section1.map((data, index) => (
							<ul className='mb-3 md:mb-0 md:mt-4 md:w-32' key={index}>
								<li>
									<button className='text-white text-xs font-bold'>
										{data}{''}
									</button>
								</li>
							</ul>
						))}
					</div>

					{/* section-2 */}
					<div className='mt-10 md:mt-0 md:mr-10 lg:mr-24 xl:mr-32' >
						<h3 className='text-white text-sm font-bold'>GET HELP</h3>
						{section2.map((data, index) => (
							<ul className='hidden md:inline-block md:w-44' key={index}>
								<li>
									<button className='text-gray-500 text-xs leading-8 hover:text-white'>
										{data}{' '}
									</button>
								</li>
							</ul>
						))}
					</div>

					{/* section-3 */}
					<div className='mt-10 md:mt-0' >
						<h3 className='text-white text-sm font-bold'>ABOUT NIKE</h3>
						{section3.map((data, index) => (
							<ul className='hidden md:inline-block md:w-44' key={index}>
								<li>
									<button className='text-gray-500 text-sm leading-8 hover:text-white'>
										{data}{' '}
									</button>
								</li>
							</ul>
						))}
					</div>
				</div>

				{/* social media */}
				<div className='mt-10 md:mt-14 flex md:justify-end  md:w-3/5 '>
					<div className='flex items-center h-7 md:h-10' >
						<span className='mr-3 md:mr-5  p-1 md:p-2 rounded-full 
						hover:bg-white bg-gray-700 duration-150 cursor-pointer
						'>
							<TwitterIcon />
						</span>
					</div>
					<div className='flex items-center h-7 md:h-10' >
						<span className='mr-3 md:mr-5 p-1 md:p-2 a rounded-full 
							hover:bg-white bg-gray-700 duration-150 cursor-pointer'>
							<YouTubeIcon />
						</span>
					</div>
					<div className='flex items-center h-7 md:h-10' >
						<span className='mr-3 md:mr-5 p-1 md:p-2 a rounded-full 
							hover:bg-white bg-gray-700 duration-150 cursor-pointer'>
							<InstagramIcon />
						</span>
					</div>
					<div className='flex items-center h-7 md:h-10' >
						<span className='mr-3 md:mr-5 p-1 md:p-2 a rounded-full 
							hover:bg-white bg-gray-700 duration-150 cursor-pointer'>
							<FacebookIcon />
						</span>
					</div>
				</div>
			</div>

			<hr className='hidden md:inline-block mt-8' style={{ border: '1px solid gray' }} />

			{/* Store Information */}
			<div className='flex flex-col md:flex-row w-full justify-between mt-8 md:px-7 '>
				<div className='flex flex-col md:flex-row md:justify-center md:items-center'>
					<span className='mr-2'>
						<RoomIcon style={{ color: 'white' }} fontSize='small' />
					</span>
					<p className='text-white text-xs mr-5'>India</p>
					<p className='mt-8 md:mt-0 text-xs text-gray-500 '>
						@2021 Nike, Inc. All Rights Reserved
					</p>
				</div>

				<div className='flex flex-col md:flex-row mt-8'>
					<p className='text-xs text-gray-500 md:ml-5 hover:text-white duration-150'>
						Guides
					</p>
					<p className='mt-3 md:mt-0 text-xs text-gray-500 md:ml-5 hover:text-white duration-150'>
						Terms of Sale
					</p>
					<p className='mt-3 md:mt-0 text-xs text-gray-500 md:ml-5 hover:text-white duration-150'>
						Terms of Use
					</p>
					<p className=' mt-3 md:mt-0 text-xs text-gray-500 md:ml-5 hover:text-white duration-150'>
						Nike Privacy Policy test
					</p>
				</div>
			</div>
		</footer>
	);
}

export default BottomNavSection;
