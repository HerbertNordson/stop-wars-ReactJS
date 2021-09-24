import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import { Context } from "../../context/context";
import api from '../../services/api'

import { Top } from './styled'
import stopWars from '../../assets/img/stop-wars.svg';


const Header = () => {
	const ctx = useContext(Context);
	const [valor, setValor] = useState('');
	const [obrigatorio, setObrigatrio] = useState(false);
	const history = useHistory();

	async function getUserData() {
		if (valor === ''){
			setObrigatrio(true);
		} else {
			try {
	
				const response = await api.get(`/starships/`);
				ctx.setData(response.data.results);
				ctx.setDistancia(valor);
			} catch(err) {
					alert('Error 403: Servidor não está respondendo!');
					setObrigatrio(false);
			}
		}
	}

	function handleClick() {
		history.push("/");
	}

	return (
		<Top>
			<img src={stopWars}  alt="logo-stopWars" onClick={handleClick}/>
			<div>
				<input type="number" placeholder="Insira aqui a distância" value={valor} onChange={e => setValor(e.target.value)}/>
				<button onClick={getUserData}></button>
				{obrigatorio ? 
					<span>Campo obrigatório</span>
					: ''
				}
			</div>
		</Top>
	)
} 

export default Header;