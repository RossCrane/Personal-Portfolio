import aiFoodFinderImg from '../../public/assets/AI-Food-Finder-img.png';
import digitalBusinessCardImg from '../../public/assets/Digital-Business-Card-Img.png';
import eleventhStepJourneyImg from '../../public/assets/11th-Step-Journey-Img.png';
import blackJackImg from '../../public/assets/Black-Jack-Img.png';
import passwordGeneratorImg from '../../public/assets/Password-Generator-Img.png';
import homeTownImg from '../../public/assets/Home-Town-Img.png';
import owenWilsonCounterImg from '../../public/assets/Owen-Wilson-Counter-Img.png';

export const featuredApps = [
	{
		id: 1,
		title: `AI Food Finder`,
		body: `A fullstack application designed to take the stress out of deciding what to eat by using ai to create recipes or give restaurant suggestions.`,
		stack:
			'React, JS, CSS, Node.js, Express.js, MongoDB, Mongoose, Clerk, Heroku, Vercel and OpenAI API',
		img: aiFoodFinderImg,
		alt: 'AI Food Finder app preview',
		link: 'https://ai-food-finder-client.vercel.app/',
	},
	{
		id: 2,
		title: 'Digital Business Card',
		body: `A sleek digital business card crafted to showcase elegance through simplicity, enriched with nuanced details and subtle hidden features for an engaging experience.`,
		stack: 'HTML, CSS, Javascript',
		img: digitalBusinessCardImg,
		alt: 'Digital Business Card app preview',
		link: 'https://precious-choux-134043.netlify.app/',
	},
	{
		id: 3,
		title: '11th Step Journey',
		body: `An intuitive full-stack mental wellness platform for self-help and community support.`,
		stack:
			'React, Vite, TS, CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Socket.io',
		img: eleventhStepJourneyImg,
		alt: '11th Step Journey app preview',
		link: 'https://github.com/RossCrane/11thStepJourneyClient',
	},
	{
		id: 4,
		title: 'Blackjack',
		body: `Try your hand at Blackjack! An app capable of playing one-hand blackjack between one player and a computer`,
		stack: 'HTML, CSS, Javascript and JQuery',
		img: blackJackImg,
		alt: 'blackjack app preview',
		link: 'https://simpleblackjackbyrecurseross.netlify.app/',
	},
	{
		id: 5,
		title: 'Password Generator',
		body: `A simple password generator that allows you to create a password with a length of your choosing. As well as a few other variables.`,
		stack: 'HTML, CSS and Javascript',
		img: passwordGeneratorImg,
		alt: 'Password Generator app preview',
		link: 'https://luxury-sable-ed88ed.netlify.app/',
	},
	{
		id: 6,
		title: 'Lord of the Rings Home Town',
		body: `Fun little site to play around with CSS and create a homage to Lord of the Rings.`,
		stack: 'HTML and CSS',
		img: homeTownImg,
		alt: 'LOTR Home Town app preview',
		link: 'https://benevolent-cocada-1481de.netlify.app/',
	},
	{
		id: 7,
		title: 'WOW Counter (Owen Wilson)',
		body: `This was a one hour challenge to create a counter that counts, this was my take on it.`,
		stack: 'HTML, CSS, JavaScript and Audio',
		img: owenWilsonCounterImg,
		alt: 'Owen Wilson Counter app preview',
		link: 'https://eloquent-treacle-d5885c.netlify.app/',
	},
];
