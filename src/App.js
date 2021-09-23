import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './services/routes';
import { Container } from './assets/styled/styled-global';

function App() {
  return (
    <div className="App">
		<Container>	
			<Router>
				<Routes />
			</Router>
		</Container>	
    </div>
  );
}

export default App;
