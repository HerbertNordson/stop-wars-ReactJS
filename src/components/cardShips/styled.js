import styled from "styled-components";

export const List = styled.section ` 
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;
	padding-top: 10em;
	padding-bottom: 2em;

	@media(max-width: 680px) {
		padding-top: 14em;
	}
`;

export const CardShips = styled.article ` 
	text-align: center;
	border: 2px solid #363636;
	border-radius: .5em;
	padding: 1em;
	margin-bottom: 2em;
	width: 40%;
	overflow: hidden;

	h1 {
		border-top: 2px solid rgb(162,111,49);
		margin: auto;
		padding-top: .5em;
	}

	@media(max-width:680px){
		width: 90%;
	}
`;

export const Resultado = styled.div ` 
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	margin: auto;
	text-align: center;
	padding-bottom: 1em;

	h2 {
		display: block;
		text-align: center;
		font-size: 8em;
		color: rgb(162,111,49);
	}
	span {
		text-align: end;
		font-size: 1.4em;
		margin-top: -1.2em;
	}

	@media(max-width:680px){

		h2 {
			font-size: 4em;
		}
		span {
			margin-top: 0;
		}
	}
`;