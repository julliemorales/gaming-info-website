import React from 'react';

const Footer = () => {
	const currentYear = new Date();

	return (
		<footer>
			<p>Copyright &copy; {currentYear.getFullYear()} KodeGo WD-15</p>
		</footer>
	);
};

export default Footer;
