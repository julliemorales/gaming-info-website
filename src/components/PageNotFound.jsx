import Footer from './Footer';
import NaviBar from './NaviBar';

const PageNotFound = () => {
	return (
		<div className='bg-[#291D24]'>
			<NaviBar />
			<p className='halant h-screen text-white text-6xl text-center mt-10'>Error 404: Page Not Found</p>
			<Footer />
		</div>
	);
};

export default PageNotFound;
