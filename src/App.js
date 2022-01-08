import React from 'react';
import Banner from './components/Banner/Banner';
import BottomNavSection from './components/BottomNavSection/BottomNavSection';
import ClothingSectionLink from './components/ClothingSectionLink/ClothingSectionLink';
import DontMiss from './components/DontMiss/DontMiss';
import NikeHero from './components/Hero/NikeHero';
import MoreNikeSection from './components/MoreNikeSection/MoreNikeSection';
import Navbar from './components/Navbar/Navbar';
import TheLatest from './components/TheLatest/TheLatest';
import TrendingSection from './components/TrendingSection/TrendingSection';

function App() {
	return (
		<div className='w-full'>
			{/* Navbar */}
			<Navbar />
			{/* Banner */}
			<Banner />

			{/* Main-Section	 */}
			<div className='flex flex-col justify-center items-center mx-7 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12  '>
				{/* Nike-Hero */}
				<NikeHero />

				{/* Trending-Section */}
				<TrendingSection />

				{/* The-Latest */}
				<TheLatest />

				{/* Dont-Miss */}
				<DontMiss />

				{/* More-Nike-Section */}
				<MoreNikeSection />

				{/* Clothing-Link-Section */}
				<ClothingSectionLink />
			</div>
			{/* Bottom Section */}
			<BottomNavSection />
		</div>
	);
}

export default App;
