import React from "react";
import "./Footer.css";
import Wavy from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Githubs from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
	return (
		<div className='footer'>
			<img src={Wavy} alt='logo' style={{ width: "100%" }} />
			<div className='footer-content'>
				<span className='text'>mishaalkhan135@gmail.com</span>
				<div className='f-icon'>
					<Insta color='white' size='3rem' />
					<Facebook color='white' size='3rem' />
					<Githubs color='white' size='3rem' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
