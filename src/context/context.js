import React, { createContext, useState } from "react";

export const Context = createContext();


export const ContextProvider = props => {
	const [distancia, setDistancia] = useState();

	return (
		<Context.Provider value={{
			distancia,
			setDistancia
		}}>
			{props.children}
		</Context.Provider>
	);
}