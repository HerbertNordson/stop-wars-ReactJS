import React from "react"
import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import ListView from "../pages/ListShips";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={ Home }>
				<Home />
			</Route>
			<Route path="/list" component={ Home }>
				<ListView />
			</Route>
		</Switch>
	)
} 

export default Routes;