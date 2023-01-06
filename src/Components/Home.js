import React from 'react';
import Header from './Common/Header';
import MainSection from './Sections/MainSection';
import WelcomeSection from './Sections/WelcomeSection';

const Home = () => {
	return (
		<div className="home">
			<Header />
			<MainSection />
			<WelcomeSection />
		</div>
	);
};

export default Home;
