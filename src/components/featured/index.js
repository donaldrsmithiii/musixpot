import React from 'react';
import Carrousel from './Carrousel';
import Counter from './Counter';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carrousel />

			<div className="artist_name">
				<div className="wrapper">John Mayer</div>
			</div>

			<Counter/>
		</div>
	);
};

export default Featured;
