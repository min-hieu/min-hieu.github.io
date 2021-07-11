import '../scss/blog-card.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';


function Blogcard(props) {
	let [rootNode] = useState(0);

	useEffect(() => {
		VanillaTilt.init(rootNode, {
			max: 30,
			scale: 1.2,
			speed: 400,
			glare: true,
			'max-glare': 0.8,
		});
	})

	return (
		<Link to={props.link}>
			<div
				ref={node => (rootNode = node)}
				className="Blogcard-root"
				>
					<div className="Blogcard-child disable-select">
							{props.title}
							<p>
							{props.desc}
							</p>
							{props.bgImage}
					</div>
			</div>
		</Link>
	)
}

export default Blogcard;