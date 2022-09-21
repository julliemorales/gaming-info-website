import { SpinnerDotted } from 'spinners-react';
import { useState, useEffect } from 'react';
import { getAllNews } from '../service/api';
import Footer from './Footer';
import NaviBar from './NaviBar';

const AllNews = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getNewsList = async () => {
		setIsLoading(true);
		setTimeout(async () => {
			const result = await getAllNews();
			setNews(result.data);
			setIsLoading(false);
		}, 3000);
	};

	useEffect(() => {
		getNewsList();
	}, []);

	return (
		<>
			<NaviBar />
			<div className='container mx-auto'>
				<h5 className='text-4xl mb-10 mt-5 text-center'>LATEST NEWS</h5>
				{isLoading && (
					<div className='mx-auto'>
						<SpinnerDotted size='30%' color='#111827' className='mx-auto mb-' />
					</div>
				)}
				<div className='flex flex-wrap gap-8'>
					{news &&
						!isLoading &&
						news.map((news, index) => {
							const { title, image, date, description } = news;

							return (
								<div className='flex shadow-lg' key={index}>
									<div>
										<img className='w-full' src={image} alt={title} />
									</div>
									<div className='p-3'>
										<div className='mb-2'>
											<h3 className='font-bold text-xl'>{title}</h3>
										</div>
										<div className='mb-2'>
											<p>
												<span className=' px-2 text-red'>{date}</span>
											</p>
										</div>
										<div className='mb-2'>
											<p>
												<span className=' px-2 text-red'>{description}</span>
											</p>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AllNews;
