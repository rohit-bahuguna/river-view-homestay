import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

export const userLogIn = async userInfo => {
	const url = `${BASE_URL}/login`;
	return await axios.post(url, userInfo, {
		withCredentials: true
	});
};

export const userSignIn = async userInfo => {
	const url = `${BASE_URL}/signup`;
	return await axios.post(url, userInfo, {
		withCredentials: true
	});
};
