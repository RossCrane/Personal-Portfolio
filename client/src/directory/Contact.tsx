import '../css/Contact.css';
import { aboutDetails } from '../Util/PersonalizedInfo';

function Contact() {
	const { email, phone, linkedInUrl, linkedInPersonal, mailTo, callTo } =
		aboutDetails;
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
			</div>
		</div>
	);
}

export default Contact;
