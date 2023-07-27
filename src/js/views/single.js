import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

	const [characters, setCharacters] = useState(
		JSON.parse(localStorage.getItem("characters"))
	  );
	

	const [apifinal, setApifinal] = useState({});
  	const host = "https://www.swapi.tech/api/people/";

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
					src={"https://starwars-visualguide.com/assets/img/characters/" + (id) + ".jpg"} 
					/>
				</div>
				
				
				<div className="col-md-5 col-lg-6 col-xl-7">
					<div className="card-body">
						<h1 className="mb-4">{characters.results[id - 1].name}</h1>

						{!apifinal.result ? (
							<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						  	</div>
						) : (
							<div>
							 <p><b>Height: </b>{apifinal.result.properties.height}</p>
							 <p><b>Mass: </b>{apifinal.result.properties.mass}</p>
							 <p><b>Hair color: </b>{apifinal.result.properties.hair_color}</p>
							 <p><b>Skin color: </b>{apifinal.result.properties.skin_color}</p>
							 <p><b>Eye color: </b>{apifinal.result.properties.eye_color}</p>
							 <p><b>Birth year: </b>{apifinal.result.properties.birth_year}</p>
							 <p><b>Gender: </b>{apifinal.result.properties.gender}</p>
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

Single.propTypes = {
	match: PropTypes.object
};
