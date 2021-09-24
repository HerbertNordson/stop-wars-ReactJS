import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './services/routes';

import { Container } from './assets/styled/styled-global';

import { ContextProvider } from './context/context'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
		<ContextProvider> 
			<Header/>
			<Container>	
				<Router>
					<Routes />
				</Router>
			</Container>	
			<Footer/>
		</ContextProvider>
    </div>
  );
}

export default App;
