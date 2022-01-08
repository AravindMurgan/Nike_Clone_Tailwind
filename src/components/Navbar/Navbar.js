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
						<img
							src='./images/Nike_logo.png'
							style={{ height: '60px', width: '60px' }}
							alt='nike__logo'
						/>
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
								className='focus:outline-none  bg-transparent text-xl m-2 w-36'
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
						<img
							src='http://logosvg.com/wp-content/uploads/2017/01/Nike_logo.png'
							style={{ height: '60', width: '60px' }}
							alt='nike__logo'
						/>
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
