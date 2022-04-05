import React from 'react';

const Navbar = (props) => {
	const { icon, title } = props;
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon}></i>
				{title}
			</h1>
		</nav>
	);
};

export default Navbar;
