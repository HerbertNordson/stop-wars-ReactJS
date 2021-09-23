import React from "react";
import { Container } from "../assets/styled/styled-global";
import Header from '../components/header'
import Footer from '../components/footer'
import Card from "../components/cardShips";

const Home = () => {
	return (
		<Container>
			<Header/>
			<Card/>
			<Footer/>
		</Container>
	)
}

export default Home;