import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import '../scss/button.scss';

function NavButton(props) {
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
				className="NavBtn-root"
				>
					<div className="NavBtn-child disable-select">
							{props.text}
					</div>
			</div>
		</Link>
	)
}

export default NavButton;