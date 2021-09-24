import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = props => {
	const [data, setData] = useState(); 
	const [distancia, setDistancia] = useState();
	return (
		<Context.Provider value={{
			data,
			distancia,
			setData,
			setDistancia
		}}>
			{props.children}
		</Context.Provider>
	);
}