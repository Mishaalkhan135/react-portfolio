import React from "react";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<div className='n-wrapper'>
			<div className='n-left'>
				<div className='n-name'>Mishaal</div>
				<Toogle />
			</div>
			<div className='n-right'>
				<div className='n-list'>
					<ul style={{ listStyleType: "none" }}>
						<Link spy={true} to='Home' smooth={true}>
							<li>Home</li>
						</Link>
						<Link spy={true} to='Services' smooth={true}>
							<li>Services</li>
						</Link>
						<Link spy={true} to='Experience' smooth={true}>
							<li>Experience</li>
						</Link>
						<Link spy={true} to='Portfolio' smooth={true}>
							<li>Portfolio</li>
						</Link>
						<Link spy={true} to='Testimonials' smooth={true}>
							<li>Testomonials</li>
						</Link>
					</ul>
				</div>
				<button className='button n-button'>Contact</button>
			</div>
		</div>
	);
};

export default Navbar;
