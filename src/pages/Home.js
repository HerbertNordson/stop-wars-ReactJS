import React, { useContext } from "react";
import { Container } from "../assets/styled/styled-global";

import Card from "../components/cardShips";
import { Context } from "../context/context";

export default function Home () {
	const ctx = useContext(Context);

	return (
		<Container>
			{ ctx.distancia &&
				<Card info={ctx.data} dist={ctx.distancia} />
			}
		</Container>
	)
}