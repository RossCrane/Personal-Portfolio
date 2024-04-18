import './css/App.css';
import Navbar from './Navbar';
import Home from './directory/Home';
import About from './directory/About';
import Projects from './directory/Projects';
import Contact from './directory/Contact';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import darkBackground from '../public/assets/night-mountain.jpg';
import lightBackground from '../public/assets/LightBackground.jpg';

function App() {
	//SET STYLES FOR DARK MODE TOGGLE
	const [darkMode, setDarkMode] = useState<boolean>(false);
	const brightFont = darkMode ? 'white' : 'black';
	const darkFont = darkMode ? 'var(--light-font)' : 'white';
	const buttonColor = darkMode ? 'white' : 'var(--dark-font)';
	const filterImg = darkMode ? `brightness(50%)` : `brightness(100%)`;
	const homeImg = darkMode ? darkBackground : lightBackground;
	const primaryBackground = darkMode ? '#212529' : 'white';
	const accentBackground = darkMode
		? 'rgba(30, 44, 47, 0.4)'
		: 'rgba(111, 142, 169, 0.4)';

	//RENDER DARK MODE TOGGLE
	useEffect(() => {
		document.documentElement.style.setProperty('--home-img', `url(${homeImg})`);
		document.documentElement.style.setProperty('--filter-img', filterImg);
		document.documentElement.style.setProperty('--button-color', buttonColor);
		document.documentElement.style.setProperty('--dark-color', darkFont);
		document.documentElement.style.setProperty('--bright-color', brightFont);
		document.documentElement.style.setProperty(
			'--primary-background',
			primaryBackground
		);
		document.documentElement.style.setProperty(
			'--accent-background',
			accentBackground
		);
		document.documentElement.style.setProperty(
			'--header-text-color',
			darkMode ? 'white' : 'var(--dark-font)'
		); // Add this
		document.documentElement.style.setProperty(
			'--header-text-hover-color',
			darkMode ? 'var(--dark-font)' : 'white'
		); // Add this

		const backgroundColor = document.querySelector('.App');
		darkMode
			? backgroundColor?.classList.add('dark-background')
			: backgroundColor?.classList.remove('dark-background');
	}, [
		darkMode,
		homeImg,
		filterImg,
		buttonColor,
		darkFont,
		brightFont,
		primaryBackground,
		accentBackground,
	]);

	//TOGGLE DARK THEME
	function changeTheme() {
		setDarkMode(!darkMode);
	}

	return (
		<div className="App">
			<Navbar changeTheme={changeTheme} />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
