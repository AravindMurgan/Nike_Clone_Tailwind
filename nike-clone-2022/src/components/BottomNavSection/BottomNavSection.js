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
		<div className='sm:mt-20 bg-black w-full p-10 '>
			{/* Nike Information */}
			<div className='flex'>
				{/* general-info */}
				<div className='flex justify-between w-2/5'>
					{/* section-1 */}
					<div>
						{section1.map((data, index) => (
							<ul key={index}>
								<li>
									<button className='text-white text-xs font-bold'>
										{data}{' '}
									</button>
								</li>
							</ul>
						))}
					</div>

					{/* section-2 */}
					<div>
						<h3 className='text-white text-sm font-bold'>GET HELP</h3>
						{section2.map((data, index) => (
							<ul key={index}>
								<li>
									<button className='text-gray-500 text-xs leading-8 hover:text-white'>
										{data}{' '}
									</button>
								</li>
							</ul>
						))}
					</div>

					{/* section-3 */}
					<div>
						<h3 className='text-white text-sm font-bold'>ABOUT NIKE</h3>
						{section3.map((data, index) => (
							<ul key={index}>
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
				<div className='flex justify-end  w-3/5 '>
					<span className='mr-5 bg-gray-700 p-2 a rounded-full h-10 hover:bg-white duration-150 cursor-pointer'>
						<TwitterIcon />
					</span>
					<span className='mr-5 bg-gray-700 p-2 a rounded-full h-10 hover:bg-white  duration-150 cursor-pointer'>
						<YouTubeIcon />
					</span>
					<span className='mr-5 bg-gray-700 p-2 a rounded-full h-10 hover:bg-white  duration-150 cursor-pointer'>
						<InstagramIcon />
					</span>
					<span className='mr-5 bg-gray-700 p-2 a rounded-full h-10 hover:bg-white  duration-150 cursor-pointer'>
						<FacebookIcon />
					</span>
				</div>
			</div>

			<hr className='mt-8' style={{ border: '1px solid gray' }} />

			{/* Store Information */}
			<div className='flex w-full justify-between mt-8 px-7'>
				<div className='flex justify-center items-center'>
					<span className='mr-2'>
						<RoomIcon style={{ color: 'white' }} fontSize='small' />
					</span>
					<p className='text-white text-xs mr-5'>India</p>
					<p className='text-xs text-gray-500 '>
						@2021 Nike, Inc. All Rights Reserved
					</p>
				</div>

				<div className='flex'>
					<p className='text-xs text-gray-500 ml-5 hover:text-white duration-150'>
						Guides
					</p>
					<p className='text-xs text-gray-500 ml-5 hover:text-white duration-150'>
						Terms of Sale
					</p>
					<p className='text-xs text-gray-500 ml-5 hover:text-white duration-150'>
						Terms of Use
					</p>
					<p className='text-xs text-gray-500 ml-5 hover:text-white duration-150'>
						Nike Privacy Policy test
					</p>
				</div>
			</div>
		</div>
	);
}

export default BottomNavSection;
