import '../scss/navbar.scss';
import NavButton from './button.js';
import React from 'react';

function Navbar() {
  return (
	  <nav class="menu">
			<NavButton text="Home" link="/" />
			<NavButton text="projects" link="/projects"/>
			<NavButton text="blogs" link="/blogs"/>
			<NavButton text="about" link="/about"/>
		</nav>
  );
}

export default Navbar;
