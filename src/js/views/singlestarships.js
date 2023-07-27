import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlestarships = props => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

	const [starships, setStarships] = useState(
		JSON.parse(localStorage.getItem("starships"))
	  );
	

	const [apifinal, setApifinal] = useState({});
  	const host = "https://www.swapi.tech/api/starships/";

  	const fetchApifinal = async () => {
    const url = host + id;
    const request = {
      method: "GET",
    };

    const response = await fetch(url, request);

    if (response.ok) {
      const data = await response.json();
      setApifinal(data);
    } else {
      console.log("Error", response.status, response.statusText);
    }
  	};

  useEffect(() => {
    fetchApifinal();
  }, [id]);


console.log(apifinal)
	  
	return (
		<div className="container mt-5">

		<div className="card mb-3">
			<div className="row">

				<div className="col-md-7 col-lg-6 col-xl-5">
					<img 
					className="img-fluid rounded start" 
					src={"https://starwars-visualguide.com/assets/img/starships/" + (id) + ".jpg"} 
					/>
				</div>
				
				
				<div className="col-md-5 col-lg-6 col-xl-7">
					<div className="card-body">
						<h1 className="mb-4">{starships.results[id - 1].name}</h1>

						{!apifinal.result ? (
							<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						  	</div>
						) : (
							<div>
							 <p><b>Cost: </b>{apifinal.result.properties.cost_in_credits}</p>
							 <p><b>Length: </b>{apifinal.result.properties.length}</p>
							 <p><b>Passengers: </b>{apifinal.result.properties.passengers}</p>
							 <p><b>Cargo capacity: </b>{apifinal.result.properties.cargo_capacity}</p>
							 
							</div>
						)
						}


					</div>
				</div>

			</div>
		</div>
			
		</div>
	);
};