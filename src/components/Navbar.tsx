import React from "react";
import './styles/__main-page-header_content.scss';
import {Button} from "@mui/material";
import logo from './images/logo.png';

const Navbar = () => {
	return (
		<header className='navbar'>
			<div className='navbar-content'>
				<div className='navbar-content_logo'>
					<img src={logo} alt='logo'></img>
				</div>
				<ul className='navbar-content_ul'>
					<li className='navbar-content_li'>
						Meeting
					</li>
					<li className='navbar-content_li'>
						Services
					</li>
					<li className='navbar-content_li'>
						About
					</li>
				</ul>
				<Button
					className='navbar-content_button-outlined'
					variant='outlined'
				>
					Contact me
				</Button>
			</div>
		</header>
	)
}

export default Navbar;