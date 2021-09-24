import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import { Container } from './assets/styled/styled-global';

import { ContextProvider } from './context/context'
import Routes from './services/routes';

function App() {
  return (
    <div className="App">
		<ContextProvider> 
			<Container>	
				<Router>
					<Routes />
				</Router>
			</Container>	
		</ContextProvider>	
    </div>
  );
}

export default App;
