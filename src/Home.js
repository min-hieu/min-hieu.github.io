import logo from './assets/pepe.gif';
import './scss/App.scss';

function Home() {
  return (
			<div id="Home-Content">
				<div id="Home-Text">
					<h1>
						<span>
							<span>W</span>
							<span>e</span>
							<span>l</span>
							<span>c</span>
							<span>o</span>
							<span>m</span>
							<span>e</span>
							<span> </span>
							<span>t</span>
							<span>o</span>
						</span>
					</h1>
					<h2 className="disable-select">
						<span>
							<span>H</span>
							<span>i</span>
							<span>e</span>
							<span>u</span>
							<span>'</span>
							<span>s</span>
						</span>
					</h2>
					<h2 className="disable-select">
						<span>
							<span>W</span>
							<span>e</span>
							<span>b</span>
							<span>s</span>
							<span>i</span>
							<span>t</span>
							<span>e</span>
						</span>
					</h2>
				</div>
      	<div id="Home-Image">
					<img src={logo} className="App-logo" alt="logo" />
			  </div>
			</div>
  );
}



export default Home;
