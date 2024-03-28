import './css/Footer.css';
import { aboutDetails } from './Util/PersonalizedInfo';

function Footer() {
	const { linkedInUrl, githubUrl } = aboutDetails;
	return (
		<div
			className="Footer"
			style={{ backgroundColor: 'var(--primary-background)' }}
		>
			<nav className="my-2 my-sm-0 mr-sm-3">
				<a className="menu-link" href="#home" title="Learn more about me">
					Home
				</a>
				<a className="menu-link" href="#about" title="Learn more about me">
					About
				</a>
				<a className="menu-link" href="#projects" title="View my work">
					Projects
				</a>
				<a className="menu-link" href="#contact" title="Contact me">
					Contact
				</a>
				<a
					className="footer-icon"
					href={linkedInUrl}
					title="View my LinkedIn profile"
					target="_blank"
				>
					<i
						className="fa-brands fa-linkedin menu-icon"
						style={{ color: '#0a0a0a' }}
					></i>
				</a>
				<a
					className="footer-icon"
					href={githubUrl}
					title="View my source code on GitHub"
					target="_blank"
				>
					<i
						className="fa-brands fa-square-github menu-icon"
						style={{ color: '#000000' }}
					></i>
				</a>
			</nav>
		</div>
	);
}

export default Footer;
