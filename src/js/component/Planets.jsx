import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Planets = () => {
  
  const {store, actions} = useContext(Context);
  
  const [planets, setPlanets] = useState(
    JSON.parse(localStorage.getItem("planets"))
  );

  const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

  return (
    
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5">

      {planets.results.map((item, index) =>( 

          <div className="col">
          <div className="card mb-5" >
          <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"} 
          className="card-img-top" 
          onError={handleOnErrorImg}>   
          </img>
          
          <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          
          <div className="d-flex justify-content-between">
          <Link to={"/planets/" + (index + 1)} 
          className="btn btn-warning mt-2">
          Details
          </Link>
          
          <button onClick={() => actions.addFavorite(item.name)} 
          type="button" 
          className="btn text-end  btn-danger">
	        <i className="fa fa-heart"></i>
          </button>
          </div>
          
          
          </div>
          </div>
          </div>
      ))}
      
      </div>    
    </div>
  );
};