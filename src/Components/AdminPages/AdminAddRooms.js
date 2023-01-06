import React, { useState } from 'react';
import { addRoom } from '../../utils/adminAPI';
const AdminAddRooms = () => {
	const [roomDetails, setRoomDetails] = useState({ photos: [], services: [] });

	const addRoomHandler = async e => {
		e.preventDefault();

		console.log(roomDetails);

		const room = await addRoom(roomDetails);
		console.log(room);
	};

	console.log(roomDetails);
	return (
		<div>
			<form>
				rooom name:
				<input
					type="text"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							name: e.target.value
						})}
				/>
				price:
				<input
					type="number"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							price: e.target.value
						})}
				/>
				description:
				<input
					type="text"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							description: e.target.value
						})}
				/>
				photos:
				<input
					type="file"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							photos: [...e.target.files]
						})}
					multiple
				/>
				category:
				<select
					name=""
					id=""
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							category: e.target.value
						})}>
					<option value="single">single</option>
					<option value="double">double</option>
					<option value="single with kitchan">single with kitchan</option>
				</select>
				services:
				<label htmlFor="wifi">wifi</label>
				<input
					type="checkbox"
					id="wifi"
					name="services"
					value="wifi"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							services: [...roomDetails.services, e.target.value]
						})}
				/>
				<label htmlFor="tv">TV</label>
				<input
					type="checkbox"
					id="tv"
					name="services"
					value="TV"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							services: [...roomDetails.services, e.target.value]
						})}
				/>
				availability:
				<label htmlFor="yes">Yes</label>
				<input
					type="radio"
					id="yes"
					name="availability"
					value="Yes"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							availability: e.target.value
						})}
				/>
				<label htmlFor="no">No</label>
				<input
					type="radio"
					name="availability"
					id="no"
					value="No"
					onChange={e =>
						setRoomDetails({
							...roomDetails,
							availability: e.target.value
						})}
				/>
				<input
					type="submit"
					name=""
					id=""
					value="Add Room"
					onClick={e => addRoomHandler(e)}
				/>
			</form>
		</div>
	);
};

export default AdminAddRooms;
