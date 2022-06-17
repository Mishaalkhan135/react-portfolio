import React from "react";
import "./Servise.css";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
// import Resume from "./resume.pdf";
const Services = () => {
	const transition = { duration: 1, type: "spring" };
	return (
		<div className='servises' id='Services'>
			{/* left side */}
			<div className='awesome'>
				<span>My Awesome</span>
				<span>Services</span>
				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit
					<br /> Voluptate, iusto.
				</span>
				<a href='#' download>
					<button className='button s-button'>Download CV</button>
				</a>
				<div
					className='blur s-blue'
					style={{ background: "#ABF1FF49" }}
				></div>
			</div>
			{/* right side */}
			<motion.div
				initial={{ left: "30rem" }}
				whileInView={{ left: "5rem" }}
				transition={transition}
				className='cards'
			>
				<div style={{ left: "14rem" }}>
					<Card
						emoji={heart}
						heading={"Design"}
						detail={"Figma,Sketch,Photoshop,Adobe,Adoby xd"}
					/>
				</div>
				{/* second card */}
				<div style={{ top: "12rem", left: "-4rem" }}>
					<Card
						emoji={glasses}
						heading={"Developer"}
						detail={"html,Css,Javascript,React "}
					/>
				</div>
				{/* third card */}
				<div style={{ top: "19rem", left: "16rem" }}>
					<Card
						emoji={humble}
						heading={"UI/UX"}
						detail={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, accusantium!"
						}
					/>
				</div>
				<div
					className='blur s-blur2'
					style={{ background: "var(--purple)" }}
				></div>
			</motion.div>
		</div>
	);
};

export default Services;
