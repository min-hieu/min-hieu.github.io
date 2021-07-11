import './scss/App.scss';
import Navbar from './components/navbar.js';
import Home from './Home.js';
import Blogs from './Blogs.js';
import { BrowserRouter as Router, Route, Switch } from 
	'react-router-dom';

function App() {
  return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/"> <Home /> </Route>
					<Route path="/blogs"> <Blogs /> </Route>
				</Switch>
			</div>
		</Router>
  );
}



export default App;
