import React, {useContext} from "react";
import {Context} from "../store/appContext.js";

export const BtnFavorites = () => {

const {store, actions} = useContext(Context);

const myFavorites = store.favorites;

return (
    <div className="dropdown">

        <button 
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
        Favorites
        </button>

        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            {myFavorites.length === 0 ? (
                <li><span className="dropdown-item">No favorites selected</span></li>
            ) : (
                myFavorites.map((item, id) => (
                    <li key={id} className="d-flex align-items-center">
                        <span className="dropdown-item">{item}</span>
                        <button 
                        type="button" 
                        className="btn btn-oytline-danger me-2"
                        onClick={() => actions.removeFavorite(id)}
                        >
                        <i className="fa fa-trash text-danger"></i>
                        </button>

                    </li>
                )
               )
            )
            }

        </ul>


    </div>
)
}