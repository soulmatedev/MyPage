import React from "react";
import './styles/__navbar-content.scss';
import {Button} from "@mui/material";
import logo from './images/logo.png';
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<header className='navbar'>
			<div className='navbar-content'>
				<div className='navbar-content_logo'>
					<Link to='/'>
						<img src={logo} alt='logo'></img>
					</Link>
				</div>
				<ul className='navbar-content_ul'>
					<li className='navbar-content_li'>
						<Link to='/'>
							Meeting
						</Link>
					</li>
					<li className='navbar-content_li'>
						<Link to='/services'>
							Services
						</Link>
					</li>
					<li className='navbar-content_li'>
						<Link to='/about'>
							About
						</Link>
					</li>
				</ul>
				<Button
					className='navbar-content_button-outlined'
					variant='outlined'
				>
					<Link to='/contacts'>
						Contact me
					</Link>
				</Button>
			</div>
		</header>
	)
}

export default Navbar;