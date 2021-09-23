import styled from "styled-components";

export const Top = styled.div `
	position: fixed;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2em;
	border-bottom: 1px solid #363636;
	
	img {
		position: absolute;
		left: 1em; 
		top: 10%;
		width: 8em;
		cursor: pointer;
		
	}

	div {
		width: 30em;
		position: relative;
		overflow: hidden;
	}

	div > input {
		position: relative;
		padding: 1em;
		width: 100%;
		border: 2px solid #363636;
		outline: none;
	}
	div > button {
		position: absolute;
		width: 3.5em;
		height: 3.5em;
		right: 0;
		background: linear-gradient(180deg, rgba(162,111,49,1) 0%, rgba(245,214,127,1) 35%, rgba(162,111,49,1) 100%);
		cursor: pointer;
	}
	div > button::before {
		content: "➢";
		font-size: 2em;
		width: 2em;
		height: 2em;
		color: #FFF;
	}

	@media(max-width: 680px) {
		align-items: center;
		flex-direction: column;

		img{
			position: relative;
			left: 0;
		}
		div {
			width: 100%;
		}
	}
`;