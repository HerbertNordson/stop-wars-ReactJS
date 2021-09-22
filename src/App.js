import './App.css';
import { calculoDeParadas } from './components/Scripts';

function App() {
  return (
    <div className="App">
      <p>
	   {calculoDeParadas(1000000 , 75, "2 months")}
	  </p>
    </div>
  );
}

export default App;
