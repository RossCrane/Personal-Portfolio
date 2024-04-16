import React, { useState } from 'react';
import '../css/Contact.css';
import { aboutDetails } from '../Util/PersonalizedInfo';

function Contact() {
	const { email, phone, linkedInUrl, linkedInPersonal, mailTo, callTo } =
		aboutDetails;
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const lowerCaseInputValue = inputValue.toLowerCase(); // Convert input value to lowercase
		switch (lowerCaseInputValue) {
			case 'alertsecret':
				alert('You have unlocked the secret!');
				break;
			case 'audiosecret':
				// Assuming secretMedia is defined and accessible
				// const secretMedia = document.getElementById('secretMedia');
				// secretMedia.play();
				alert('Magic word entered! Playing secret media...');
				break;
			case 'redirectsecret':
				window.location.href = 'https://www.google.com';
				break;
			case 'printsecret':
				window.print();
				break;
			case 'consolesecret':
				console.log('Console secret activated!');
				break;
			case 'hacker':
				alert(getBrowserInfo());
				break;
			default:
				alert('Incorrect magic word');
		}
		setInputValue(''); // Reset
	};

	function getBrowserInfo() {
		return (
			`Browser Name: ${navigator.appName}\n` +
			`Browser Version: ${navigator.appVersion}\n` +
			`User-Agent: ${navigator.userAgent}\n` +
			`Platform: ${navigator.platform}\n` +
			`Language: ${navigator.language}`
		);
	}

	return (
		<div className="Contact" id="contact">
			<h2>Contact Me</h2>
			<h3>&lt;Let's get in touch!&gt;</h3>
			<div
				className="contact-block"
				style={{ backgroundColor: 'var(--button-color)' }}
			>
				<ul>
					<li>
						<i
							className="contact-icon fa-solid fa-envelope"
							style={{ color: 'var(--dark-color)' }}
						></i>
						<a
							href={mailTo}
							target="_blank"
							className="contact"
							style={{ color: 'var(--dark-color)' }}
						>
							{email}
						</a>
					</li>
					<li>
						<i
							className="contact-icon fa-solid fa-square-phone"
							style={{ color: 'var(--dark-color)' }}
						></i>
						<a
							href={callTo}
							target="_blank"
							className="contact"
							style={{ color: 'var(--dark-color)' }}
						>
							{phone}
						</a>
					</li>
					<li>
						<i
							className="contact-icon fa-brands fa-linkedin"
							style={{ color: 'var(--dark-color)' }}
						></i>
						<a
							href={linkedInUrl}
							target="_blank"
							className="contact"
							style={{ color: 'var(--dark-color)' }}
						>
							{linkedInPersonal}
						</a>
					</li>
				</ul>
				<form
					onSubmit={handleSubmit}
					className="d-flex justify-content-center align-items-center mt-4"
					style={{ flexDirection: 'column' }}
				>
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Enter the magic word"
						className="form-control secret-input mb-2"
						style={{ maxWidth: '300px' }}
					/>
					<button
						type="submit"
						className="btn btn-primary secret-button"
						style={{ backgroundColor: 'green' }}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
