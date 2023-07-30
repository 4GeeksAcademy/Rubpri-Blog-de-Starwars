import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.css";
import {BtnFavorites} from "./BtnFavorites.jsx"

export const Navbar = () => {

	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 element">
			
			<Link to="/">
			 <span className="navbar-brand mb-0 h1">
				<img src="https://loghi-famosi.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" 
				className="ms-5"
				style={{ width: '80px', height: '50px' }} 
				/>
			 </span>
			</Link>

			
			<div className="d-flex navright">

			<div className="ml-auto me-5">
				<Link to="/characters">
				 <h5>Characters</h5>
				</Link>
			</div>

			<div className="ml-auto me-5 ">
				<Link to="/Planets">
				 <h5>Planets</h5>
				</Link>
			</div>

			<div className="ml-auto me-5">
				<Link to="/Starships">
				 <h5>Starships</h5>
				</Link>
			</div>

			<div className="ml-auto me-5">

				<BtnFavorites />


				
			</div>

			</div>
		</nav>
	);
};
