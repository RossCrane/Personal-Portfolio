import '../css/About.css';
import fullProfile from '../../public/assets/Dylan-Profile-Correct-Size.jpg';
import resume from '../../public/assets/Ross-Crane-Resume.pdf';
import { aboutDetails } from '../Util/PersonalizedInfo';
import zigIcon from '../../public/assets/Zig-Icon.svg';
import pythonIcon from '../../public/assets/Python-Icon.svg';
import typescriptIcon from '../../public/assets/TypeScript-Icon.svg';

function About() {
	const { linkedInUrl, githubUrl, aboutMeText } = aboutDetails;

	return (
		<div className="About" id="about">
			<div className="about-container">
				<div className="header-container sm-header">
					<h2>About Me</h2>

					<div>
						<a
							className="header-icon"
							href={linkedInUrl}
							title="View my LinkedIn profile"
							target="_blank"
						>
							<i
								className="fa-brands fa-linkedin"
								style={{ color: '#000000' }}
							></i>
						</a>
						<a
							className="header-icon"
							href={githubUrl}
							title="Explore my projects on GitHub"
							target="_blank"
						>
							<i
								className="fa-brands fa-square-github"
								style={{ color: '#000000' }}
							></i>
						</a>
					</div>
				</div>
				<img
					src={fullProfile}
					alt="professional photo"
					title="Professional photo of Ross Crane"
					className="about-photo"
					style={{ filter: 'var(--filter-img)' }}
				/>
				<div>
					<div className="header-container lg-header">
						<h2>About Me</h2>
						<div>
							<a
								className="header-icon"
								href={linkedInUrl}
								title="View my LinkedIn profile"
								target="_blank"
							>
								<i
									className="fa-brands fa-linkedin"
									style={{ color: '#0a0a0a' }}
								></i>
							</a>
							<a
								className="header-icon"
								href={githubUrl}
								title="Explore my projects on GitHub"
								target="_blank"
							>
								<i
									className="fa-brands fa-square-github"
									style={{ color: '#000000' }}
								></i>
							</a>
						</div>
					</div>
					<p className="skills">
						&lt;Experienced with Python, Typescript, Zig (novice), React,
						Angular, Node.js, Express, MongoDB, SQL, Responsive Web Development,
						CSS, GitHub, APIs&gt;
					</p>
					{aboutMeText.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
					<div className="about-section-footer">
						<div className="icons-container">
							<a
								href="https://www.typescriptlang.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={typescriptIcon}
									alt="typescript programming language icon"
									className="language-icon"
								/>
							</a>
							<a
								href="https://www.python.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={pythonIcon}
									alt="python programming language icon"
									className="language-icon"
								/>
							</a>
							<a
								href="https://ziglang.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={zigIcon}
									alt="zig programming language icon"
									className="language-icon"
								/>
							</a>
						</div>
						<button
							className="resume-button btn btn-dark"
							style={{ backgroundColor: 'var(--button-color)' }}
						>
							<a
								href={resume}
								target="_blank"
								download="Resume-Ross Crane"
								className="primary-link resume"
								style={{ color: 'var(--dark-color)' }}
							>
								Download Resume
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
