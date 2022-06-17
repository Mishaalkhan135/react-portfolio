import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
	const form = useRef();
	const [done, setDone] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_dfhq819",
				"template_ms6dyun",
				form.current,
				"DwLZvz0vahzwsl4h5"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='contact-form'>
			<div className='c-left'>
				<div className='t-heading'>
					<span>Get in touch </span>
					<span>Contact me</span>
				</div>
			</div>
			<div className='c-right'>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='user_name'
						className='user'
						placeholder='Name'
					/>
					<input
						type='email'
						name='user_email'
						className='user'
						placeholder='Email'
					/>
					<textarea
						name='message'
						className='user'
						placeholder='Message'
					/>
					<input type='submit' value='Send' className='button' />
					<span>{done && "Thanks for contacting me!"}</span>
				</form>
			</div>
		</div>
	);
};

export default Contact;
