import React, { useEffect, useRef } from 'react';
import '../css/Home.css';
import { aboutDetails } from '../Util/PersonalizedInfo';

function applyTypewriterEffect(element) {
	const text = element.textContent;
	element.textContent = '';
	element.style.visibility = 'visible';

	let charIndex = 0;
	const typingSpeed = Math.floor(Math.random() * (200 - 10 + 1)) + 10; // random typing speed between 10 and 200 milliseconds

	function type() {
		if (charIndex < text.length) {
			element.textContent += text.charAt(charIndex);
			charIndex++;
			setTimeout(type, typingSpeed);
		}
	}

	type();
}

function Home() {
	const { name, username, jobTitle, location } = aboutDetails;

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			applyTypewriterEffect(document.querySelector('.Home h3'));
		}, 5000); // delay to make it more noticeable

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className="Home" id="home">
			<div
				className="background-home home-background m-0"
				style={{
					backgroundImage: 'var(--home-img)',
					color: 'var(--bright-color)',
				}}
			>
				<div className="container">
					<h1>{name}</h1>
					<h2>
						&lt;{jobTitle} from {location}.&gt;
					</h2>
					<h3>({username})</h3>
				</div>
			</div>
		</div>
	);
}

export default Home;
