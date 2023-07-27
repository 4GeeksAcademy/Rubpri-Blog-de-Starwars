import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {
  const [planets, setPlanets] = useState(
    JSON.parse(localStorage.getItem("planets"))
  );

  return (
    
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5">

      {planets.results.map((item, index) =>( 

          <div className="col">
          <div className="card mb-5" >
          <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <Link to={"/planets/" + (index + 1)} className="btn btn-warning mt-2">Details</Link>
          </div>
          </div>
          </div>
      ))}
      
      </div>    
    </div>
  );
};