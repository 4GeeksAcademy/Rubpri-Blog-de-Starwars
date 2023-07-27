import React from "react";
import "../../styles/home.css";

export const Home = () => {

	return (

	<div className="video-container">
        <video autoPlay loop muted className="video-background">
        <source src="https://vod-progressive.akamaized.net/exp=1690411107~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F536%2F6%2F152682484%2F469368836.mp4~hmac=e81f498fbcc6d7e3ba52206a2e035d3b66f8706d9bfb9195a25e662072e15c66/vimeo-prod-skyfire-std-us/01/536/6/152682484/469368836.mp4?filename=file.mp4" type="video/mp4" />
        </video>
    </div>
    
	)
};
