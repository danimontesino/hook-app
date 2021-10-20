import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
	const { user, setUser } = useContext(UserContext);

	const handleLogin = () => {
		setUser({
			id: 345,
			name: 'Daniel',
			email: 'correodaniel@gmail.com',
		});
	};

	const handleLogout = () => {
		setUser({});
	};

	return (
		<div>
			<h1>LoginScreen</h1>
			<hr />
			{Object.keys(user).length === 0 ? (
				<button className="btn btn-outline-primary" onClick={handleLogin}>
					Login
				</button>
			) : (
				<button className="btn btn-warning" onClick={handleLogout}>
					Logout
				</button>
			)}
		</div>
	);
};
