import './css/Navbar.css';
import LogoNoName from '../public/assets/ModifiedLogo.png';
import { useEffect, useState } from 'react';

const musicPath = '../public/assets/Rainy-Day-Audio.mp3';

type NavbarProps = {
	changeTheme: () => void;
};

function NavBar(props: NavbarProps) {
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);
	const [volume, setVolume] = useState(0.2);
	const [audio] = useState(new Audio(musicPath));

	useEffect(() => {
		audio.volume = volume;
		audio.loop = true;
	}, [volume, audio]);

	useEffect(() => {
		// Handle music play/pause based on isMusicPlaying state
		isMusicPlaying ? audio.play() : audio.pause();

		// Cleanup to pause music when component unmounts
		return () => {
			audio.pause();
		};
	}, [isMusicPlaying, audio]);

	const toggleMusic = () => {
		setIsMusicPlaying(!isMusicPlaying);
	};

	return (
		<div className="Navbar">
			<div className="navigation-section sticky-top">
				<nav className="navbar navbar-expand-md bg-body-tertiary">
					<a className="navbar-brand" href="#">
						<img
							src={LogoNoName}
							alt="Your Logo"
							width="30"
							height="30"
							className="logo-png d-inline-block align-top"
							style={{ paddingLeft: '10px' }}
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-start"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link"
									aria-current="page"
									href="#home"
									title="Home"
								>
									Home
								</a>
							</li>
							<li>
								<a className="nav-link" href="#about" title="About">
									About
								</a>
							</li>
							<li>
								<a className="nav-link" href="#projects" title="Projects">
									Projects
								</a>
							</li>
							<li>
								<a className="nav-link" href="#contact" title="Contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li
								className="nav-item nav-moon theme-button mx-2"
								onClick={props.changeTheme}
							>
								Dark Mode
							</li>
							<li className="nav-item theme-button mx-2" onClick={toggleMusic}>
								{isMusicPlaying ? 'Stop Music' : 'Play Music'}
							</li>
						</ul>
					</div>
					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={volume}
						onChange={(e) => setVolume(parseFloat(e.target.value))}
						style={{ marginRight: '10px' }}
					/>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
