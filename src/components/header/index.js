import React from "react";
import { Top } from './styled'

import stopWars from '../../assets/img/stop-wars.svg';

const Header = () => {
	return (
		<Top>
			<img src={stopWars}  alt="logo-stopWars" href="/"/>
			<div>
				<input placeholder="Insira aqui a distância" />
				<button  ></button>
			</div>
		</Top>
	)
} 

export default Header;