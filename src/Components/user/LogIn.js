import React, { useState } from 'react';
import { userLogIn } from '../../utils/userAPI';

const Login = () => {
	const [userDetails, setUserDetails] = useState({});
	const Login = async e => {
		e.preventDefault();
		const user = await userLogIn(userDetails);
		console.log(user);
	};
	return (
		<div>
			Login
			<form>
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
				<input type="submit" value="Sign In" onClick={e => Login(e)} />
			</form>
		</div>
	);
};

export default Login;
