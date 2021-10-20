import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<NavLink to="/" exact className="navbar-brand">
					useContext
				</NavLink>
				<div className="navbar-expand" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								to="/"
								exact
								activeClassName="active"
								className="nav-link"
								aria-current="page"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" exact activeClassName="active" className="nav-link">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/login" exact activeClassName="active" className="nav-link">
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
