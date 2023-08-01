import React from "react";
import "../../styles/home.css";

export const Home = () => {

	return (

	<div className="video-container">
        <video autoPlay loop muted className="video-background">
        <source src="https://cdn.pixabay.com/vimeo/602894784/astronave-87995.mp4?width=640&hash=735a1e6db188cb2037c05eaca41398fdb3870306" type="video/mp4" />
        </video>
    </div>
    
	)
};
