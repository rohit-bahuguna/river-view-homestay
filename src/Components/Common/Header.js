import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../Sections/mainSection.css';
const Header = () => {
	return (
		<div className="main_header">
			<div>
				<h1 className="homestay_name">River View HomeStay</h1>
			</div>
			<ul className="header_list">
				<li>
					<Link className="header_list_item">HOME</Link>
				</li>
				<li>
					<Link className="header_list_item">Booking</Link>
				</li>
				<li>
					<Link className="header_list_item">Gallery</Link>
				</li>
				<li>
					<Link className="header_list_item">About</Link>
				</li>
				<li>
					<Link className="header_list_item">Contact</Link>
				</li>
				<li>
					<Link className="header_list_item">
						<span className="book_now"> BOOK NOW</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
