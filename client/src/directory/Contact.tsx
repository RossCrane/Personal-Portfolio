import React, { useState } from 'react';
import '../css/Contact.css';
import { aboutDetails } from '../Util/PersonalizedInfo';
import Modal from './Modal';

interface EssentialKeywords {
	[key: string]: string[];
}

interface ValidationResult {
	correct: boolean;
	message: string;
}

function Contact() {
	const { email, phone, linkedInUrl, linkedInPersonal, mailTo, callTo } =
		aboutDetails;
	const [inputValue, setInputValue] = useState('');
	const [isSamModalOpen, setSamModalOpen] = useState(false);
	const [isTomModalOpen, setTomModalOpen] = useState(false);
	const [answer, setAnswer] = useState('');
	const [activeChallenge, setActiveChallenge] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const lowerCaseInputValue = inputValue.toLowerCase();
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
			case 'sam':
				setSamModalOpen(true);
				setActiveChallenge('sam');
				break;
			case 'tom':
				setTomModalOpen(true);
				setActiveChallenge('tom');
				break;
			default:
				alert('Incorrect magic word');
		}
		setInputValue('');
	};

	const handleModalClose = () => {
		setSamModalOpen(false);
		setTomModalOpen(false);
		setAnswer('');
		setActiveChallenge('');
	};

	const handleAnswerSubmit = () => {
		let validationResult;
		console.log(inputValue);
		if (activeChallenge === 'sam') {
			validationResult = validateLogicPuzzleAnswer(answer);
		} else if (activeChallenge === 'tom') {
			validationResult = validateReverseEngineeringAnswer(answer);
		} else {
			return;
		}

		alert(validationResult.message);
		if (validationResult.correct) {
			handleModalClose();
		}
	};

	const validateReverseEngineeringAnswer = (userAnswer: string) => {
		const normalizedAnswer = userAnswer.toLowerCase();
		const keyPhrases = [
			'doubles the input',
			'multiplies by two',
			'returns twice the input',
			'doubles',
			'multiplies input by 2',
			'multiplies by 2',
			'x*2',
			'x * 2',
			'x times 2',
			'x times two',
			'x multiplied by 2',
			'x doubled',
			'x2',
		];
		const isCorrect = keyPhrases.some((phrase) =>
			normalizedAnswer.includes(phrase)
		);

		return {
			correct: isCorrect,
			message: isCorrect ? 'Correct! Well done.' : 'Incorrect. Try again!',
		};
	};

	const essentialKeywords: EssentialKeywords = {
		ask: ['ask', 'question', 'inquire', 'query'],
		guard: ['guard', 'watchman', 'sentinel'],
		other: ['other', 'second', 'opposite'],
		say: ['say', 'tell', 'speak', 'state', 'declare'],
	};

	const checkWordWithTypos = (word: string, input: string): boolean => {
		const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const pattern = escapedWord
			.split('')
			.map((ch) => {
				return `[${ch}${ch.toUpperCase()}]?`;
			})
			.join('\\w*');

		const regex = new RegExp(`\\b${pattern}\\b`, 'g');
		return regex.test(input);
	};

	const checkCompleteAnswer = (input: string): boolean => {
		const patterns = [
			/ask.*other.*guard/i,
			/if.*asked.*other.*what/i,
			/what.*other.*say/i,
		];

		return patterns.some((pattern) => pattern.test(input));
	};

	const validateLogicPuzzleAnswer = (userAnswer: string): ValidationResult => {
		const normalizedAnswer = userAnswer.toLowerCase();

		if (!checkCompleteAnswer(normalizedAnswer)) {
			return {
				correct: false,
				message:
					'The answer seems incomplete. Make sure to phrase your question to use information from both guards.',
			};
		}

		const allKeywordsPresent = Object.keys(essentialKeywords).every((key) =>
			essentialKeywords[key].some((synonym) =>
				checkWordWithTypos(synonym, normalizedAnswer)
			)
		);

		if (allKeywordsPresent) {
			return {
				correct: true,
				message: "Well done! You've figured out the right question to ask.",
			};
		}

		return {
			correct: false,
			message:
				'Not quite right. Try rephrasing your question to involve both guards and make it impossible for the lying guard to deceive you.',
		};
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
			<Modal isOpen={isSamModalOpen} onClose={handleModalClose}>
				<p>
					Solve the following logic puzzle: There are two doors. One door leads
					to your dream job, and the other door leads to a room full of mirrors.
					Each door is guarded by a guard. One guard always tells the truth, and
					the other guard always lies. You can ask one guard one question to
					determine which door to open. What do you ask?
				</p>
				<input
					type="text"
					className="form-control"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					placeholder="Your answer"
				/>
				<button className="btn btn-primary" onClick={handleAnswerSubmit}>
					Submit Answer
				</button>
			</Modal>
			<Modal isOpen={isTomModalOpen} onClose={handleModalClose}>
				<p>
					Reverse Engineering Challenge: What does this code do? Type your guess
					below.
				</p>
				<pre>{`function d(x){return x*2;}`}</pre>
				<input
					type="text"
					className="form-control"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					placeholder="Your answer"
				/>
				<button className="btn btn-primary" onClick={handleAnswerSubmit}>
					Submit Answer
				</button>
			</Modal>
		</div>
	);
}

export default Contact;
