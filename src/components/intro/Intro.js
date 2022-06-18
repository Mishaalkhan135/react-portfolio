import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkdin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
const intro = () => {
	const transition = { duration: 2, type: "spring" };
	return (
		<div className='intro' id='Home'>
			<div className='i-left'>
				<div className='i-name'>
					<span>Hy! I Am</span>
					<span>Mishaal Khan</span>
					<span>
						Frontend Developer with high level of experience in web
						designing and development,producting the Quality of work
					</span>
				</div>
				<button className='button i-button'>Hire Me</button>
				<div className='i-icons'>
					<a href='https://search.yahoo.com/search?fr=mcafee&type=E210US91213G0&p=github'>
						<img src={Github} alt='github' />
					</a>
					<a href='https://search.yahoo.com/search?fr=mcafee&type=E210US91213G0&p=www.linkedin.com'>
						<img src={Linkdin} alt='linkdin' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src={Insta} alt='instagram' />
					</a>
				</div>
			</div>
			<div className='i-right'>
				<img src={Vector1} alt='' />
				<img src={Vector2} alt='' />
				<img src={Boy} alt='' />
				<motion.img
					initial={{ left: "-36%" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					src={glassesimoji}
					alt=''
				/>
				<motion.div
					initial={{ top: "-4%", left: "74%" }}
					whileInView={{ left: "68%" }}
					transition={transition}
					style={{ top: "-4%", left: "68%" }}
					className='floating-div'
				>
					<FloatingDiv image={crown} txt1='Web' txt2='Developer' />
				</motion.div>
				<motion.div
					initial={{ top: "18rem", left: "9rem" }}
					whileInView={{ left: "0rem" }}
					transition={transition}
					style={{ top: "18rem", left: "0rem" }}
					className='floating-div'
				>
					<FloatingDiv
						image={thumbup}
						txt1='Best Design'
						txt2='Award'
					/>
				</motion.div>
				{/* blur divs */}
				<div
					className='blur'
					style={{ backgroung: "rgba(238 210 255)" }}
				></div>
				<div className='blurs'></div>
			</div>
		</div>
	);
};

export default intro;
