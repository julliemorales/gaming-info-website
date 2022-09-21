import './App.css';
import AllGames from './components/AllGames';
import Hero from './components/Hero';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/games' element={<AllGames />} />
				<Route path='/news' element={<News />} />
				<Route path='*' element={<>PageNotFound</>} />
			</Routes>
		</Router>
	);
};

export default App;
