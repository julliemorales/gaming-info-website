import Footer from './Footer';
import NaviBar from './NaviBar';
import { useEffect } from 'react';
import AOS from 'aos';

const PageNotFound = () => {
	useEffect(() => {
		document.title = '404: Page Not Found';
		AOS.init();
	}, []);
	return (
		<div className=' bg-[#291D24] h-screen flex flex-col justify-between' data-aos='fade-up' data-aos-duration='1000'>
			<NaviBar />
			<p className='halant text-white text-6xl text-center mt-10'>Error 404: Page Not Found</p>
			<Footer />
		</div>
	);
};

export default PageNotFound;
