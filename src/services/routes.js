import React from "react"
import { Switch, Route} from 'react-router-dom';
import { Container } from "../assets/styled/styled-global";

import Home from '../pages/Home'
import Header from "../components/header";
import Footer from "../components/footer";


const Routes = () => {
	return (
		<Container>
			<Header/>
			<Switch>
				<Route exact path="/" component={ Home }>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Container>
	)
} 

export default Routes;