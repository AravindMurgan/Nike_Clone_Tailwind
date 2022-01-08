import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import React from 'react';

function Navbar() {
	return (
		<div>
			<header className='hidden box-border relative sm:hidden lg:block  '>
				{/* Navbar-1 */}
				<nav>
					<div className='flex justify-between bg-gray-200'>
						<div className='p-2 ml-5'>
							<img src='./images/Jumpman.png' alt='jumpan' className=' h-6 w-6 ml-4' />
						</div>

						<div className='flex justify-evenly  p-2 mr-5 w-60'>
							<p>Help</p>
							<p>I</p>
							<p>Join Us</p>
							<p>I</p>
							<p>Sign In</p>
						</div>
					</div>
				</nav>

				{/* Navbar-2    */}
				<nav className='flex justify-between h-16  border-solid border-b-2 items-center'>
					{/* Logo */}
					<div className='lg:ml-5'>
						<svg class="pre-logo-svg" className='w-14 h-14' fill="#111" viewBox="0 0 69 32">
							<path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
						</svg>

					</div>

					{/* Nav-Menu */}
					<div className='flex items-center '>
						<nav className=' text-center'>
							<ul className='flex text-md mr-36 '>
								<li className='mr-10'>
									<p>Men</p>
								</li>
								<li className='mr-10'>
									<p>Women</p>
								</li>
								<li className='mr-10'>
									<p>Kids</p>
								</li>
								<li className='mr-10'>
									<p>Customise</p>
								</li>
								<li>
									<p>Sale</p>
								</li>
							</ul>
						</nav>

						{/* Search-Bar */}
						<div className=' flex justify-around items-center bg-gray-100 hover:bg-gray-200 rounded-full px-1  '>
							<span>
								<SearchIcon fontSize='large' />
							</span>

							<input
								type='text'
								className='focus:outline-none bg-transparent text-xl m-2 w-36'
								placeholder='Search'
							/>
						</div>
					</div>

					{/* Cart-Like-Icons */}
					<div className=' flex mr-14'>
						<FavoriteBorderIcon fontSize='large' />
						<ShoppingBasketIcon fontSize='large' className='ml-11' />
					</div>
				</nav>
			</header>

			{/* Mobile */}
			<header className='sm:p-2 ml-4 lg:hidden'>
				<nav className='flex justify-between items-center w-full m-0 p-0'>
					<div>
						<svg class="pre-logo-svg" className='w-12 h-12' fill="#111" viewBox="0 0 69 32">
							<path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
						</svg>
					</div>

					<div>
						<WorkOutlineIcon className='' style={{ fontSize: 30 }} />
						<SearchIcon className='ml-5' style={{ fontSize: 30 }} />
						<MenuIcon className='ml-5 mr-5' style={{ fontSize: 30 }} />
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navbar;
