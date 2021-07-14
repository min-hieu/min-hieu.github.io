import '../scss/blog-card.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

function Blogcard(props) {
	let [rootNode] = useState(0);

	useEffect(() => {
		VanillaTilt.init(rootNode, {
			max: 30,
			scale: 1.5,
			speed: 800,
			glare: true,
			"max-glare": 0.8,
		});
	})

	return (
		<Link to={props.link}>
			<div
				ref={node => (rootNode = node)}
				className="Blogcard-root"
				style={{'--bgImage': `url(${props.bgImage})`}}
				>
					<div className="Blogcard-child disable-select">
						<img className='blogcard-overImage' 
							src={`${props.overImage}`}></img>
						<span className='blogcard-title'>{props.title}</span>
						<span className='blogcard-desc'>{props.desc}</span>
					</div>
			</div>
		</Link>
	)
}

export default Blogcard;