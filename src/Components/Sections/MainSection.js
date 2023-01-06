import React from 'react';
import Form from './Form';
import './mainSection.css';
const MainSection = () => {
	return (
		<div className="main_section">
			<div className="main_section_upper">
				<img
					className="main_section_image"
					src="/images/riverViewHomeStay.jpg"
					alt="river view homestay image"
				/>
				<div className="main_section_lower">
					<div className="homestay_name">
						<h1>River View HomeStay</h1>
						<p className="homestay_tagline">... Into The Lap Of Nature</p>
					</div>
				</div>
				<div className="booking">
					<Form />
				</div>
			</div>
		</div>
	);
};

export default MainSection;
