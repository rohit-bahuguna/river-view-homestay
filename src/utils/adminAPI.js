import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}/admin/Room`;

export const addRoom = async roomDetails => {
	const url = `${BASE_URL}/add`;
	return await axios.post(url, roomDetails, {
		headers: {
			'content-Type': 'multipart/form-data'
		},

		withCredentials: true
	});
};
