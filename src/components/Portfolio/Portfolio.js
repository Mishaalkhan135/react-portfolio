import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicApp from "../../img/musicapp.png";
import "swiper/css";
const Portfolio = () => {
	return (
		<div className='portfolio' id='Portfolio'>
			{/* heading */}
			<span>Recent projects</span>
			<span>Portfolio</span>
			{/* slider */}
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				className='portfolio-slider'
			>
				<SwiperSlide>
					<img src={Slidebar} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Ecommerce} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={hoc} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={musicApp} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
