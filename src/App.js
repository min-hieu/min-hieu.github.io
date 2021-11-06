import './scss/App.scss';
import Navbar from './components/navbar.js';
import Home from './Home.js';
import NewSession from './containers/session/new/NewSession';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/"> <Home /> </Route>
					<Route exact path="/createSession"> <createSession /> </Route>
				</Switch>
			</div>
		</Router>
  );
}



export default App;
