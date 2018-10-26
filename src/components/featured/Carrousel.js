import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../images/slide_one.jpg';
import slide_two from '../../images/slide_two.jpg';
import slide_three from '../../images/slide_three.jpg';
import slide_four from '../../images/slide_four.jpg';

const Carrousel = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed:3000,
		dots: false,
		infinite: true,
		speed: 500
	};
	return (
		<div
			className="carrousel_wrapper"
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden'
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_one})`,
							height: `${window.innerHeight}px`
						}}
					></div>
				</div>

				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_two})`,
							height: `${window.innerHeight}px`
						}}
					></div>
				</div>

				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_three})`,
							height: `${window.innerHeight}px`
						}}
					></div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_four})`,
							height: `${window.innerHeight}px`
						}}
					></div>
				</div>
			</Slider>
		</div>
	);
};

export default Carrousel;
