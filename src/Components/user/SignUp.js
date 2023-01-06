import React, { useState } from 'react';
import { userSignIn } from '../../utils/userAPI';
const SignUp = () => {
	const [userDetails, setUserDetails] = useState({});

	const Signup = async e => {
		e.preventDefault();
		const user = await userSignIn(userDetails);
		console.log(user);
	};
	return (
		<div>
			SignUp
			<input
				type="text"
				onChange={e =>
					setUserDetails({
						...userDetails,
						name: e.target.value
					})}
			/>
			<input
				type="email"
				onChange={e =>
					setUserDetails({
						...userDetails,
						email: e.target.value
					})}
			/>
			<input
				type="password"
				onChange={e =>
					setUserDetails({
						...userDetails,
						password: e.target.value
					})}
			/>
			<input type="submit" value="Sign Up" onClick={e => Signup(e)} />
		</div>
	);
};

export default SignUp;
