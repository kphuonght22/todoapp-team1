import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import HeaderController from './components/HeaderController';
import ListScreen from './components/Screens/ListScreen';
import TeamScreen from './components/Screens/TeamScreen';

class App extends Component {
	render() {
		return (
			<Router>
				<Route to="/" exact><HeaderController/></Route>
				<Switch>
					<Route path='/' exact><ListScreen/></Route>
					<Route path="/team"><TeamScreen/></Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
