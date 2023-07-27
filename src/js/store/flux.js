const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			characters: () => {
				
  				const host = "https://www.swapi.tech/api/people/";

  				const fetchCharacters = async () => {
    			const url = host;
   				const request = {
     			 method: "GET",
    			};
			
    			const response = await fetch(url, request);

    			if (response.ok) {
     			const data = await response.json();
      			localStorage.setItem('characters', JSON.stringify(data))
    			} else {
      			console.log("Error", response.status, response.statusText);
    			}
  				};

				fetchCharacters();

			},

			planets: () => {
				
				const host = "https://www.swapi.tech/api/planets/";

  				const fetchPlanets = async () => {
    			const url = host;
   				const request = {
     			 method: "GET",
    			};
			
    			const response = await fetch(url, request);

    			if (response.ok) {
     			const data = await response.json();
      			localStorage.setItem('planets', JSON.stringify(data))
    			} else {
      			console.log("Error", response.status, response.statusText);
    			}
  				};

				fetchPlanets();
			},

			starships: () => {
				
				const host = "https://www.swapi.tech/api/starships/";

  				const fetchStarships = async () => {
    			const url = host;
   				const request = {
     			 method: "GET",
    			};
			
    			const response = await fetch(url, request);

    			if (response.ok) {
     			const data = await response.json();
      			localStorage.setItem('starships', JSON.stringify(data))
    			} else {
      			console.log("Error", response.status, response.statusText);
    			}
  				};

				fetchStarships();
			},
			









		}
	};
};

export default getState;
