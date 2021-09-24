import React from "react";
import { List, CardShips, Resultado } from './styled'

import { calculoDeParadas } from '../../utils/calculator'

const Card = props => {
	const resultado = props.dist;
	const data = props.info;


	return (
		<List>
			{(data).map(ctxData => (
			<CardShips>
				<div>
					<Resultado>
						<h2>{calculoDeParadas(resultado, ctxData.MGLT, ctxData.consumables )}</h2>
						<span>MGLT</span>
					</Resultado>
				</div>
				<h1>{ctxData.name}</h1>
			</CardShips>
			))}
		</List>
	)
}

export default Card;