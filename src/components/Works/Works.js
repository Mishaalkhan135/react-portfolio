import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
const Works = () => {
	return (
		<div className='works'>
			{/* left side */}
			<div className='awesome'>
				<span>Works for All these</span>
				<span>Brands & clients</span>
				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit
					<br /> Voluptate, iusto adipisicing elit
					<br />
					Voluptate, iusto adipisicing elit
					<br />
					Lorem ipsum, dolor sit amet consectetur
				</span>
				<button className='button s-button'>Hire Me</button>
				<div
					className='blur s-blue'
					style={{ background: "#ABF1FF49" }}
				></div>
			</div>
			{/* right side  */}
			<motion.div
				initial={{ rotate: 45 }}
				whileInView={{ rotate: 0 }}
				viewport={{ margin: "-40px" }}
				transition={{ duration: 3.5, type: "spring" }}
				className='w-right'
			>
				<div className='w-mainCircle'>
					<div className='w-secCircle'>
						<img src={Upwork} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={Fiverr} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={Amazon} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={Shopify} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={Facebook} alt='' />
					</div>
				</div>
				{/* background circles */}
				<div className='w-backCircle blueCircle'></div>
				<div className='w-backCircle yellowCircle'></div>
			</motion.div>
		</div>
	);
};

export default Works;
