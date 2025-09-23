import { useState } from 'react';
import './App.css';
import MoreData from './page_areas/MoreData';
import Header from './page_areas/header';
import AboutMe from './page_areas/AboutMe';
import Experience from './page_areas/Experience';
import ProfilePicture from './page_areas/ProfilePicture';

function App() {
	const [count, setCount] = useState(0);
	const pageAreas = [
		Header(),
		ProfilePicture(),
		AboutMe(),
		Experience(),
		MoreData(),
	];

	const display = pageAreas.map((e) => {
		return e;
	});

	return <div className="container">{display}</div>;
}

export default App;
