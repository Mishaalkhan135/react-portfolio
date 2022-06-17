import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonials = () => {
	const clients = [
		{
			img: profilePic1,
			review: "Olive Morris (1952–1979) was a Jamaican-born and British-based community leader and activist. She participated in the black nationalist, feminist and squatters' rights campaigns of the 1970s. She joined the British Black Panthers, occupied buildings in Brixton, South London.",
		},
		{
			img: profilePic2,
			review: "Olive Morris (1952–1979) was a Jamaican-born and British-based community leader and activist. She participated in the black nationalist, feminist and squatters' rights campaigns of the 1970s. She joined the British Black Panthers, occupied buildings in Brixton, South London.",
		},
		{
			img: profilePic3,
			review: "Olive Morris (1952–1979) was a Jamaican-born and British-based community leader and activist. She participated in the black nationalist, feminist and squatters' rights campaigns of the 1970s. She joined the British Black Panthers, occupied buildings in Brixton, South London.",
		},
		{
			img: profilePic4,
			review: "Olive Morris (1952–1979) was a Jamaican-born and British-based community leader and activist. She participated in the black nationalist, feminist and squatters' rights campaigns of the 1970s. She joined the British Black Panthers, occupied buildings in Brixton, South London.",
		},
	];
	return (
		<div className='t-wrapper' id='Testimonials'>
			<div className='t-heading'>
				<span>Clients always get </span>
				<span>Exceptional Work </span>
				<span>form me ...</span>
			</div>
			{/* slider */}
			<Swiper
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='testimonial'>
								<img src={client.img} alt='' />
								<span>{client.review}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonials;
