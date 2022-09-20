import './App.css';
import AllGames from './components/AllGames';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<AllGames />
			<News />
			<Footer />
		</div>
	);
};

export default App;
