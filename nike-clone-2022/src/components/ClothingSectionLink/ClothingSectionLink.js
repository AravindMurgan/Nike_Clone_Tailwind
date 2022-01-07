import React from 'react';
import { clothing, icons, kids, shoes } from './ClothingSectionData';

function ClothingSectionLink() {
	return (
		<div className='w-full '>
			<div className=' flex flex-col my-10 w-full sm:hidden leading-10'>
				<ul>
					<li className='cursor-pointer'>Icons</li>
					<li className='cursor-pointer'>Shoes</li>
					<li className='cursor-pointer'>Clothing</li>
					<li className='cursor-pointer'>Kids</li>
				</ul>
			</div>
			<div className='hidden sm:visible sm:flex sm:justify-evenly  sm:mt-20 '>
				{/* Icons */}
				<div>
					<h3 className='mb-10'>Iconsdd</h3>
					{icons.map((data) => (
						<ul key={data.id}>
							<li>
								<button className='text-gray-500 hover:text-black leading-7 '>
									{data.value}
								</button>
							</li>
						</ul>
					))}
				</div>

				{/* Shoes */}
				<div>
					<h3 className='mb-10'> Shoes</h3>
					{shoes.map((data) => (
						<ul key={data.id}>
							<li>
								<button className='text-gray-500 hover:text-black leading-7  '>
									{data.value}{' '}
								</button>
							</li>
						</ul>
					))}
				</div>

				{/* Clothing */}
				<div>
					<h3 className='mb-10'>Clothing</h3>
					{clothing.map((data) => (
						<ul key={data.id}>
							<li>
								<button className='text-gray-500 hover:text-black leading-7  '>
									{data.value}{' '}
								</button>
							</li>
						</ul>
					))}
				</div>

				{/* Kids */}
				<div>
					<h3 className='mb-10'>Kids</h3>
					{kids.map((data) => (
						<ul key={data.id}>
							<li>
								<button className='text-gray-500 hover:text-black leading-7  '>
									{data.value}{' '}
								</button>
							</li>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
}

export default ClothingSectionLink;
