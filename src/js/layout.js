import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Singleplanets } from "./views/singleplanets";
import { Singlestarships } from "./views/singlestarships";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Characters } from "./component/Characters.jsx";
import { Planets } from "./component/Planets.jsx";
import { Starships } from "./component/Starships.jsx";

import '../styles/index.css'

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar className="navbar" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:id" element={<Single />} />						
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:id" element={<Singleplanets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:id" element={<Singlestarships />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
