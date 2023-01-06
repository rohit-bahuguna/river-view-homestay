import React from 'react';
import './welcomeSection.css';
const WelcomeSection = () => {
	return (
		<div className="welcome_section">
			<div className="welcome_section_left">
				<img
					src="/images/welcomeImage.jpeg"
					alt=""
					className="welcome_section_image"
				/>
				{/* <h1 className="welcome">Welcome</h1>

				<p className="welcome_message">into the lap of nature</p> */}
			</div>
			<hr />
			<p className="welcome_section_message">
				The River View Homestay is a place where travelers can stay with a local
				host while enjoying the beauty of nature. The homestay is surrounded by
				beautiful natural landscapes like forests and hills. the homestay offers
				guests the opportunity to connect with nature and unwind in a peaceful
				setting.you can relax, go for a hike, or experience local culture and
				daily life ,Whether you're looking to relax by the fireplace it is a
				special and affordable way to travel
			</p>
		</div>
	);
};

export default WelcomeSection;
