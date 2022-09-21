import { SpinnerDotted } from 'spinners-react';
import { useState, useEffect } from 'react';
import { getAllGames } from '../service/api';
import Footer from './Footer';
import NaviBar from './NaviBar';

const AllGames = () => {
	const [games, setGames] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getGamesList = async () => {
		setIsLoading(true);
		setTimeout(async () => {
			const result = await getAllGames();
			setGames(result.data);
			setIsLoading(false);
		}, 3000);
	};

	useEffect(() => {
		getGamesList();
	}, []);

	return (
		<>
			<NaviBar />
			<div className='container mx-auto '>
				<h1 className='halant text-3xl md:text-4xl lg:text-5xl font-semibold text-dark my-5'>
					EXPLORE THE BEST <span className='block'>GAMES TODAY</span>
				</h1>
				{isLoading && (
					<div className='mx-auto'>
						<SpinnerDotted size='30%' color='#111827' className='mx-auto mb-' />
					</div>
				)}
				<div className='flex flex-wrap justify-around gap-8'>
					{games &&
						!isLoading &&
						games.map((game) => {
							const { title, thumbnail, genre, release_date } = game;

							return (
								<div className='xl:w-1/4 md:w-1/2 p-4'>
									<div className='bg-[#201B1B] rounded-lg'>
										<img className='h-50 w-full object-cover object-center mb-1' src={thumbnail} alt={title}></img>
										<div className='px-6 py-5'>
											<h3 className='halant text-white text-xl font-semibold'>{title}</h3>
											<h2 className='halant text-white my-2'>
												Release Date:
												<span className='text-[#DC3D4B] ml-1'>{release_date}</span>
											</h2>
											<div className='flex justify-end'>
												<button class='nunito px-4 py-1 bg-[#747474] text-white text-sm rounded-full'>{genre}</button>
											</div>
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

export default AllGames;
