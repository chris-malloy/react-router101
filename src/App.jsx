import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Add the react router
// BrowserRouter as Router is the main Component
// Link replaces a tags
// route is like router.get
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// Components
import Home from './Home';
import About from './About';
import Topics from './Topics'

class App extends Component {
	render() {
		// Router goes around everything that should be controlled by the router
		return (
			<Router>
				<div className="App">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
					{/* clicking on /about path will inject About.js html into DOM */}
					{/* a note, use keyword exact to get exactly that path */}
					<Route exact path="/" render={() => (
						<Home title="Home Page" teams={['Pats','Vikings','Falcons']} />
					)} />
					<Route path="/about" component={About} />
					<Route path="/Topics" component={Topics} />
				</div>
			</Router>
		);
	}
}

export default App;
